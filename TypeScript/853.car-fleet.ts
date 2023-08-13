type CarPosition = number;
type CarTime = number;
type CarItem = [CarPosition, CarTime];

function carFleet(target: number, position: number[], speed: number[]): number {
  const items: CarItem[] = new Array(position.length);
  let result = 0;
  let maxTime = 0;

  for (let i = 0; i < items.length; i++) {
    items[i] = [position[i], (target - position[i]) / speed[i]];
  }
  items.sort(([p1], [p2]) => p2 - p1);

  for (let i = 0; i < items.length; i++) {
    if (items[i][1] > maxTime) {
      result += 1;
      maxTime = items[i][1];
    }
  }

  return result;
}
