import Collection from '../Collection';

export const _outE = (collection: Collection, ...edgeTypes: string[]) => {
  const allEdges = collection.traversal.graphData.edges;
  const edges = (edgeTypes.length
    ? allEdges.filter(edge => edgeTypes.includes(edge._label))
    : allEdges
  ).filter(edge =>
    collection.collectionData.map(item => item._id).includes(edge._outV)
  );
  const newCollectionData = edges;
  const newCollection = new Collection(collection.traversal, newCollectionData);
  return newCollection;
};
