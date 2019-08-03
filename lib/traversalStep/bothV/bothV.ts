import TraversalStep from '../TraversalStep';
import { VirtualEdge } from '../../tinkerGraph/TinkerGraph';
import TraversalItem from '../../traversalItem/TraversalItem';

export const _bothV = (traversalStep: TraversalStep) => {
  const unflatNewTraversalItemCollection = traversalStep._traversalItemCollection
    .filter(traversalItem => traversalItem.traversalItem._type === 'edge')
    .map(traversalItem => {
      const outVertex = (traversalItem.traversalItem as VirtualEdge)._outV;
      const outVertexTraversalItem = new TraversalItem(
        outVertex,
        traversalItem
      );

      const inVertex = (traversalItem.traversalItem as VirtualEdge)._inV;
      const inVertexTraversalItem = new TraversalItem(inVertex, traversalItem);
      return [outVertexTraversalItem, inVertexTraversalItem];
    });
  const newTraversalItemCollection = ([] as TraversalItem[]).concat(
    ...unflatNewTraversalItemCollection
  );
  return newTraversalItemCollection;
};
