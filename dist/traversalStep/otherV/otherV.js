"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TraversalItem_1 = require("../../traversalItem/TraversalItem");
exports._otherV = function (traversalStep) {
    var newTraversalItemCollection = traversalStep._traversalItemCollection
        .filter(function (traversalItem) { return traversalItem._traversalItem._type === 'edge'; })
        .filter(function (traversalItem) { return traversalItem._previous; })
        .map(function (traversalItem) {
        var previousVertexId = traversalItem._previous._traversalItem._id;
        var inVertex = traversalItem._traversalItem._inV;
        var outVertex = traversalItem._traversalItem._outV;
        if (previousVertexId === inVertex._id) {
            return new TraversalItem_1.default(outVertex, traversalItem);
        }
        return new TraversalItem_1.default(inVertex, traversalItem);
    });
    return newTraversalItemCollection;
};
