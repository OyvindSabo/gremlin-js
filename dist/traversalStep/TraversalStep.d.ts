import Traversal from '../traversal/Traversal';
import TraversalItem from '../traversalItem/TraversalItem';
export default class TraversalStep {
    _traversal: Traversal;
    _traversalItemCollection: TraversalItem[];
    constructor(traversal: Traversal, traversalItemCollection: TraversalItem[]);
    and(): void;
    as(label: string): this;
    both(...edgeLabels: string[]): TraversalStep;
    bothE(...edgeLabels: string[]): TraversalStep;
    bothV(): TraversalStep;
    branch(): void;
    /**
     * Basically a ternary operator
     * g.V().hasLabel('person').
     *       choose(
     *         values('age').is(lte(30)),
     *         __.in(),
     *         __.out()).
     *       values('name')
     */
    choose(): void;
    count(): void;
    filter(): void;
    has(): void;
    hasLabel(): void;
    in(...edgeLabels: string[]): TraversalStep;
    inE(...edgeLabels: string[]): TraversalStep;
    label(): void;
    limit(): void;
    map(): void;
    /**
     * Next i used to terminate a query, i.e. to output the part of the graph
     * corresponding to the current collection instance.
     */
    next(): (import("../tinkerGraph/TinkerGraph").VertexData | import("../tinkerGraph/TinkerGraph").EdgeData)[];
    not(): void;
    /**
     * Only used together with branch.
     * g.V().branch(values('name'))
     *      .option('marko', values('age'))
     *      .option(none, values('name'))
     */
    option(): void;
    otherV(): TraversalStep;
    /**
     * Returns a collection of all nodes reached by following outward edges.
     * An arbitrary amount of string arguments can be supplied to specify the
     * label of the edges to follow.
     */
    out(...edgeLabels: string[]): TraversalStep;
    outE(...edgeLabels: string[]): TraversalStep;
    path(): void;
    repeat(): void;
    select(...labels: string[]): TraversalStep;
    sideEffect(): void;
    store(): void;
    values(): void;
}
