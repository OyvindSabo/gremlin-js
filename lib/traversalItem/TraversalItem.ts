import { VirtualVertex, VirtualEdge } from '../tinkerGraph/TinkerGraph';

export default class TraversalItem {
  _traversalItem: VirtualVertex | VirtualEdge;
  _previous?: TraversalItem;
  _labels: string[];
  constructor(
    traversalItem: VirtualVertex | VirtualEdge,
    previous?: TraversalItem
  ) {
    this._traversalItem = traversalItem;
    this._previous = previous;
    this._labels = [];
  }
}
