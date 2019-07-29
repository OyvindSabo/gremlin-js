import { VirtualEdge } from '../tinkerGraph/TinkerGraph';
import Traversal from '../traversal/Traversal';

export default class VirtualGraph {
  vertices: { [_id: string]: VirtualVertex };
  edges: { [_id: string]: VirtualEdge };
  constructor(vertices, edges) {
    this.vertices = vertices;
    this.edges = edges;
  }
  traversal() {
    return new Traversal(this);
  }
}
