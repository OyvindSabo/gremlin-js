import Collection from '../collection/Collection';
/**
 * The traversal, typically assigned to the variable g.
 * const g = new Traversal() or
 * const g = graph.Traversal()
 */
export default class Traversal {
    traversal: Collection[];
    constructor(graphData: any);
    addE(): void;
    addV(): void;
    /**
     * Returns a collection of edges and sets itself as the traversal
     * An arbitrary number of node ids can be supplied to say what nodes in the
     * collection the traversal should start with. If no parameters are supplied,
     * a collection of all the nodes in the graph will be returned.
     */
    E(...edgeIds: any[]): Collection;
    /**
     * Returns a collection of nodes and sets itself as the traversal
     * An arbitrary number of node ids can be supplied to say what nodes in the
     * collection the traversal should start with. If no parameters are supplied,
     * a collection of all the nodes in the graph will be returned.
     */
    V(...vertexIds: any[]): Collection;
}
