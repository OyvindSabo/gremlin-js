/**
 * In gremlin-js we store graphs using the GraphSON format documented here:
 * https://github.com/tinkerpop/blueprints/wiki/GraphSON-Reader-and-Writer-Library
 */
const graph = {
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

/**
 * The Graph class is mainly responsble for reading a json file written in
 * the GraphSON format.
 */
class Graph {
  constructor() {}
  open() {}
  traversal() {}
  close() {}
}

/**
 * The traversal, typically assigned to the variable g.
 * const g = new Traversal() or
 * const g = graph.Traversal()
 */
class Traversal {
  constructor(graphData) {
    this.graphData = graphData;
    this.traversal = [];
  }
  addE() {}
  addV() {}

  /**
   * Returns a collection of edges and sets itself as the traversal
   * An arbitrary number of node ids can be supplied to say what nodes in the
   * collection the traversal should start with. If no parameters are supplied,
   * a collection of all the nodes in the graph will be returned.
   */
  E(...edgeIds) {}
  /**
   * Returns a collection of nodes and sets itself as the traversal
   * An arbitrary number of node ids can be supplied to say what nodes in the
   * collection the traversal should start with. If no parameters are supplied,
   * a collection of all the nodes in the graph will be returned.
   */
  V(...vertexIds) {
    const collectionData = vertexIds.length
      ? this.graphData.vertices.filter(vertice =>
          vertexIds.includes(vertice._id)
        )
      : this.graphData.vertices;
    const collection = new Collection(this, collectionData);
    this.traversal.push(collection);
    return collection;
  }
}

class Collection {
  constructor(traversal, collectionData) {
    /**
     * this.traversal is a reference to the traversal which stores the path of
     * which this collection is a step
     */
    this.traversal;
    // this.collection is a subset of this.graph
    this.collectionData = collectionData;
  }
  and() {}
  as() {}
  both() {}
  bothE() {}
  branch() {}
  /**
   * Basically a ternary operator
   * g.V().hasLabel('person').
   *       choose(
   *         values('age').is(lte(30)),
   *         __.in(),
   *         __.out()).
   *       values('name')
   */
  choose() {}
  count() {}
  filter() {}
  has() {}
  hasLabel() {}
  in() {}
  inE() {}
  label() {}
  map() {}
  /**
   * Next i used to terminate a query, i.e. to output the part of the graph
   * corresponding to the current collection instance.
   */
  next() {
    return this.collectionData;
  }
  not() {}
  /**
   * Only used together with branch.
   * g.V().branch(values('name'))
   *      .option('marko', values('age'))
   *      .option(none, values('name'))
   */
  option() {}
  /**
   * Returns a collection of all nodes reached by following outward edges.
   * An arbitrary amount of string arguments can be supplied to specify the
   * label of the edges to follow.
   */
  out(...args) {}
  outE() {}
  path() {}
  repeat() {}
  sideEffect() {}
  store() {}
  values() {}
}

/*const graph = TinkerGraph.open();
const g = graph.traversal();*/
const g = new Traversal(graph);
console.log(`g.V('1').next() ==>`, g.V('1').next());
console.log(`g.V().next() ==>`, g.V().next());
/*const marko = g.addV('person').property('name', 'marko').property('age',29).next();
const lop = g.addV("software").property('name','lop').property('lang', 'java').next();
g.addE("created").from(marko).to(lop).property('weight', 0.6).iterate();*/
