"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Graph_1 = require("../graph/Graph");
var defaultGraph = {
    mode: 'NORMAL',
    vertices: [],
    edges: [],
};
/**
 * The static TinkerGraph class is mainly responsble for reading in a json file
 * written in the GraphSON format.
 */
var TinkerGraph = {
    open: function () {
        // The dedault graph should only be opened if there is no valid graph in the file path
        return new Graph_1.default(defaultGraph);
    },
};
exports.default = TinkerGraph;
