import Collection from '../Collection';

export const _inE = (collection: Collection, ...edgeTypes: string[]) => {
  const allEdges = collection.traversal.graphData.edges;
  const edges = (edgeTypes.length
    ? allEdges.filter(edge => edgeTypes.includes(edge._label))
    : allEdges
  ).filter(edge =>
    collection.collectionData.map(item => item._id).includes(edge._inV)
  );
  const newCollectionData = edges;
  const newCollection = new Collection(collection.traversal, newCollectionData);
  collection.traversal.traversal.push(newCollection);
  return newCollection;
};
