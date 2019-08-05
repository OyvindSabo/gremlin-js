"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TraversalItem = /** @class */ (function () {
    function TraversalItem(traversalItem, previous) {
        this._traversalItem = traversalItem;
        this._previous = previous;
        this._labels = [];
    }
    return TraversalItem;
}());
exports.default = TraversalItem;
