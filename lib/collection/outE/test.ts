import test from 'ava';
import Traversal from '../../traversal/Traversal';
import { CollectionData } from '../types';

const graphData = {
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

const g = new Traversal(graphData);

test('Get all outgoing edges', t => {
  const actualResult = g
    .V('1')
    .outE()
    .next();
  const expectedResult = [
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
  ];
  t.deepEqual(actualResult, expectedResult);
});

test('Get all outgoing edges of a specific type', t => {
  const actualResult = g
    .V('1')
    .outE('created')
    .next();
  const expectedResult = [
    {
      weight: 0.4000000059604645,
      _id: '9',
      _type: 'edge',
      _outV: '1',
      _inV: '3',
      _label: 'created',
    },
  ];
  t.deepEqual(actualResult, expectedResult);
});

test('Get all outgoing edges of a nonexistent type', t => {
  const actualResult = g
    .V()
    .outE('uses')
    .next();
  const expectedResult: CollectionData = [];
  t.deepEqual(actualResult, expectedResult);
});

test('Get all edges of any of multiple specified edge types', t => {
  const actualResult = g
    .V('1')
    .outE('knows', 'created')
    .next();
  const expectedResult = [
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
  ];
  t.deepEqual(actualResult, expectedResult);
});