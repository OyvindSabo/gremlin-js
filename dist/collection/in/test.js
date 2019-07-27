"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var Traversal_1 = require("../../traversal/Traversal");
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
var g = new Traversal_1.default(graphData);
ava_1.default('Get all vertices reached through incoming edges', function (t) {
    var actualResult = g
        .V('3')
        .in()
        .next();
    var expectedResult = [
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
            name: 'josh',
            age: 32,
            _id: '4',
            _type: 'vertex',
        },
    ];
    t.deepEqual(actualResult, expectedResult);
});
ava_1.default('Get all vertices reached through incoming edges of a specific type', function (t) {
    var actualResult = g
        .V()
        .in('knows')
        .next();
    var expectedResult = [
        {
            name: 'marko',
            age: 29,
            _id: '1',
            _type: 'vertex',
        },
    ];
    t.deepEqual(actualResult, expectedResult);
});
ava_1.default('Get all vertices reached through outgoing edges of a nonexistent type', function (t) {
    var actualResult = g
        .V()
        .in('uses')
        .next();
    var expectedResult = [];
    t.deepEqual(actualResult, expectedResult);
});
ava_1.default('Get all vertices reached through incoming edges of any of multiple specified edge types', function (t) {
    var actualResult = g
        .V('4', '5')
        .in('knows', 'created')
        .next();
    var expectedResult = [
        {
            name: 'marko',
            age: 29,
            _id: '1',
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
