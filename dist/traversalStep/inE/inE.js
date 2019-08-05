"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TraversalItem_1 = require("../../traversalItem/TraversalItem");
exports._inE = function (traversalStep) {
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
            .map(function (virtualEdge) { return new TraversalItem_1.default(virtualEdge, traversalItem); });
    });
    var newTraversalItemCollection = (_a = []).concat.apply(_a, __spread(unflatNewTraversalItemCollection));
    return newTraversalItemCollection;
};
