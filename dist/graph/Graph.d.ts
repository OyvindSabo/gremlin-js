import Traversal from '../traversal/Traversal';
import { GraphData } from '../tinkerGraph/TinkerGraph';
/**
 * The Graph class is mainly responsble for storing graphData, from which new
 * traversals can be initiated.
 */
export default class Graph {
    graphData: GraphData;
    constructor(graphData: GraphData);
    traversal(): Traversal;
    close(): void;
}
