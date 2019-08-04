import TraversalStep from '../TraversalStep';
import { VirtualVertex } from '../../tinkerGraph/TinkerGraph';
import TraversalItem from '../../traversalItem/TraversalItem';

export const _outE = (
  traversalStep: TraversalStep,
  ...edgeLabels: string[]
) => {
  const unflatNewTraversalItemCollection = traversalStep._traversalItemCollection
    .filter(traversalItem => traversalItem._traversalItem._type === 'vertex')
    .map(traversalItem =>
      (traversalItem._traversalItem as VirtualVertex)._outE
        .filter(virtualEdge =>
          edgeLabels.length ? edgeLabels.includes(virtualEdge._label) : true
        )
        .map(virtualEdge => new TraversalItem(virtualEdge, traversalItem))
    );
  const newTraversalItemCollection = ([] as TraversalItem[]).concat(
    ...unflatNewTraversalItemCollection
  );
  return newTraversalItemCollection;
};
