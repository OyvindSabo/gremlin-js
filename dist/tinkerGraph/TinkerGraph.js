"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var defaultGraph = {
    mode: 'NORMAL',
    vertices: [],
    edges: [],
};
/**
 * The static TinkerGraph class is mainly responsble for reading in a json file
 * written in the GraphSON format. Currently, it only accept preloaded objects,
 * not json.
 */
var TinkerGraph = {
    open: function (graphData) {
        var virtualGraph = {
            vertices: {},
            edges: {},
        };
        var vertices = graphData.vertices, edges = graphData.edges;
        vertices.forEach(function (vertexData) {
            var virtualVertex = Object.assign({}, __assign({}, vertexData, { _outE: [], _inE: [] }));
            virtualGraph.vertices[virtualVertex._id] = virtualVertex;
        });
        edges.forEach(function (edgeData) {
            var virtualEdge = Object.assign({}, __assign({}, edgeData, { _outV: virtualGraph.vertices[edgeData._outV], _inV: virtualGraph.vertices[edgeData._inV] }));
            virtualEdge._outV._outE.push(virtualEdge);
            virtualEdge._inV._inE.push(virtualEdge);
            virtualGraph.edges[virtualEdge._id] = virtualEdge;
        });
        return virtualGraph;
    },
};
exports.default = TinkerGraph;
