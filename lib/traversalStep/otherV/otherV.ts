import TraversalStep from '../TraversalStep';
import { VirtualEdge } from '../../tinkerGraph/TinkerGraph';
import TraversalItem from '../../traversalItem/TraversalItem';

export const _otherV = (traversalStep: TraversalStep) => {
  const newTraversalItemCollection = traversalStep._traversalItemCollection
    .filter(traversalItem => traversalItem.traversalItem._type === 'edge')
    .filter(traversalItem => traversalItem.previous)
    .map(traversalItem => {
      const previousVertexId = traversalItem.previous!.traversalItem._id;
      const inVertex = (traversalItem.traversalItem as VirtualEdge)._inV;
      const outVertex = (traversalItem.traversalItem as VirtualEdge)._outV;
      if (previousVertexId === inVertex._id) {
        return new TraversalItem(outVertex, traversalItem);
      }
      return new TraversalItem(inVertex, traversalItem);
    });

  return newTraversalItemCollection;
};
