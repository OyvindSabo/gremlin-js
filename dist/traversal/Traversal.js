"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TraversalItem_1 = require("../traversalItem/TraversalItem");
var TraversalStep_1 = require("../traversalStep/TraversalStep");
/**
 * The traversal, typically assigned to the variable g.
 * const g = new Traversal() or
 * const g = graph.Traversal()
 */
var Traversal = /** @class */ (function () {
    function Traversal(virtualGraph) {
        this.virtualGraph = virtualGraph;
        this.currentTraversalItemCollection = [];
    }
    Traversal.prototype.addE = function () { };
    Traversal.prototype.addV = function () { };
    /**
     * Returns a collection of edges and sets itself as the traversal
     * An arbitrary number of node ids can be supplied to say what nodes in the
     * collection the traversal should start with. If no parameters are supplied,
     * a collection of all the nodes in the graph will be returned.
     */
    Traversal.prototype.E = function () {
        var edgeIds = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeIds[_i] = arguments[_i];
        }
        var virtualEdges = Object.values(this.virtualGraph.edges);
        var newCollectionData = edgeIds.length
            ? virtualEdges.filter(function (edge) { return edgeIds.includes(edge._id); })
            : virtualEdges;
        var newTraversalItemCollection = newCollectionData.map(function (virtualEdge) { return new TraversalItem_1.default(virtualEdge); });
        this.currentTraversalItemCollection = newTraversalItemCollection;
        return new TraversalStep_1.default(this, newTraversalItemCollection);
    };
    /**
     * Returns a collection of nodes and sets itself as the traversal
     * An arbitrary number of node ids can be supplied to say what nodes in the
     * collection the traversal should start with. If no parameters are supplied,
     * a collection of all the nodes in the graph will be returned.
     */
    Traversal.prototype.V = function () {
        var vertexIds = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vertexIds[_i] = arguments[_i];
        }
        var virtualVertices = Object.values(this.virtualGraph.vertices);
        var newCollectionData = vertexIds.length
            ? virtualVertices.filter(function (edge) { return vertexIds.includes(edge._id); })
            : virtualVertices;
        var newTraversalItemCollection = newCollectionData.map(function (virtualEdge) { return new TraversalItem_1.default(virtualEdge); });
        this.currentTraversalItemCollection = newTraversalItemCollection;
        return new TraversalStep_1.default(this, newTraversalItemCollection);
    };
    return Traversal;
}());
exports.default = Traversal;
