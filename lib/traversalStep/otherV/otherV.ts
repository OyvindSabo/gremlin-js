import TraversalStep from '../TraversalStep';
import { VirtualEdge } from '../../tinkerGraph/TinkerGraph';
import TraversalItem from '../../traversalItem/TraversalItem';

export const _otherV = (traversalStep: TraversalStep) => {
  const newTraversalItemCollection = traversalStep._traversalItemCollection
    .filter(traversalItem => traversalItem._traversalItem._type === 'edge')
    .filter(traversalItem => traversalItem._previous)
    .map(traversalItem => {
      const previousVertexId = traversalItem._previous!._traversalItem._id;
      const inVertex = (traversalItem._traversalItem as VirtualEdge)._inV;
      const outVertex = (traversalItem._traversalItem as VirtualEdge)._outV;
      if (previousVertexId === inVertex._id) {
        return new TraversalItem(outVertex, traversalItem);
      }
      return new TraversalItem(inVertex, traversalItem);
    });

  return newTraversalItemCollection;
};
