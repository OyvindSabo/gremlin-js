"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TraversalItem_1 = require("../../traversalItem/TraversalItem");
exports._in = function (traversalStep) {
    var _a;
    var edgeLabels = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        edgeLabels[_i - 1] = arguments[_i];
    }
    var unflatNewTraversalItemCollection = traversalStep._traversalItemCollection
        .filter(function (traversalItem) { return traversalItem._traversalItem._type === 'vertex'; })
        .map(function (traversalItem) {
        return traversalItem._traversalItem._inE
            .filter(function (virtualEdge) {
            return edgeLabels.length ? edgeLabels.includes(virtualEdge._label) : true;
        })
            .map(function (virtualEdge) { return virtualEdge._outV; })
            .map(function (virtualVertex) { return new TraversalItem_1.default(virtualVertex, traversalItem); });
    });
    var newTraversalItemCollection = (_a = []).concat.apply(_a, unflatNewTraversalItemCollection);
    return newTraversalItemCollection;
};
