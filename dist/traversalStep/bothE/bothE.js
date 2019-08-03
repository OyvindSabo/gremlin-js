"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TraversalItem_1 = require("../../traversalItem/TraversalItem");
exports._bothE = function (traversalStep) {
    var _a;
    var edgeLabels = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        edgeLabels[_i - 1] = arguments[_i];
    }
    var unflatNewTraversalItemCollection = traversalStep._traversalItemCollection
        .filter(function (traversalItem) { return traversalItem.traversalItem._type === 'vertex'; })
        .map(function (traversalItem) {
        var outVertices = traversalItem.traversalItem._outE
            .filter(function (virtualEdge) {
            return edgeLabels.length ? edgeLabels.includes(virtualEdge._label) : true;
        })
            .map(function (virtualEdge) { return new TraversalItem_1.default(virtualEdge, traversalItem); });
        var inVertices = traversalItem.traversalItem._inE
            .filter(function (virtualEdge) {
            return edgeLabels.length ? edgeLabels.includes(virtualEdge._label) : true;
        })
            .map(function (virtualEdge) { return new TraversalItem_1.default(virtualEdge, traversalItem); });
        return outVertices.concat(inVertices);
    });
    var newTraversalItemCollection = (_a = []).concat.apply(_a, unflatNewTraversalItemCollection);
    return newTraversalItemCollection;
};
