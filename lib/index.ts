import Traversal from './traversal/Traversal';
import TinkerGraph from './tinkerGraph/TinkerGraph';

/**
 * In gremlin-js we store graphs using the GraphSON format documented here:
 * https://github.com/tinkerpop/blueprints/wiki/GraphSON-Reader-and-Writer-Library
 */
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

/*const graph = TinkerGraph.open();
const g = graph.traversal();*/
// Assuming I already have graphData stored in local memory
const graph = TinkerGraph.open(graphData);
console.log('graph: ', graph);
/*const g = new Traversal(graphData);
console.log(`g.V('1').next() ==>`, g.V('1').next());
console.log(`g.V().next() ==>`, g.V().next());
console.log(`g.E('10').next() ==>`, g.E('10').next());
console.log(`g.E().next() ==>`, g.E().next());*/

/*const marko = g.addV('person').property('name', 'marko').property('age',29).next();
const lop = g.addV("software").property('name','lop').property('lang', 'java').next();
g.addE("created").from(marko).to(lop).property('weight', 0.6).iterate();*/
