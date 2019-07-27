import Graph from '../graph/Graph';
export interface VerticeData {
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
    vertices: VerticeData[];
    edges: EdgeData[];
}
/**
 * The static TinkerGraph class is mainly responsble for reading in a json file
 * written in the GraphSON format.
 */
declare const TinkerGraph: {
    open: () => Graph;
};
export default TinkerGraph;
