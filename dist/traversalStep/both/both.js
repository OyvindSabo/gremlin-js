"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TraversalItem_1 = require("../../traversalItem/TraversalItem");
exports._both = function (traversalStep) {
    var _a;
    var edgeTypes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        edgeTypes[_i - 1] = arguments[_i];
    }
    var unflatNewTraversalItemCollection = traversalStep._traversalItemCollection
        .filter(function (traversalItem) { return traversalItem.traversalItem._type === 'vertex'; })
        .map(function (traversalItem) {
        var outVertices = traversalItem.traversalItem._outE
            .filter(function (virtualEdge) {
            return edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true;
        })
            .map(function (virtualEdge) { return virtualEdge._inV; })
            .map(function (virtualVertex) { return new TraversalItem_1.default(virtualVertex, traversalItem); });
        var inVertices = traversalItem.traversalItem._inE
            .filter(function (virtualEdge) {
            return edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true;
        })
            .map(function (virtualEdge) { return virtualEdge._outV; })
            .map(function (virtualVertex) { return new TraversalItem_1.default(virtualVertex, traversalItem); });
        return outVertices.concat(inVertices);
    });
    var newTraversalItemCollection = (_a = []).concat.apply(_a, unflatNewTraversalItemCollection);
    return newTraversalItemCollection;
};
