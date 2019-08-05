import Traversal from '../traversal/Traversal';
import TraversalItem from '../traversalItem/TraversalItem';
import { _both } from './both/both';
import { _bothE } from './bothE/bothE';
import { _bothV } from './bothV/bothV';
import { _outE } from './outE/outE';
import { _out } from './out/out';
import { _inE } from './inE/inE';
import { _in } from './in/in';
import { _otherV } from './otherV/otherV';
import { _select } from './select/select';

export default class TraversalStep {
  _traversal: Traversal;
  _traversalItemCollection: TraversalItem[];
  constructor(traversal: Traversal, traversalItemCollection: TraversalItem[]) {
    /**
     * this.traversal is a reference to the traversal which stores the path of
     * which this collection is a step
     */
    this._traversal = traversal;
    this._traversalItemCollection = traversalItemCollection;
  }
  and() {}
  as(label: string) {
    this._traversalItemCollection.forEach(traversalItem => {
      traversalItem._labels.push(label);
    });
    return this;
  }
  both(...edgeLabels: string[]) {
    const newTraversalItemCollection = _both(this, ...edgeLabels);
    this._traversal._currentTraversalItemCollection = newTraversalItemCollection;
    return new TraversalStep(this._traversal, newTraversalItemCollection);
  }
  bothE(...edgeLabels: string[]) {
    const newTraversalItemCollection = _bothE(this, ...edgeLabels);
    this._traversal._currentTraversalItemCollection = newTraversalItemCollection;
    return new TraversalStep(this._traversal, newTraversalItemCollection);
  }
  bothV() {
    const newTraversalItemCollection = _bothV(this);
    this._traversal._currentTraversalItemCollection = newTraversalItemCollection;
    return new TraversalStep(this._traversal, newTraversalItemCollection);
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
  in(...edgeLabels: string[]) {
    const newTraversalItemCollection = _in(this, ...edgeLabels);
    this._traversal._currentTraversalItemCollection = newTraversalItemCollection;
    return new TraversalStep(this._traversal, newTraversalItemCollection);
  }
  inE(...edgeLabels: string[]) {
    const newTraversalItemCollection = _inE(this, ...edgeLabels);
    this._traversal._currentTraversalItemCollection = newTraversalItemCollection;
    return new TraversalStep(this._traversal, newTraversalItemCollection);
  }
  label() {}
  limit() {}
  map() {}
  /**
   * Next i used to terminate a query, i.e. to output the part of the graph
   * corresponding to the current collection instance.
   */
  next() {
    return this._traversalItemCollection.map(
      traversalItem => traversalItem._traversalItem._origin
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
  otherV() {
    const newTraversalItemCollection = _otherV(this);
    this._traversal._currentTraversalItemCollection = newTraversalItemCollection;
    return new TraversalStep(this._traversal, newTraversalItemCollection);
  }
  /**
   * Returns a collection of all nodes reached by following outward edges.
   * An arbitrary amount of string arguments can be supplied to specify the
   * label of the edges to follow.
   */
  out(...edgeLabels: string[]) {
    const newTraversalItemCollection = _out(this, ...edgeLabels);
    this._traversal._currentTraversalItemCollection = newTraversalItemCollection;
    return new TraversalStep(this._traversal, newTraversalItemCollection);
  }
  outE(...edgeLabels: string[]) {
    const newTraversalItemCollection = _outE(this, ...edgeLabels);
    this._traversal._currentTraversalItemCollection = newTraversalItemCollection;
    return new TraversalStep(this._traversal, newTraversalItemCollection);
  }
  path() {}
  repeat() {}
  // Currenty only able to select items which are part of the path of the remaining items :(
  select(...labels: string[]) {
    const newTraversalItemCollection = _select(this, ...labels);
    this._traversal._currentTraversalItemCollection = newTraversalItemCollection;
    return new TraversalStep(this._traversal, newTraversalItemCollection);
  }
  sideEffect() {}
  store() {}
  values() {}
}
