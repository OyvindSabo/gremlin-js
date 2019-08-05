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
exports._select = function (traversalStep) {
    var labels = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        labels[_i - 1] = arguments[_i];
    }
    if (labels.length === 1) {
        var label_1 = labels[0];
        var possiblyDuplicateNewTraversalItemCollection = traversalStep._traversalItemCollection
            .map(function (traversalItem) {
            var currentTraversalItem = traversalItem;
            var foundLabel = false;
            while (currentTraversalItem._previous && !foundLabel) {
                if (currentTraversalItem._labels.includes(label_1)) {
                    return currentTraversalItem;
                }
                currentTraversalItem = traversalItem._previous;
            }
        })
            .filter(Boolean);
        var newTraversalItemCollection = __spread(new Set(possiblyDuplicateNewTraversalItemCollection));
        return newTraversalItemCollection;
    }
    return [];
};
