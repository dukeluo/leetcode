interface IValueItem {
  0: string;
  1: number;
}

class TimeMap {
  #map: Map<string, IValueItem[]>;

  constructor() {
    this.#map = new Map<string, IValueItem[]>();
  }

  set(key: string, value: string, timestamp: number): void {
    const values = this.#map.get(key) ?? [];

    values.push([value, timestamp]);
    this.#map.set(key, values);
  }

  get(key: string, timestamp: number): string {
    const values = this.#map.get(key) ?? [];
    let left = 0;
    let right = values.length - 1;
    let mid;
    let result = "";

    while (left <= right) {
      mid = left + Math.floor((right - left) / 2);

      if (values[mid][1] <= timestamp) {
        left = mid + 1;
        result = values[mid][0];
      } else {
        right = mid - 1;
      }
    }

    return result;
  }
}
