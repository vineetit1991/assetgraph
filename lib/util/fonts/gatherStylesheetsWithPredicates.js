module.exports = function gatherStylesheetsWithPredicates(assetGraph, htmlAsset) {
    var assetStack = [];
    var incomingMedia = [];
    var conditionalCommentConditionStack = [];
    var result = [];
    (function traverse(asset, isWithinNotIeConditionalComment, isWithinNoscript) {
        if (assetStack.indexOf(asset) !== -1) {
            // Cycle detected
            return;
        } else if (!asset.isLoaded) {
            return;
        }
        assetStack.push(asset);
        assetGraph.findRelations({ from: asset, type: ['HtmlStyle', 'CssImport', 'HtmlConditionalComment', 'HtmlNoscript']}).forEach(function (relation) {
            if (relation.type === 'HtmlNoscript') {
                traverse(relation.to, isWithinNotIeConditionalComment, true);
            } else if (relation.type === 'HtmlConditionalComment') {
                conditionalCommentConditionStack.push(relation.condition);
                traverse(relation.to, isWithinNotIeConditionalComment || (relation.conditionalComments && relation.conditionalComments.length > 0), isWithinNoscript);
                conditionalCommentConditionStack.pop();
            } else {
                var media = relation.media;
                if (media) {
                    incomingMedia.push(media);
                }
                traverse(relation.to, isWithinNotIeConditionalComment || (relation.conditionalComments && relation.conditionalComments.length > 0), isWithinNoscript);
                if (media) {
                    incomingMedia.pop();
                }
            }
        });
        assetStack.pop();
        if (asset.type === 'Css') {
            var predicates = {};
            incomingMedia.forEach(function (incomingMedia) {
                predicates['mediaQuery:' + incomingMedia] = true;
            });
            conditionalCommentConditionStack.forEach(function (conditionalCommentCondition) {
                predicates['conditionalComment:' + conditionalCommentCondition] = true;
            });
            if (isWithinNoscript) {
                predicates.script = false;
            }
            if (isWithinNotIeConditionalComment) {
                predicates['conditionalComment:IE'] = false;
            }
            result.push({
                text: asset.text,
                predicates: predicates
            });
        }
    }(htmlAsset));

    return result;
};