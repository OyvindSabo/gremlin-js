import TraversalStep from '../TraversalStep';
import { VirtualVertex } from '../../tinkerGraph/TinkerGraph';
import TraversalItem from '../../traversalItem/TraversalItem';

export const _in = (traversalStep: TraversalStep, ...edgeTypes: string[]) => {
  const unflatNewTraversalItemCollection = traversalStep._traversalItemCollection
    .filter(traversalItem => traversalItem.traversalItem._type === 'vertex')
    .map(traversalItem =>
      (traversalItem.traversalItem as VirtualVertex)._inE
        .filter(virtualEdge =>
          edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true
        )
        .map(virtualEdge => virtualEdge._outV)
        .map(virtualVertex => new TraversalItem(virtualVertex, traversalItem))
    );
  const newTraversalItemCollection = ([] as TraversalItem[]).concat(
    ...unflatNewTraversalItemCollection
  );
  return newTraversalItemCollection;
};
