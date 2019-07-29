import VirtualGraph from '../virtualGraph/VirtualGraph';
import TraversalItem from '../traversalItem/TraversalItem';
import TraversalStep from '../traversalStep/TraversalStep';

/**
 * The traversal, typically assigned to the variable g.
 * const g = new Traversal() or
 * const g = graph.Traversal()
 */
export default class Traversal {
  virtualGraph: VirtualGraph;
  currentTraversalItemCollection: TraversalItem[];
  constructor(virtualGraph: VirtualGraph) {
    this.virtualGraph = virtualGraph;
    this.currentTraversalItemCollection = [];
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
    const virtualEdges = Object.values(this.virtualGraph.edges);
    const newCollectionData = edgeIds.length
      ? virtualEdges.filter(edge => edgeIds.includes(edge._id))
      : virtualEdges;
    const newTraversalItemCollection = newCollectionData.map(
      virtualEdge => new TraversalItem(virtualEdge)
    );
    this.currentTraversalItemCollection = newTraversalItemCollection;
    return new TraversalStep(this, newTraversalItemCollection);
  }
  /**
   * Returns a collection of nodes and sets itself as the traversal
   * An arbitrary number of node ids can be supplied to say what nodes in the
   * collection the traversal should start with. If no parameters are supplied,
   * a collection of all the nodes in the graph will be returned.
   */
  V(...vertexIds: string[]) {
    const virtualVertices = Object.values(this.virtualGraph.vertices);
    const newCollectionData = vertexIds.length
      ? virtualVertices.filter(edge => vertexIds.includes(edge._id))
      : virtualVertices;
    const newTraversalItemCollection = newCollectionData.map(
      virtualEdge => new TraversalItem(virtualEdge)
    );
    this.currentTraversalItemCollection = newTraversalItemCollection;
    return new TraversalStep(this, newTraversalItemCollection);
  }
}
