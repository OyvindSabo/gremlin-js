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
    constructor(virtualGraph: VirtualGraph);
    addE(): void;
    addV(): void;
    /**
     * Returns a collection of edges and sets itself as the traversal
     * An arbitrary number of node ids can be supplied to say what nodes in the
     * collection the traversal should start with. If no parameters are supplied,
     * a collection of all the nodes in the graph will be returned.
     */
    E(...edgeIds: string[]): TraversalStep;
    /**
     * Returns a collection of nodes and sets itself as the traversal
     * An arbitrary number of node ids can be supplied to say what nodes in the
     * collection the traversal should start with. If no parameters are supplied,
     * a collection of all the nodes in the graph will be returned.
     */
    V(...vertexIds: string[]): TraversalStep;
}
