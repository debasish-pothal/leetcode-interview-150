/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  // create weighted directed graph
  const graph = {};

  equations.forEach(([a, b], index) => {
    if (!graph[a]) {
      graph[a] = {};
    }

    if (!graph[b]) {
      graph[b] = {};
    }

    graph[a][b] = values[index];
    graph[b][a] = 1 / values[index];
  });

  // dfs
  const dfs = (start, target, visited) => {
    if (!(start in graph) || !(target in graph)) {
      return -1.0;
    }

    if (start === target) {
      return 1.0;
    }

    visited.add(start);

    for (const neighbour in graph[start]) {
      if (visited.has(neighbour)) continue;
      const result = dfs(neighbour, target, visited);
      if (result !== -1.0) return result * graph[start][neighbour];
    }

    return -1.0;
  };

  return queries.map(([a, b]) => dfs(a, b, new Set()));
};
