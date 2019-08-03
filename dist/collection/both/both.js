"use strict";
/*import Collection from '../Collection';

export const _both = (collection: Collection, ...edgeTypes: string[]) => {
  const allEdges = collection.traversal.graphData.edges;
  const allVertices = collection.traversal.graphData.vertices;
  const filteredEdges = edgeTypes.length
    ? allEdges.filter(edge => edgeTypes.includes(edge._label))
    : allEdges;
  const inEdges = filteredEdges.filter(edge =>
    collection.collectionData.map(item => item._id).includes(edge._inV)
  );
  const outEdges = filteredEdges.filter(edge =>
    collection.collectionData.map(item => item._id).includes(edge._outV)
  );
  const newCollectionData = allVertices.filter(vertice => {
    const inVerticeIds = outEdges.map(outEdge => outEdge._inV);
    const outVerticeIds = inEdges.map(inEdge => inEdge._outV);
    return [...inVerticeIds, ...outVerticeIds].includes(vertice._id);
  });
  const newCollection = new Collection(collection.traversal, newCollectionData);
  return newCollection;
};*/
