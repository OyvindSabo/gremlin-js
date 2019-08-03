import TraversalStep from '../../traversalStep/TraversalStep';
import { VirtualVertex } from '../../tinkerGraph/TinkerGraph';
import TraversalItem from '../../traversalItem/TraversalItem';

export const _both = (traversalStep: TraversalStep, ...edgeTypes: string[]) => {
  const unflatNewTraversalItemCollection = traversalStep._traversalItemCollection
    .filter(traversalItem => traversalItem.traversalItem._type === 'vertex')
    .map(traversalItem => {
      const outVertices = (traversalItem.traversalItem as VirtualVertex)._outE
        .filter(virtualEdge =>
          edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true
        )
        .map(virtualEdge => virtualEdge._inV)
        .map(virtualVertex => new TraversalItem(virtualVertex, traversalItem));

      const inVertices = (traversalItem.traversalItem as VirtualVertex)._inE
        .filter(virtualEdge =>
          edgeTypes.length ? edgeTypes.includes(virtualEdge._label) : true
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
