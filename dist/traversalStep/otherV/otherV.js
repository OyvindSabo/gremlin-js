"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TraversalItem_1 = require("../../traversalItem/TraversalItem");
exports._otherV = function (traversalStep) {
    var newTraversalItemCollection = traversalStep._traversalItemCollection
        .filter(function (traversalItem) { return traversalItem.traversalItem._type === 'edge'; })
        .filter(function (traversalItem) { return traversalItem.previous; })
        .map(function (traversalItem) {
        var previousVertexId = traversalItem.previous.traversalItem._id;
        var inVertex = traversalItem.traversalItem._inV;
        var outVertex = traversalItem.traversalItem._outV;
        if (previousVertexId === inVertex._id) {
            return new TraversalItem_1.default(outVertex, traversalItem);
        }
        return new TraversalItem_1.default(inVertex, traversalItem);
    });
    return newTraversalItemCollection;
};
