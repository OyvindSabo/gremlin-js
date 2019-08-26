Implementation of Gremlin in TypeScript/JavaScript which makes it easy to query GraphSON files.

### Install dependencies

`yarn install`

### Build

`yarn build`

### Run tests

`yarn test`

### Sample use

Assume we have the following GraphSON file (as used in the [GraphSON Reader and Writer Library](https://github.com/tinkerpop/blueprints/wiki/GraphSON-Reader-and-Writer-Library)):

```JSON
// graphData.json
{
    "graph": {
        "mode":"NORMAL",
        "vertices": [
            {
                "name": "lop",
                "lang": "java",
                "_id": "3",
                "_type": "vertex"
            },
            {
                "name": "vadas",
                "age": 27,
                "_id": "2",
                "_type": "vertex"
            },
            {
                "name": "marko",
                "age": 29,
                "_id": "1",
                "_type": "vertex"
            },
            {
                "name": "peter",
                "age": 35,
                "_id": "6",
                "_type": "vertex"
            },
            {
                "name": "ripple",
                "lang": "java",
                "_id": "5",
                "_type": "vertex"
            },
            {
                "name": "josh",
                "age": 32,
                "_id": "4",
                "_type": "vertex"
            }
        ],
        "edges": [
            {
                "weight": 1,
                "_id": "10",
                "_type": "edge",
                "_outV": "4",
                "_inV": "5",
                "_label": "created"
            },
            {
                "weight": 0.5,
                "_id": "7",
                "_type": "edge",
                "_outV": "1",
                "_inV": "2",
                "_label": "knows"
            },
            {
                "weight": 0.4000000059604645,
                "_id": "9",
                "_type": "edge",
                "_outV": "1",
                "_inV": "3",
                "_label": "created"
            },
            {
                "weight": 1,
                "_id": "8",
                "_type": "edge",
                "_outV": "1",
                "_inV": "4",
                "_label": "knows"
            },
            {
                "weight": 0.4000000059604645,
                "_id": "11",
                "_type": "edge",
                "_outV": "4",
                "_inV": "3",
                "_label": "created"
            },
            {
                "weight": 0.20000000298023224,
                "_id": "12",
                "_type": "edge",
                "_outV": "6",
                "_inV": "3",
                "_label": "created"
            }
        ]
    }
}
```

It corresponds to the following graph:

![](https://github.com/tinkerpop/blueprints/raw/master/doc/images/graph-example-1.jpg)

```
const graph = TinkerGraph.open('graphData.json');
const g = graph.traversal();

const result = g.V().in('created').out('knows').next()
console.log('result: ', result);
```

```
result: [{
  name: "josh",
  age: 32,
  _id: "4",
  _type: "vertex"
}]
```

### Current status

The example above illustrates how I intend the library t be used, and does currently not work. However, if we have the graph in memory as an object called graphData, we can successfully do the following:

```
const graph = TinkerGraph.open(graphData);
const g = graph.traversal();

const result = g.V().in('created').out('knows').next()
console.log('result: ', result);
```

At the time of writing, the only supported traversal steps are `as`, `both`, `bothE`, `bothV`, `in`, `inE`, `otherV`, `out`, `outE` and `select` (`as` and `select` still have some quirks which need to be worked out).
