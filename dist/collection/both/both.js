"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collection_1 = require("../Collection");
exports._both = function (collection) {
    var edgeTypes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        edgeTypes[_i - 1] = arguments[_i];
    }
    var allEdges = collection.traversal.graphData.edges;
    var allVertices = collection.traversal.graphData.vertices;
    var filteredEdges = edgeTypes.length
        ? allEdges.filter(function (edge) { return edgeTypes.includes(edge._label); })
        : allEdges;
    var inEdges = filteredEdges.filter(function (edge) {
        return collection.collectionData.map(function (item) { return item._id; }).includes(edge._inV);
    });
    var outEdges = filteredEdges.filter(function (edge) {
        return collection.collectionData.map(function (item) { return item._id; }).includes(edge._outV);
    });
    var newCollectionData = allVertices.filter(function (vertice) {
        var inVerticeIds = outEdges.map(function (outEdge) { return outEdge._inV; });
        var outVerticeIds = inEdges.map(function (inEdge) { return inEdge._outV; });
        return inVerticeIds.concat(outVerticeIds).includes(vertice._id);
    });
    var newCollection = new Collection_1.default(collection.traversal, newCollectionData);
    return newCollection;
};
