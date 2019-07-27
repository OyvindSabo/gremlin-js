"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Traversal_1 = require("../traversal/Traversal");
/**
 * The Graph class is mainly responsble for storing graphData, from which new
 * traversals can be initiated.
 */
var Graph = /** @class */ (function () {
    function Graph(graphData) {
        this.graphData = graphData;
    }
    Graph.prototype.traversal = function () {
        return new Traversal_1.default(this.graphData);
    };
    Graph.prototype.close = function () { };
    return Graph;
}());
exports.default = Graph;
