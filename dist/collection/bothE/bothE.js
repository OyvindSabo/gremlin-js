"use strict";
/*import Collection from '../Collection';

export const _bothE = (collection: Collection, ...edgeTypes: string[]) => {
  const allEdges = collection.traversal.graphData.edges;
  const filteredEdges = edgeTypes.length
    ? allEdges.filter(edge => edgeTypes.includes(edge._label))
    : allEdges;
  const edges = filteredEdges.filter(edge => {
    const currentIds = collection.collectionData.map(item => item._id);
    return currentIds.includes(edge._inV) || currentIds.includes(edge._outV);
  });
  const newCollectionData = edges;
  const newCollection = new Collection(collection.traversal, newCollectionData);
  return newCollection;
};*/
