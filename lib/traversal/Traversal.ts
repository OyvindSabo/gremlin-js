import Collection from '../collection/Collection';
import { GraphData } from '../tinkerGraph/TinkerGraph';

/**
 * The traversal, typically assigned to the variable g.
 * const g = new Traversal() or
 * const g = graph.Traversal()
 */
export default class Traversal {
  graphData: GraphData;
  traversal: Collection[];
  constructor(graphData: GraphData) {
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
  E(...edgeIds: string[]) {
    const collectionData = edgeIds.length
      ? this.graphData.edges.filter(edge => edgeIds.includes(edge._id))
      : this.graphData.edges;
    const collection = new Collection(this, collectionData);
    this.traversal.push(collection);
    return collection;
  }
  /**
   * Returns a collection of nodes and sets itself as the traversal
   * An arbitrary number of node ids can be supplied to say what nodes in the
   * collection the traversal should start with. If no parameters are supplied,
   * a collection of all the nodes in the graph will be returned.
   */
  V(...vertexIds: string[]) {
    const allVertices = this.graphData.vertices;
    const newCollectionData = vertexIds.length
      ? allVertices.filter(vertice => vertexIds.includes(vertice._id))
      : allVertices;
    const newCollection = new Collection(this, newCollectionData);
    this.traversal.push(newCollection);
    return newCollection;
  }
}
