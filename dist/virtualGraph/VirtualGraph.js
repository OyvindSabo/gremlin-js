"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Traversal_1 = require("../traversal/Traversal");
var VirtualGraph = /** @class */ (function () {
    function VirtualGraph(vertices, edges) {
        this.vertices = vertices;
        this.edges = edges;
    }
    VirtualGraph.prototype.traversal = function () {
        return new Traversal_1.default(this);
    };
    return VirtualGraph;
}());
exports.default = VirtualGraph;
