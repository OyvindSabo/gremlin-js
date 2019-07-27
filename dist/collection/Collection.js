"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var both_1 = require("./both/both");
var bothE_1 = require("./bothE/bothE");
var in_1 = require("./in/in");
var inE_1 = require("./inE/inE");
var out_1 = require("./out/out");
var outE_1 = require("./outE/outE");
var Collection = /** @class */ (function () {
    function Collection(traversal, collectionData) {
        /**
         * this.traversal is a reference to the traversal which stores the path of
         * which this collection is a step
         */
        this.traversal = traversal;
        // this.collectionData is a subset of collection.traversal.graphData
        this.collectionData = collectionData;
    }
    Collection.prototype.and = function () { };
    Collection.prototype.as = function () { };
    Collection.prototype.both = function () {
        var edgeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeTypes[_i] = arguments[_i];
        }
        var newCollection = both_1._both.apply(void 0, [this].concat(edgeTypes));
        this.traversal.traversal.push(newCollection);
        return newCollection;
    };
    Collection.prototype.bothE = function () {
        var edgeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeTypes[_i] = arguments[_i];
        }
        var newCollection = bothE_1._bothE.apply(void 0, [this].concat(edgeTypes));
        this.traversal.traversal.push(newCollection);
        return newCollection;
    };
    Collection.prototype.branch = function () { };
    /**
     * Basically a ternary operator
     * g.V().hasLabel('person').
     *       choose(
     *         values('age').is(lte(30)),
     *         __.in(),
     *         __.out()).
     *       values('name')
     */
    Collection.prototype.choose = function () { };
    Collection.prototype.count = function () { };
    Collection.prototype.filter = function () { };
    Collection.prototype.has = function () { };
    Collection.prototype.hasLabel = function () { };
    Collection.prototype.in = function () {
        var edgeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeTypes[_i] = arguments[_i];
        }
        var newCollection = in_1._in.apply(void 0, [this].concat(edgeTypes));
        this.traversal.traversal.push(newCollection);
        return newCollection;
    };
    Collection.prototype.inE = function () {
        var edgeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeTypes[_i] = arguments[_i];
        }
        var newCollection = inE_1._inE.apply(void 0, [this].concat(edgeTypes));
        this.traversal.traversal.push(newCollection);
        return newCollection;
    };
    Collection.prototype.label = function () { };
    Collection.prototype.map = function () { };
    /**
     * Next i used to terminate a query, i.e. to output the part of the graph
     * corresponding to the current collection instance.
     */
    Collection.prototype.next = function () {
        return this.collectionData;
    };
    Collection.prototype.not = function () { };
    /**
     * Only used together with branch.
     * g.V().branch(values('name'))
     *      .option('marko', values('age'))
     *      .option(none, values('name'))
     */
    Collection.prototype.option = function () { };
    Collection.prototype.otherV = function () { };
    /**
     * Returns a collection of all nodes reached by following outward edges.
     * An arbitrary amount of string arguments can be supplied to specify the
     * label of the edges to follow.
     */
    Collection.prototype.out = function () {
        var edgeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeTypes[_i] = arguments[_i];
        }
        var newCollection = out_1._out.apply(void 0, [this].concat(edgeTypes));
        this.traversal.traversal.push(newCollection);
        return newCollection;
    };
    Collection.prototype.outE = function () {
        var edgeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            edgeTypes[_i] = arguments[_i];
        }
        var newCollection = outE_1._outE.apply(void 0, [this].concat(edgeTypes));
        this.traversal.traversal.push(newCollection);
        return newCollection;
    };
    Collection.prototype.path = function () { };
    Collection.prototype.repeat = function () { };
    Collection.prototype.sideEffect = function () { };
    Collection.prototype.store = function () { };
    Collection.prototype.values = function () { };
    return Collection;
}());
exports.default = Collection;
