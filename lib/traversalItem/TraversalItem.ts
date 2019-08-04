import { VirtualVertex, VirtualEdge } from '../tinkerGraph/TinkerGraph';

export default class TraversalItem {
  _traversalItem: VirtualVertex | VirtualEdge;
  _previous?: TraversalItem;
  constructor(
    traversalItem: VirtualVertex | VirtualEdge,
    previous?: TraversalItem
  ) {
    this._traversalItem = traversalItem;
    this._previous = previous;
  }
}
