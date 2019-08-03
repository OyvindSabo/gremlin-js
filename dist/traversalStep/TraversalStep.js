"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TraversalItem_1 = require("../traversalItem/TraversalItem");
var TraversalStep = /** @class */ (function () {
    function TraversalStep(traversal, traversalItemCollection) {
        /**
         * this.traversal is a reference to the traversal which stores the path of
         * which this collection is a step
         */
        this.traversal = traversal;
        this.traversalItemCollection = traversalItemCollection;
    }
    TraversalStep.prototype.and = function () { };
    TraversalStep.prototype.as = function () { };
    TraversalStep.prototype.both = function () {
        var _a;
        var edgeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeTypes[_i] = arguments[_i];
        }
        var unflatNewTraversalItemCollection = this.traversalItemCollection
            .filter(function (traversalItem) { return traversalItem.traversalItem._type === 'vertex'; })
            .map(function (traversalItem) {
            var outVertices = traversalItem.traversalItem._outE
                .filter(function (virtualEdge) {
                return edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true;
            })
                .map(function (virtualEdge) { return virtualEdge._inV; })
                .map(function (virtualVertex) { return new TraversalItem_1.default(virtualVertex, traversalItem); });
            var inVertices = traversalItem.traversalItem._inE
                .filter(function (virtualEdge) {
                return edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true;
            })
                .map(function (virtualEdge) { return virtualEdge._outV; })
                .map(function (virtualVertex) { return new TraversalItem_1.default(virtualVertex, traversalItem); });
            return outVertices.concat(inVertices);
        });
        var newTraversalItemCollection = (_a = []).concat.apply(_a, unflatNewTraversalItemCollection);
        this.traversal.currentTraversalItemCollection = newTraversalItemCollection;
        return new TraversalStep(this.traversal, newTraversalItemCollection);
    };
    TraversalStep.prototype.bothE = function () {
        var _a;
        var edgeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeTypes[_i] = arguments[_i];
        }
        var unflatNewTraversalItemCollection = this.traversalItemCollection
            .filter(function (traversalItem) { return traversalItem.traversalItem._type === 'vertex'; })
            .map(function (traversalItem) {
            var outVertices = traversalItem.traversalItem._outE
                .filter(function (virtualEdge) {
                return edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true;
            })
                .map(function (virtualEdge) { return new TraversalItem_1.default(virtualEdge, traversalItem); });
            var inVertices = traversalItem.traversalItem._inE
                .filter(function (virtualEdge) {
                return edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true;
            })
                .map(function (virtualEdge) { return new TraversalItem_1.default(virtualEdge, traversalItem); });
            return outVertices.concat(inVertices);
        });
        var newTraversalItemCollection = (_a = []).concat.apply(_a, unflatNewTraversalItemCollection);
        this.traversal.currentTraversalItemCollection = newTraversalItemCollection;
        return new TraversalStep(this.traversal, newTraversalItemCollection);
    };
    TraversalStep.prototype.branch = function () { };
    /**
     * Basically a ternary operator
     * g.V().hasLabel('person').
     *       choose(
     *         values('age').is(lte(30)),
     *         __.in(),
     *         __.out()).
     *       values('name')
     */
    TraversalStep.prototype.choose = function () { };
    TraversalStep.prototype.count = function () { };
    TraversalStep.prototype.filter = function () { };
    TraversalStep.prototype.has = function () { };
    TraversalStep.prototype.hasLabel = function () { };
    TraversalStep.prototype.in = function () {
        var _a;
        var edgeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeTypes[_i] = arguments[_i];
        }
        var unflatNewTraversalItemCollection = this.traversalItemCollection
            .filter(function (traversalItem) { return traversalItem.traversalItem._type === 'vertex'; })
            .map(function (traversalItem) {
            return traversalItem.traversalItem._inE
                .filter(function (virtualEdge) {
                return edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true;
            })
                .map(function (virtualEdge) { return virtualEdge._outV; })
                .map(function (virtualVertex) { return new TraversalItem_1.default(virtualVertex, traversalItem); });
        });
        var newTraversalItemCollection = (_a = []).concat.apply(_a, unflatNewTraversalItemCollection);
        this.traversal.currentTraversalItemCollection = newTraversalItemCollection;
        return new TraversalStep(this.traversal, newTraversalItemCollection);
    };
    TraversalStep.prototype.inE = function () {
        var _a;
        var edgeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeTypes[_i] = arguments[_i];
        }
        var unflatNewTraversalItemCollection = this.traversalItemCollection
            .filter(function (traversalItem) { return traversalItem.traversalItem._type === 'vertex'; })
            .map(function (traversalItem) {
            return traversalItem.traversalItem._inE
                .filter(function (virtualEdge) {
                return edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true;
            })
                .map(function (virtualEdge) { return new TraversalItem_1.default(virtualEdge, traversalItem); });
        });
        var newTraversalItemCollection = (_a = []).concat.apply(_a, unflatNewTraversalItemCollection);
        this.traversal.currentTraversalItemCollection = newTraversalItemCollection;
        return new TraversalStep(this.traversal, newTraversalItemCollection);
    };
    TraversalStep.prototype.label = function () { };
    TraversalStep.prototype.map = function () { };
    /**
     * Next i used to terminate a query, i.e. to output the part of the graph
     * corresponding to the current collection instance.
     */
    TraversalStep.prototype.next = function () {
        return this.traversalItemCollection.map(function (traversalItem) { return traversalItem.traversalItem._origin; });
    };
    TraversalStep.prototype.not = function () { };
    /**
     * Only used together with branch.
     * g.V().branch(values('name'))
     *      .option('marko', values('age'))
     *      .option(none, values('name'))
     */
    TraversalStep.prototype.option = function () { };
    TraversalStep.prototype.otherV = function () { };
    /**
     * Returns a collection of all nodes reached by following outward edges.
     * An arbitrary amount of string arguments can be supplied to specify the
     * label of the edges to follow.
     */
    TraversalStep.prototype.out = function () {
        var _a;
        var edgeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeTypes[_i] = arguments[_i];
        }
        var unflatNewTraversalItemCollection = this.traversalItemCollection
            .filter(function (traversalItem) { return traversalItem.traversalItem._type === 'vertex'; })
            .map(function (traversalItem) {
            return traversalItem.traversalItem._outE
                .filter(function (virtualEdge) {
                return edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true;
            })
                .map(function (virtualEdge) { return virtualEdge._inV; })
                .map(function (virtualVertex) { return new TraversalItem_1.default(virtualVertex, traversalItem); });
        });
        var newTraversalItemCollection = (_a = []).concat.apply(_a, unflatNewTraversalItemCollection);
        this.traversal.currentTraversalItemCollection = newTraversalItemCollection;
        return new TraversalStep(this.traversal, newTraversalItemCollection);
    };
    TraversalStep.prototype.outE = function () {
        var _a;
        var edgeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeTypes[_i] = arguments[_i];
        }
        var unflatNewTraversalItemCollection = this.traversalItemCollection
            .filter(function (traversalItem) { return traversalItem.traversalItem._type === 'vertex'; })
            .map(function (traversalItem) {
            return traversalItem.traversalItem._outE
                .filter(function (virtualEdge) {
                return edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true;
            })
                .map(function (virtualEdge) { return new TraversalItem_1.default(virtualEdge, traversalItem); });
        });
        var newTraversalItemCollection = (_a = []).concat.apply(_a, unflatNewTraversalItemCollection);
        this.traversal.currentTraversalItemCollection = newTraversalItemCollection;
        return new TraversalStep(this.traversal, newTraversalItemCollection);
    };
    TraversalStep.prototype.path = function () { };
    TraversalStep.prototype.repeat = function () { };
    TraversalStep.prototype.sideEffect = function () { };
    TraversalStep.prototype.store = function () { };
    TraversalStep.prototype.values = function () { };
    return TraversalStep;
}());
exports.default = TraversalStep;
