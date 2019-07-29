import { VirtualVertex, VirtualEdge } from '../tinkerGraph/TinkerGraph';

export default class TraversalItem {
  traversalItem: VirtualVertex | VirtualEdge;
  previous?: TraversalItem;
  constructor(
    traversalItem: VirtualVertex | VirtualEdge,
    previous?: TraversalItem
  ) {
    this.traversalItem = traversalItem;
    this.previous = previous;
  }
}
