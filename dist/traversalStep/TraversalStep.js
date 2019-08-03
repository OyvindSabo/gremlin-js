"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var both_1 = require("./both/both");
var bothE_1 = require("./bothE/bothE");
var bothV_1 = require("./bothV/bothV");
var outE_1 = require("./outE/outE");
var out_1 = require("./out/out");
var inE_1 = require("./inE/inE");
var in_1 = require("./in/in");
var TraversalStep = /** @class */ (function () {
    function TraversalStep(traversal, traversalItemCollection) {
        /**
         * this.traversal is a reference to the traversal which stores the path of
         * which this collection is a step
         */
        this._traversal = traversal;
        this._traversalItemCollection = traversalItemCollection;
    }
    TraversalStep.prototype.and = function () { };
    TraversalStep.prototype.as = function () { };
    TraversalStep.prototype.both = function () {
        var edgeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeTypes[_i] = arguments[_i];
        }
        var newTraversalItemCollection = both_1._both.apply(void 0, [this].concat(edgeTypes));
        this._traversal.currentTraversalItemCollection = newTraversalItemCollection;
        return new TraversalStep(this._traversal, newTraversalItemCollection);
    };
    TraversalStep.prototype.bothE = function () {
        var edgeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeTypes[_i] = arguments[_i];
        }
        var newTraversalItemCollection = bothE_1._bothE.apply(void 0, [this].concat(edgeTypes));
        this._traversal.currentTraversalItemCollection = newTraversalItemCollection;
        return new TraversalStep(this._traversal, newTraversalItemCollection);
    };
    TraversalStep.prototype.bothV = function () {
        var newTraversalItemCollection = bothV_1._bothV(this);
        this._traversal.currentTraversalItemCollection = newTraversalItemCollection;
        return new TraversalStep(this._traversal, newTraversalItemCollection);
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
        var edgeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeTypes[_i] = arguments[_i];
        }
        var newTraversalItemCollection = in_1._in.apply(void 0, [this].concat(edgeTypes));
        this._traversal.currentTraversalItemCollection = newTraversalItemCollection;
        return new TraversalStep(this._traversal, newTraversalItemCollection);
    };
    TraversalStep.prototype.inE = function () {
        var edgeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeTypes[_i] = arguments[_i];
        }
        var newTraversalItemCollection = inE_1._inE.apply(void 0, [this].concat(edgeTypes));
        this._traversal.currentTraversalItemCollection = newTraversalItemCollection;
        return new TraversalStep(this._traversal, newTraversalItemCollection);
    };
    TraversalStep.prototype.label = function () { };
    TraversalStep.prototype.map = function () { };
    /**
     * Next i used to terminate a query, i.e. to output the part of the graph
     * corresponding to the current collection instance.
     */
    TraversalStep.prototype.next = function () {
        return this._traversalItemCollection.map(function (traversalItem) { return traversalItem.traversalItem._origin; });
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
        var edgeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeTypes[_i] = arguments[_i];
        }
        var newTraversalItemCollection = out_1._out.apply(void 0, [this].concat(edgeTypes));
        this._traversal.currentTraversalItemCollection = newTraversalItemCollection;
        return new TraversalStep(this._traversal, newTraversalItemCollection);
    };
    TraversalStep.prototype.outE = function () {
        var edgeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeTypes[_i] = arguments[_i];
        }
        var newTraversalItemCollection = outE_1._outE.apply(void 0, [this].concat(edgeTypes));
        this._traversal.currentTraversalItemCollection = newTraversalItemCollection;
        return new TraversalStep(this._traversal, newTraversalItemCollection);
    };
    TraversalStep.prototype.path = function () { };
    TraversalStep.prototype.repeat = function () { };
    TraversalStep.prototype.sideEffect = function () { };
    TraversalStep.prototype.store = function () { };
    TraversalStep.prototype.values = function () { };
    return TraversalStep;
}());
exports.default = TraversalStep;
