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
    var newTraversalItemCollection = (_a = []).concat.apply(_a, __spread(unflatNewTraversalItemCollection));
    return newTraversalItemCollection;
};
