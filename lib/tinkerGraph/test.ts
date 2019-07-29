import test from 'ava';
import TinkerGraph from './TinkerGraph';

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

const virtualGraph = TinkerGraph.open(graphData);

test('Test that the virtual graph contains all the vertex ids from the graph data', t => {
  graphData.vertices.forEach(({ _id }) => {
    if (!virtualGraph.vertices[_id]) {
      t.fail();
    }
  });
  t.pass();
});

test('Test that the virtual graph contains all the edge ids from the graph data', t => {
  graphData.edges.forEach(({ _id }) => {
    if (!virtualGraph.edges[_id]) {
      t.fail();
    }
  });
  t.pass();
});

test('Test that for all virtual edges _outV references a virtual vertex which references it back', t => {
  Object.values(virtualGraph.edges).forEach(virtualEdge => {
    const virtualVertex = virtualEdge._outV;
    if (!virtualVertex._outE.includes(virtualEdge)) {
      t.fail();
    }
  });
  t.pass();
});

test('Test that for all virtual edges _inV references a virtual vertex which references it back', t => {
  Object.values(virtualGraph.edges).forEach(virtualEdge => {
    const virtualVertex = virtualEdge._inV;
    if (!virtualVertex._inE.includes(virtualEdge)) {
      t.fail();
    }
  });
  t.pass();
});

test('Test that all _outE on a virtual vertex reference a virtual edge whch references it back', t => {
  Object.values(virtualGraph.vertices).forEach(virtualVertex => {
    virtualVertex._outE.forEach(virtualEdge => {
      if (virtualEdge._outV !== virtualVertex) {
        t.fail();
      }
    });
  });
  t.pass();
});

test('Test that all _inE on a virtual vertex reference a virtual edge whch references it back', t => {
  Object.values(virtualGraph.vertices).forEach(virtualVertex => {
    virtualVertex._inE.forEach(virtualEdge => {
      if (virtualEdge._inV !== virtualVertex) {
        t.fail();
      }
    });
  });
  t.pass();
});
