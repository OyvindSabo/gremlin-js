"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collection_1 = require("./Collection");
exports._outE = function (collection) {
    var edgeTypes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        edgeTypes[_i - 1] = arguments[_i];
    }
    var allEdges = collection.traversal.graphData.edges;
    var edges = (edgeTypes.length
        ? allEdges.filter(function (edge) { return edgeTypes.includes(edge._label); })
        : allEdges).filter(function (edge) {
        return collection.collectionData.map(function (item) { return item._id; }).includes(edge._outV);
    });
    var newCollectionData = edges;
    var newCollection = new Collection_1.default(collection.traversal, newCollectionData);
    collection.traversal.traversal.push(newCollection);
    return newCollection;
};
