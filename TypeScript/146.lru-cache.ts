class LRUCacheNode {
  #key: number;
  #value: number;
  #prev: LRUCacheNode | null;
  #next: LRUCacheNode | null;

  constructor(key: number, value: number) {
    this.#key = key;
    this.#value = value;
    this.#prev = null;
    this.#next = null;
  }

  get key() {
    return this.#key;
  }

  get value() {
    return this.#value;
  }

  get prev() {
    return this.#prev;
  }

  get next() {
    return this.#next;
  }

  set prev(prev: LRUCacheNode | null) {
    this.#prev = prev;
  }

  set next(next: LRUCacheNode | null) {
    this.#next = next;
  }
}

class LRUCache {
  #capacity: number;
  #head: LRUCacheNode;
  #tail: LRUCacheNode;
  #cache: Map<number, LRUCacheNode>;

  constructor(capacity: number) {
    this.#capacity = capacity;
    this.#head = new LRUCacheNode(-1, -1);
    this.#tail = new LRUCacheNode(-1, -1);
    this.#cache = new Map<number, LRUCacheNode>();
    this.#head.prev = this.#tail;
    this.#tail.next = this.#head;
  }

  #insert(node: LRUCacheNode) {
    const prev = this.#head.prev;
    const next = this.#head;

    next.prev = node;
    node.next = next;

    if (prev) {
      prev.next = node;
      node.prev = prev;
    }
  }

  #delete(node: LRUCacheNode) {
    const next = node.next;
    const prev = node.prev;

    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev;
    }
  }

  get(key: number): number {
    if (this.#cache.has(key)) {
      const node = this.#cache.get(key)!;

      this.#delete(node);
      this.#insert(node);

      return node.value;
    }
    return -1;
  }

  put(key: number, value: number): void {
    if (this.#cache.has(key)) {
      this.#delete(this.#cache.get(key)!);
    }

    const node = new LRUCacheNode(key, value);

    this.#cache.set(key, node);
    this.#insert(node);

    if (this.#cache.size > this.#capacity) {
      const lru = this.#tail.next;

      if (lru) {
        this.#delete(lru);
        this.#cache.delete(lru?.key);
      }
    }
  }
}

const lRUCache = new LRUCache(2);

lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lRUCache.get(1)); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2)); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1)); // return -1 (not found)
console.log(lRUCache.get(3)); // return 3
console.log(lRUCache.get(4)); // return 4
