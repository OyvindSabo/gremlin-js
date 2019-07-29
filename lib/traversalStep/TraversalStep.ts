import Traversal from '../traversal/Traversal';
import { _both } from './both/both';
import { _bothE } from './bothE/bothE';
import { _in } from './in/in';
import { _inE } from './inE/inE';
import { _out } from './out/out';
import { _outE } from './outE/outE';
import { CollectionData } from './types';
import { VertexData, EdgeData } from '../tinkerGraph/TinkerGraph';
import TraversalItem from '../traversalItem/TraversalItem';
import { timingSafeEqual } from 'crypto';

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
    const newCollection = _both(this, ...edgeTypes);
    this.traversal.currentCollection = traversal.push(newCollection);
    return newCollection;
  }
  bothE(...edgeTypes: string[]) {
    const newCollection = _bothE(this, ...edgeTypes);
    this.traversal.traversal.push(newCollection);
    return newCollection;
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
    const newCollection = _in(this, ...edgeTypes);
    this.traversal.traversal.push(newCollection);
    return newCollection;
  }
  inE(...edgeTypes: string[]) {
    const newCollection = _inE(this, ...edgeTypes);
    this.traversal.traversal.push(newCollection);
    return newCollection;
  }
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
  otherV() {}
  /**
   * Returns a collection of all nodes reached by following outward edges.
   * An arbitrary amount of string arguments can be supplied to specify the
   * label of the edges to follow.
   */
  out(...edgeTypes: string[]) {
    const newCollection = _out(this, ...edgeTypes);
    this.traversal.traversal.push(newCollection);
    return newCollection;
  }
  outE(...edgeTypes: string[]) {
    const newCollection = _outE(this, ...edgeTypes);
    this.traversal.traversal.push(newCollection);
    return newCollection;
  }
  path() {}
  repeat() {}
  sideEffect() {}
  store() {}
  values() {}
}
