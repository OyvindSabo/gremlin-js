"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collection_1 = require("../collection/Collection");
/**
 * The traversal, typically assigned to the variable g.
 * const g = new Traversal() or
 * const g = graph.Traversal()
 */
var Traversal = /** @class */ (function () {
    function Traversal(graphData) {
        this.graphData = graphData;
        this.traversal = [];
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
        var collectionData = edgeIds.length
            ? this.graphData.edges.filter(function (edge) { return edgeIds.includes(edge._id); })
            : this.graphData.edges;
        var collection = new Collection_1.default(this, collectionData);
        this.traversal.push(collection);
        return collection;
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
        var allVertices = this.graphData.vertices;
        var newCollectionData = vertexIds.length
            ? allVertices.filter(function (vertice) { return vertexIds.includes(vertice._id); })
            : allVertices;
        var newCollection = new Collection_1.default(this, newCollectionData);
        this.traversal.push(newCollection);
        return newCollection;
    };
    return Traversal;
}());
exports.default = Traversal;
