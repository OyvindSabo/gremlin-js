import TraversalStep from '../TraversalStep';
import { VirtualVertex } from '../../tinkerGraph/TinkerGraph';
import TraversalItem from '../../traversalItem/TraversalItem';

export const _bothE = (
  traversalStep: TraversalStep,
  ...edgeTypes: string[]
) => {
  const unflatNewTraversalItemCollection = traversalStep._traversalItemCollection
    .filter(traversalItem => traversalItem.traversalItem._type === 'vertex')
    .map(traversalItem => {
      const outVertices = (traversalItem.traversalItem as VirtualVertex)._outE
        .filter(virtualEdge =>
          edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true
        )
        .map(virtualEdge => new TraversalItem(virtualEdge, traversalItem));

      const inVertices = (traversalItem.traversalItem as VirtualVertex)._inE
        .filter(virtualEdge =>
          edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true
        )
        .map(virtualEdge => new TraversalItem(virtualEdge, traversalItem));

      return [...outVertices, ...inVertices];
    });
  const newTraversalItemCollection = ([] as TraversalItem[]).concat(
    ...unflatNewTraversalItemCollection
  );
  return newTraversalItemCollection;
};
