"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TraversalItem_1 = require("../../traversalItem/TraversalItem");
exports._bothV = function (traversalStep) {
    var _a;
    var unflatNewTraversalItemCollection = traversalStep._traversalItemCollection
        .filter(function (traversalItem) { return traversalItem._traversalItem._type === 'edge'; })
        .map(function (traversalItem) {
        var outVertex = traversalItem._traversalItem._outV;
        var outVertexTraversalItem = new TraversalItem_1.default(outVertex, traversalItem);
        var inVertex = traversalItem._traversalItem._inV;
        var inVertexTraversalItem = new TraversalItem_1.default(inVertex, traversalItem);
        return [outVertexTraversalItem, inVertexTraversalItem];
    });
    var newTraversalItemCollection = (_a = []).concat.apply(_a, unflatNewTraversalItemCollection);
    return newTraversalItemCollection;
};
