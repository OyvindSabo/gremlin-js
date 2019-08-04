import TraversalStep from '../../traversalStep/TraversalStep';
import { VirtualVertex } from '../../tinkerGraph/TinkerGraph';
import TraversalItem from '../../traversalItem/TraversalItem';

export const _both = (
  traversalStep: TraversalStep,
  ...edgeLabels: string[]
) => {
  const unflatNewTraversalItemCollection = traversalStep._traversalItemCollection
    .filter(traversalItem => traversalItem._traversalItem._type === 'vertex')
    .map(traversalItem => {
      const outVertices = (traversalItem._traversalItem as VirtualVertex)._outE
        .filter(virtualEdge =>
          edgeLabels.length ? edgeLabels.includes(virtualEdge._label) : true
        )
        .map(virtualEdge => virtualEdge._inV)
        .map(virtualVertex => new TraversalItem(virtualVertex, traversalItem));

      const inVertices = (traversalItem._traversalItem as VirtualVertex)._inE
        .filter(virtualEdge =>
          edgeLabels.length ? edgeLabels.includes(virtualEdge._label) : true
        )
        .map(virtualEdge => virtualEdge._outV)
        .map(virtualVertex => new TraversalItem(virtualVertex, traversalItem));

      return [...outVertices, ...inVertices];
    });
  const newTraversalItemCollection = ([] as TraversalItem[]).concat(
    ...unflatNewTraversalItemCollection
  );
  return newTraversalItemCollection;
};
