import Traversal from '../traversal/Traversal';
import { CollectionData } from './types';
import { VertexData, EdgeData } from '../tinkerGraph/TinkerGraph';
export default class Collection {
    traversal: Traversal;
    collectionData: (VertexData | EdgeData)[];
    constructor(traversal: Traversal, collectionData: CollectionData);
    and(): void;
    as(): void;
    both(...edgeTypes: string[]): Collection;
    bothE(...edgeTypes: string[]): Collection;
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
    in(...edgeTypes: string[]): Collection;
    inE(...edgeTypes: string[]): Collection;
    label(): void;
    map(): void;
    /**
     * Next i used to terminate a query, i.e. to output the part of the graph
     * corresponding to the current collection instance.
     */
    next(): (VertexData | EdgeData)[];
    not(): void;
    /**
     * Only used together with branch.
     * g.V().branch(values('name'))
     *      .option('marko', values('age'))
     *      .option(none, values('name'))
     */
    option(): void;
    otherV(): void;
    /**
     * Returns a collection of all nodes reached by following outward edges.
     * An arbitrary amount of string arguments can be supplied to specify the
     * label of the edges to follow.
     */
    out(...edgeTypes: string[]): Collection;
    outE(...edgeTypes: string[]): Collection;
    path(): void;
    repeat(): void;
    sideEffect(): void;
    store(): void;
    values(): void;
}
