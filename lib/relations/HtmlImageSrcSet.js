var util = require('util'),
    extendWithGettersAndSetters = require('../util/extendWithGettersAndSetters'),
    Relation = require('./Relation'),
    HtmlRelation = require('./HtmlRelation');

function HtmlImageSrcSet(config) {
    HtmlRelation.call(this, config);
}

util.inherits(HtmlImageSrcSet, HtmlRelation);

extendWithGettersAndSetters(HtmlImageSrcSet.prototype, {
    inline: function () {
        Relation.prototype.inline.call(this);
        if (this.node.hasAttribute('srcset')) {
            this.node.setAttribute('srcset', this.to.text);
        } else {
            this.node.setAttribute('data-srcset', this.to.text);
        }

        this.node.setAttribute('srcset', this.to.text);
        this.from.markDirty();
        return this;
    },

    attach: function (asset, position, adjacentRelation) {
        this.node = asset.parseTree.createElement('img');
        this.attachNodeBeforeOrAfter(position, adjacentRelation);
        return HtmlRelation.prototype.attach.call(this, asset, position, adjacentRelation);
    }
});

module.exports = HtmlImageSrcSet;
