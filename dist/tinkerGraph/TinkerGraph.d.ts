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
    _origin: VertexData;
}
export interface VirtualEdge {
    _id: string;
    _type: string;
    _outV: VirtualVertex;
    _inV: VirtualVertex;
    _label: string;
    _origin: EdgeData;
}
/**
 * The static TinkerGraph class is mainly responsble for reading in a json file
 * written in the GraphSON format. Currently, it only accept preloaded objects,
 * not json.
 */
declare const TinkerGraph: {
    open: (graphData: GraphData) => VirtualGraph;
};
export default TinkerGraph;
