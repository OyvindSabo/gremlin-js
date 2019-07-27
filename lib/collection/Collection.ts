import Traversal from '../traversal/Traversal';
import { _in } from './in/in';
import { _out } from './out/out';
import { _outE } from './outE/outE';
import { _inE } from './inE/inE';
import { VerticeData, EdgeData } from '../tinkerGraph/TinkerGraph';
import { CollectionData } from './types';
import { _both } from './both/both';

export default class Collection {
  traversal: Traversal;
  collectionData: (VerticeData | EdgeData)[];
  constructor(traversal: Traversal, collectionData: CollectionData) {
    /**
     * this.traversal is a reference to the traversal which stores the path of
     * which this collection is a step
     */
    this.traversal = traversal;
    // this.collectionData is a subset of collection.traversal.graphData
    this.collectionData = collectionData;
  }
  and() {}
  as() {}
  both(...edgeTypes: string[]) {
    const newCollection = _both(this, ...edgeTypes);
    this.traversal.traversal.push(newCollection);
    return newCollection;
  }
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
