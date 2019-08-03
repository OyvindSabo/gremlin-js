"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var TinkerGraph_1 = require("../tinkerGraph/TinkerGraph");
var graphData = {
    mode: 'NORMAL',
    vertices: [
        {
            name: 'lop',
            lang: 'java',
            _id: '3',
            _type: 'vertex',
        },
        {
            name: 'vadas',
            age: 27,
            _id: '2',
            _type: 'vertex',
        },
        {
            name: 'marko',
            age: 29,
            _id: '1',
            _type: 'vertex',
        },
        {
            name: 'peter',
            age: 35,
            _id: '6',
            _type: 'vertex',
        },
        {
            name: 'ripple',
            lang: 'java',
            _id: '5',
            _type: 'vertex',
        },
        {
            name: 'josh',
            age: 32,
            _id: '4',
            _type: 'vertex',
        },
    ],
    edges: [
        {
            weight: 1,
            _id: '10',
            _type: 'edge',
            _outV: '4',
            _inV: '5',
            _label: 'created',
        },
        {
            weight: 0.5,
            _id: '7',
            _type: 'edge',
            _outV: '1',
            _inV: '2',
            _label: 'knows',
        },
        {
            weight: 0.4000000059604645,
            _id: '9',
            _type: 'edge',
            _outV: '1',
            _inV: '3',
            _label: 'created',
        },
        {
            weight: 1,
            _id: '8',
            _type: 'edge',
            _outV: '1',
            _inV: '4',
            _label: 'knows',
        },
        {
            weight: 0.4000000059604645,
            _id: '11',
            _type: 'edge',
            _outV: '4',
            _inV: '3',
            _label: 'created',
        },
        {
            weight: 0.20000000298023224,
            _id: '12',
            _type: 'edge',
            _outV: '6',
            _inV: '3',
            _label: 'created',
        },
    ],
};
var graph = TinkerGraph_1.default.open(graphData);
var g = graph.traversal();
ava_1.default('Get all vertices', function (t) {
    var actualResult = g.V().next();
    var expectedResult = [
        {
            name: 'marko',
            age: 29,
            _id: '1',
            _type: 'vertex',
        },
        {
            name: 'vadas',
            age: 27,
            _id: '2',
            _type: 'vertex',
        },
        {
            name: 'lop',
            lang: 'java',
            _id: '3',
            _type: 'vertex',
        },
        {
            name: 'josh',
            age: 32,
            _id: '4',
            _type: 'vertex',
        },
        {
            name: 'ripple',
            lang: 'java',
            _id: '5',
            _type: 'vertex',
        },
        {
            name: 'peter',
            age: 35,
            _id: '6',
            _type: 'vertex',
        },
    ];
    t.deepEqual(actualResult, expectedResult);
});
ava_1.default('Get all vertices with a specific id', function (t) {
    var actualResult = g.V('2').next();
    var expectedResult = [
        {
            name: 'vadas',
            age: 27,
            _id: '2',
            _type: 'vertex',
        },
    ];
    t.deepEqual(actualResult, expectedResult);
});
ava_1.default('Get all vertices with any of multiple specific ids', function (t) {
    var actualResult = g.V('2', '4').next();
    var expectedResult = [
        {
            name: 'vadas',
            age: 27,
            _id: '2',
            _type: 'vertex',
        },
        {
            name: 'josh',
            age: 32,
            _id: '4',
            _type: 'vertex',
        },
    ];
    t.deepEqual(actualResult, expectedResult);
});
ava_1.default('Get all edges', function (t) {
    var actualResult = g.E().next();
    var expectedResult = [
        {
            weight: 0.5,
            _id: '7',
            _type: 'edge',
            _outV: '1',
            _inV: '2',
            _label: 'knows',
        },
        {
            weight: 1,
            _id: '8',
            _type: 'edge',
            _outV: '1',
            _inV: '4',
            _label: 'knows',
        },
        {
            weight: 0.4000000059604645,
            _id: '9',
            _type: 'edge',
            _outV: '1',
            _inV: '3',
            _label: 'created',
        },
        {
            weight: 1,
            _id: '10',
            _type: 'edge',
            _outV: '4',
            _inV: '5',
            _label: 'created',
        },
        {
            weight: 0.4000000059604645,
            _id: '11',
            _type: 'edge',
            _outV: '4',
            _inV: '3',
            _label: 'created',
        },
        {
            weight: 0.20000000298023224,
            _id: '12',
            _type: 'edge',
            _outV: '6',
            _inV: '3',
            _label: 'created',
        },
    ];
    t.deepEqual(actualResult, expectedResult);
});
ava_1.default('Get all edges with a specific id', function (t) {
    var actualResult = g.E('8').next();
    var expectedResult = [
        {
            weight: 1,
            _id: '8',
            _type: 'edge',
            _outV: '1',
            _inV: '4',
            _label: 'knows',
        },
    ];
    t.deepEqual(actualResult, expectedResult);
});
ava_1.default('Get all edges with any of multiple specific ids', function (t) {
    var actualResult = g.E('8', '10').next();
    var expectedResult = [
        {
            weight: 1,
            _id: '8',
            _type: 'edge',
            _outV: '1',
            _inV: '4',
            _label: 'knows',
        },
        {
            weight: 1,
            _id: '10',
            _type: 'edge',
            _outV: '4',
            _inV: '5',
            _label: 'created',
        },
    ];
    t.deepEqual(actualResult, expectedResult);
});
