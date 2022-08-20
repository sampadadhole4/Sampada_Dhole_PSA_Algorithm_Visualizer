# Sampada_Dhole_PSA_Algorithm_Visualizer
Name: Sampada Dhole
NUID: 001526241

## What is Breadth-First Search?

A graph's breadth-first traversal, often known as a search, is comparable to a tree's breadth-first traversal. The only problem with this is that, unlike trees, graphs might have cycles, which means we might keep going back to the same node. 

We employ a boolean visited array in order to prevent processing a node more than once. All vertices are considered to be reachable from the initial vertex for the sake of simplicity. For traversal, BFS employs a queue data structure.

## Algorithm:

Lets see the pseudo code for BFS:

```java
create a queue Q 
mark v as visited and put v into Q 
while Q is non-empty 
    remove the head u of Q 
    mark and enqueue all (unvisited) neighbours of u
```

So, we will take a queue to push the nodes in the graph and pull to check the neighboring nodes of  the graph.

## Working of BFS with an example:

S, lets take an example here,

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d5de9f94-7da8-47cf-8181-b344bde101cc/Untitled.png)

Here, we can see that the graph is directed and connected.

So lets try running a BFS here,

1. First of all, we will start with the starting node ‘a’. We will add ‘a’ to the queue.
2. We will take out the elements of the queue and traverse the neighboring nodes of the taken out nodes, so the neighboring nodes of ‘a’ would be ‘b’ and ‘e’, so now we add ‘b’ and ‘e’ to the queue and mark the visited[’a’] = true as it is visited.
3. So, the output array now contains [a].
4. Again we take the next element from the queue i.e ‘e’ and add the neighboring elements of ‘e’ but here there are no outgoing edges to ‘e’ so we simple print ‘e’ and mark the visited flag for ‘e’ as true.
5. Now, our output array contains [a,e]
6. Next, we take out ‘b’ which was in our queue, and add the neighboring nodes of ‘b’ which are ‘e’, ‘c’ and ‘h’, but the flag of ‘e’ is already true, so we will not add ‘e’ to the queue, but we will add ‘c’ and ‘h’ and as we have visited all the neighboring nodes of ‘b’ we will mark the visited flag of ‘b’ as true.
7. Now, our output array would be [a,e,b]
8. Now, the next node in the queue is ‘c’, we will do the same procedure for c, So, we will add ‘d’ in the queue and output array would be [a,e,b,c]
9. Next node is ‘h’, traversing all the neighboring elements of ‘h’,  we will add nothing to the queue, because there are no outgoing edges.
10. So, output array would be: [a,e,b,c,h]
11. Next node to pop out from queue is ‘d’, the neighboring nodes of ‘d’ are ‘e’ and ‘f’ but ‘e’ is already visited so we add ‘f’ and mark the visited flag for ‘d’ is true.
12. Output array = [a,e,b,c,h,d]
13. Now, the last element in the queue is ‘f’, the neighboring node of ‘f’ is ‘a’ but it is already visited, so we will simply add ‘f’ to the output array.
14. So, final output would be [a,e,b,c,h,d,f]

NOTE: There can be multiple BFS orderings of a graph.

## Rules of BFS:

The guidelines for applying the BFS algorithm are stated below:

1. Any node in the graph is designated as the root to start traversal. It makes use of a queue data structure (FIFO).
2. As it moves through each node in the network, it keeps dropping the node.
3. The algorithm continuously inserting the queue while visiting the nearby unvisited nodes.
4. It removes the preceding vertex from the queue if no neighboring vertex can be identified.
5. Until all of the vertices have been reached or traversed and are designated as complete, the BFS algorithm iterates.
6. When traversing data from any node, the method doesn't create any loops.

## Applications of BFS:

The Applications of Breath-first search are:

1. Shortest Path and Minimum Spanning Tree for unweighted graph
2. Peer to Peer Networks.
3. Crawlers in Search Engines
4. Social Networking Websites
5. GPS Navigation systems
6. In Garbage Collection

## Summary

That was the breadth-first search algorithm, or the simple graph traversal algorithm. In conclusion, the algorithm must visit, examine, and update each unvisited node in a tree-like structure as part of the graph traversal process. The BFS algorithm is renowned for examining a graph's nodes and determining the shortest path across them. The BFS is an effective algorithm with a complexity of O(V + E), and it traverses a graph with fewer iterations in the least amount of time while avoiding infinite loops. Because of its robustness, the technique is employed in numerous real-world applications including web crawlers and P2P networks.
