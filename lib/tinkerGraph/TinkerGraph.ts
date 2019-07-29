import Graph from '../graph/Graph';
import Traversal from '../traversal/Traversal';
import VirtualGraph from '../virtualGraph/VirtualGraph';

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

/**
 * The static TinkerGraph class is mainly responsble for reading in a json file
 * written in the GraphSON format. Currently, it only accept preloaded objects,
 * not json.
 */
const TinkerGraph = {
  open: (graphData: GraphData): VirtualGraph => {
    const virtualVertices: { [_id: string]: VirtualVertex } = {};
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
      virtualVertices[virtualVertex._id] = virtualVertex;
    });
    const virtualEdges: { [_id: string]: VirtualEdge } = {};
    edges.forEach(edgeData => {
      const virtualEdge: VirtualEdge = Object.assign(
        {},
        {
          ...edgeData,
          _outV: virtualVertices[edgeData._outV],
          _inV: virtualVertices[edgeData._inV],
        }
      );
      virtualEdge._outV._outE.push(virtualEdge);
      virtualEdge._inV._inE.push(virtualEdge);
      virtualEdges[virtualEdge._id] = virtualEdge;
    });
    return new VirtualGraph(virtualVertices, virtualEdges);
  },
};

export default TinkerGraph;
