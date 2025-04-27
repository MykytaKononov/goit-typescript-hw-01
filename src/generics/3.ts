function merge<A, B>(objA: A, objB: B): A & B {
  return Object.assign({}, objA, objB);
}

const mergedObj = merge({ name: "Max" }, { age: 30 });
