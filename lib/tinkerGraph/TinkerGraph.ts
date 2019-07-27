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

const defaultGraph = {
  mode: 'NORMAL',
  vertices: [],
  edges: [],
};

/**
 * The static TinkerGraph class is mainly responsble for reading in a json file
 * written in the GraphSON format.
 */
const TinkerGraph = {
  open: (): Graph => {
    // The dedault graph should only be opened if there is no valid graph in the file path
    return new Graph(defaultGraph);
  },
};

export default TinkerGraph;
