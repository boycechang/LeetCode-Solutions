/** https://leetcode.com/problems/clone-graph/#/description
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */

 var cloneGraph = function(graph) {
    if (graph === null) {
        return null;
    }


    var nodesToFillNeighbors = [];
    var nodesCopied = new WeakMap();

    var newGraph = new UndirectedGraphNode(graph.label);
    newGraph.neighbors = graph.neighbors.slice();

    nodesToFillNeighbors.push(newGraph);
    nodesCopied.set(graph, newGraph);

    while (nodesToFillNeighbors.length !== 0) {
        var node = nodesToFillNeighbors[0];

        for (var i = 0; i < node.neighbors.length; i++) {
            var neighbor = node.neighbors[i];

            if (nodesCopied.get(neighbor) === undefined) {
                var newNode = new UndirectedGraphNode(neighbor.label);
                newNode.neighbors = neighbor.neighbors.slice();
                nodesCopied.set(neighbor, newNode);
                nodesToFillNeighbors.push(newNode);
            }
            node.neighbors[i] = nodesCopied.get(neighbor);
        }

        nodesToFillNeighbors.splice(0, 1);
    }

    return newGraph;
};
