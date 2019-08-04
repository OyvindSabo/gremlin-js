import { VirtualEdge, VirtualVertex } from '../tinkerGraph/TinkerGraph';
import Traversal from '../traversal/Traversal';

export default class VirtualGraph {
  _vertices: { [_id: string]: VirtualVertex };
  _edges: { [_id: string]: VirtualEdge };
  constructor(
    virtualVertices: { [_id: string]: VirtualVertex },
    virtualEdges: { [_id: string]: VirtualEdge }
  ) {
    this._vertices = virtualVertices;
    this._edges = virtualEdges;
  }
  traversal() {
    return new Traversal(this);
  }
  close() {}
}
