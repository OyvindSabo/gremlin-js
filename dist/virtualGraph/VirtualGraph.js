"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Traversal_1 = require("../traversal/Traversal");
var VirtualGraph = /** @class */ (function () {
    function VirtualGraph(virtualVertices, virtualEdges) {
        this._vertices = virtualVertices;
        this._edges = virtualEdges;
    }
    VirtualGraph.prototype.traversal = function () {
        return new Traversal_1.default(this);
    };
    VirtualGraph.prototype.close = function () { };
    return VirtualGraph;
}());
exports.default = VirtualGraph;
