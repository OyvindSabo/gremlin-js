"use strict";
/*import Collection from '../Collection';

export const _out = (collection: Collection, ...edgeTypes: string[]) => {
  const allEdges = collection.traversal.graphData.edges;
  const allVertices = collection.traversal.graphData.vertices;
  const edges = (edgeTypes.length
    ? allEdges.filter(edge => edgeTypes.includes(edge._label))
    : allEdges
  ).filter(edge =>
    collection.collectionData.map(item => item._id).includes(edge._outV)
  );
  const newCollectionData = allVertices.filter(vertice =>
    edges.map(edge => edge._inV).includes(vertice._id)
  );
  const newCollection = new Collection(collection.traversal, newCollectionData);
  return newCollection;
};*/
