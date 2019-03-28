var util = require('util'),
    extendWithGettersAndSetters = require('../util/extendWithGettersAndSetters'),
    HtmlRelation = require('./HtmlRelation');

function HtmlImage(config) {
    HtmlRelation.call(this, config);
}

util.inherits(HtmlImage, HtmlRelation);

extendWithGettersAndSetters(HtmlImage.prototype, {
    get href() {
        return this.node.hasAttribute("src") ?
          this.node.getAttribute('src') : this.node.getAttribute('data-src');
    },

    set href(href) {
        if (this.node.hasAttribute("src")) {
            this.node.setAttribute('src', href);
        } else {
            this.node.setAttribute('data-src', href);
        }
    },

    attach: function (asset, position, adjacentRelation) {
        this.node = asset.parseTree.createElement('img');
        this.attachNodeBeforeOrAfter(position, adjacentRelation);
        return HtmlRelation.prototype.attach.call(this, asset, position, adjacentRelation);
    }
});

module.exports = HtmlImage;
