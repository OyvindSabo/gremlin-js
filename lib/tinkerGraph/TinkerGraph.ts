import Graph from '../graph/Graph';

export interface VertexData {
  name: string;
  _id: string;
  _type: string;
}

export interface EdgeData {
  _id: string;
  _type: string;
  _outV: string;
  _inV: string;
  _label: string;
}

export interface GraphData {
  mode: string;
  vertices: VertexData[];
  edges: EdgeData[];
}

export interface VirtualVertex {
  name: string;
  _id: string;
  _type: string;
  _outE: VirtualEdge[];
  _inE: VirtualEdge[];
}

export interface VirtualEdge {
  _id: string;
  _type: string;
  _outV: VirtualVertex;
  _inV: VirtualVertex;
  _label: string;
}

export interface VirtualGraph {
  vertices: { [_id: string]: VirtualVertex };
  edges: { [_id: string]: VirtualEdge };
}

const defaultGraph = {
  mode: 'NORMAL',
  vertices: [],
  edges: [],
};

/**
 * The static TinkerGraph class is mainly responsble for reading in a json file
 * written in the GraphSON format. Currently, it only accept preloaded objects,
 * not json.
 */
const TinkerGraph = {
  open: (graphData: GraphData): VirtualGraph => {
    const virtualGraph: VirtualGraph = {
      vertices: {},
      edges: {},
    };
    const { vertices, edges } = graphData;
    vertices.forEach(vertexData => {
      const virtualVertex: VirtualVertex = Object.assign(
        {},
        {
          ...vertexData,
          _outE: [],
          _inE: [],
        }
      );
      virtualGraph.vertices[virtualVertex._id] = virtualVertex;
    });
    edges.forEach(edgeData => {
      const virtualEdge: VirtualEdge = Object.assign(
        {},
        {
          ...edgeData,
          _outV: virtualGraph.vertices[edgeData._outV],
          _inV: virtualGraph.vertices[edgeData._inV],
        }
      );
      virtualEdge._outV._outE.push(virtualEdge);
      virtualEdge._inV._inE.push(virtualEdge);
      virtualGraph.edges[virtualEdge._id] = virtualEdge;
    });
    return virtualGraph;
  },
};

export default TinkerGraph;
