import {
  VirtualEdge,
  VirtualVertex,
  GraphData,
} from '../tinkerGraph/TinkerGraph';
import Traversal from '../traversal/Traversal';

export default class VirtualGraph {
  vertices: { [_id: string]: VirtualVertex };
  edges: { [_id: string]: VirtualEdge };
  constructor(
    virtualVertices: { [_id: string]: VirtualVertex },
    virtualEdges: { [_id: string]: VirtualEdge }
  ) {
    this.vertices = virtualVertices;
    this.edges = virtualEdges;
  }
  traversal() {
    return new Traversal(this);
  }
  close() {}
}
