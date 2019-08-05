import TraversalStep from '../TraversalStep';
import TraversalItem from '../../traversalItem/TraversalItem';

export const _select = (traversalStep: TraversalStep, ...labels: string[]) => {
  if (labels.length === 1) {
    const label = labels[0];
    const possiblyDuplicateNewTraversalItemCollection = traversalStep._traversalItemCollection
      .map(traversalItem => {
        let currentTraversalItem = traversalItem;
        let foundLabel = false;
        while (currentTraversalItem._previous && !foundLabel) {
          if (currentTraversalItem._labels.includes(label)) {
            return currentTraversalItem;
          }
          currentTraversalItem = traversalItem._previous!;
        }
      })
      .filter(Boolean);
    const newTraversalItemCollection: TraversalItem[] = [
      ...new Set<TraversalItem>(
        possiblyDuplicateNewTraversalItemCollection as TraversalItem[]
      ),
    ];
    return newTraversalItemCollection;
  }
  return [];
};
