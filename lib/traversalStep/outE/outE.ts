import TraversalStep from '../TraversalStep';
import { VirtualVertex } from '../../tinkerGraph/TinkerGraph';
import TraversalItem from '../../traversalItem/TraversalItem';

export const _outE = (traversalStep: TraversalStep, ...edgeTypes: string[]) => {
  const unflatNewTraversalItemCollection = traversalStep._traversalItemCollection
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
  return newTraversalItemCollection;
};
