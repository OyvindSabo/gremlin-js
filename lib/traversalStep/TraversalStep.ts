import Traversal from '../traversal/Traversal';
import { VirtualVertex } from '../tinkerGraph/TinkerGraph';
import TraversalItem from '../traversalItem/TraversalItem';

export default class TraversalStep {
  traversal: Traversal;
  traversalItemCollection: TraversalItem[];
  constructor(traversal: Traversal, traversalItemCollection: TraversalItem[]) {
    /**
     * this.traversal is a reference to the traversal which stores the path of
     * which this collection is a step
     */
    this.traversal = traversal;
    this.traversalItemCollection = traversalItemCollection;
  }
  and() {}
  as() {}
  both(...edgeTypes: string[]) {
    const unflatNewTraversalItemCollection = this.traversalItemCollection
      .filter(traversalItem => traversalItem.traversalItem._type === 'vertex')
      .map(traversalItem => {
        const outVertices = (traversalItem.traversalItem as VirtualVertex)._outE
          .filter(virtualEdge =>
            edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true
          )
          .map(virtualEdge => virtualEdge._inV)
          .map(
            virtualVertex => new TraversalItem(virtualVertex, traversalItem)
          );

        const inVertices = (traversalItem.traversalItem as VirtualVertex)._inE
          .filter(virtualEdge =>
            edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true
          )
          .map(virtualEdge => virtualEdge._outV)
          .map(
            virtualVertex => new TraversalItem(virtualVertex, traversalItem)
          );

        return [...outVertices, ...inVertices];
      });
    const newTraversalItemCollection = ([] as TraversalItem[]).concat(
      ...unflatNewTraversalItemCollection
    );

    this.traversal.currentTraversalItemCollection = newTraversalItemCollection;
    return new TraversalStep(this.traversal, newTraversalItemCollection);
  }
  bothE(...edgeTypes: string[]) {
    const unflatNewTraversalItemCollection = this.traversalItemCollection
      .filter(traversalItem => traversalItem.traversalItem._type === 'vertex')
      .map(traversalItem => {
        const outVertices = (traversalItem.traversalItem as VirtualVertex)._outE
          .filter(virtualEdge =>
            edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true
          )
          .map(virtualEdge => new TraversalItem(virtualEdge, traversalItem));

        const inVertices = (traversalItem.traversalItem as VirtualVertex)._inE
          .filter(virtualEdge =>
            edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true
          )
          .map(virtualEdge => new TraversalItem(virtualEdge, traversalItem));

        return [...outVertices, ...inVertices];
      });
    const newTraversalItemCollection = ([] as TraversalItem[]).concat(
      ...unflatNewTraversalItemCollection
    );

    this.traversal.currentTraversalItemCollection = newTraversalItemCollection;
    return new TraversalStep(this.traversal, newTraversalItemCollection);
  }
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
  in(...edgeTypes: string[]) {
    const unflatNewTraversalItemCollection = this.traversalItemCollection
      .filter(traversalItem => traversalItem.traversalItem._type === 'vertex')
      .map(traversalItem =>
        (traversalItem.traversalItem as VirtualVertex)._inE
          .filter(virtualEdge =>
            edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true
          )
          .map(virtualEdge => virtualEdge._outV)
          .map(virtualVertex => new TraversalItem(virtualVertex, traversalItem))
      );
    const newTraversalItemCollection = ([] as TraversalItem[]).concat(
      ...unflatNewTraversalItemCollection
    );

    this.traversal.currentTraversalItemCollection = newTraversalItemCollection;
    return new TraversalStep(this.traversal, newTraversalItemCollection);
  }
  inE(...edgeTypes: string[]) {
    const unflatNewTraversalItemCollection = this.traversalItemCollection
      .filter(traversalItem => traversalItem.traversalItem._type === 'vertex')
      .map(traversalItem =>
        (traversalItem.traversalItem as VirtualVertex)._inE
          .filter(virtualEdge =>
            edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true
          )
          .map(virtualEdge => new TraversalItem(virtualEdge, traversalItem))
      );
    const newTraversalItemCollection = ([] as TraversalItem[]).concat(
      ...unflatNewTraversalItemCollection
    );

    this.traversal.currentTraversalItemCollection = newTraversalItemCollection;
    return new TraversalStep(this.traversal, newTraversalItemCollection);
  }
  label() {}
  map() {}
  /**
   * Next i used to terminate a query, i.e. to output the part of the graph
   * corresponding to the current collection instance.
   */
  next() {
    return this.traversalItemCollection.map(
      traversalItem => traversalItem.traversalItem._origin
    );
  }
  not() {}
  /**
   * Only used together with branch.
   * g.V().branch(values('name'))
   *      .option('marko', values('age'))
   *      .option(none, values('name'))
   */
  option() {}
  otherV() {}
  /**
   * Returns a collection of all nodes reached by following outward edges.
   * An arbitrary amount of string arguments can be supplied to specify the
   * label of the edges to follow.
   */
  out(...edgeTypes: string[]) {
    const unflatNewTraversalItemCollection = this.traversalItemCollection
      .filter(traversalItem => traversalItem.traversalItem._type === 'vertex')
      .map(traversalItem =>
        (traversalItem.traversalItem as VirtualVertex)._outE
          .filter(virtualEdge =>
            edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true
          )
          .map(virtualEdge => virtualEdge._inV)
          .map(virtualVertex => new TraversalItem(virtualVertex, traversalItem))
      );
    const newTraversalItemCollection = ([] as TraversalItem[]).concat(
      ...unflatNewTraversalItemCollection
    );

    this.traversal.currentTraversalItemCollection = newTraversalItemCollection;
    return new TraversalStep(this.traversal, newTraversalItemCollection);
  }
  outE(...edgeTypes: string[]) {
    const unflatNewTraversalItemCollection = this.traversalItemCollection
      .filter(traversalItem => traversalItem.traversalItem._type === 'vertex')
      .map(traversalItem =>
        (traversalItem.traversalItem as VirtualVertex)._outE
          .filter(virtualEdge =>
            edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true
          )
          .map(virtualEdge => new TraversalItem(virtualEdge, traversalItem))
      );
    const newTraversalItemCollection = ([] as TraversalItem[]).concat(
      ...unflatNewTraversalItemCollection
    );

    this.traversal.currentTraversalItemCollection = newTraversalItemCollection;
    return new TraversalStep(this.traversal, newTraversalItemCollection);
  }
  path() {}
  repeat() {}
  sideEffect() {}
  store() {}
  values() {}
}
