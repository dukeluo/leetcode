function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        result[i] = j - i;
        break;
      }
      if (j === temperatures.length - 1) {
        result[i] = 0;
      }
    }
  }

  return result;
}

type TemperatureValue = number;
type TemperatureIndex = number;
type TemperatureItem = [TemperatureValue, TemperatureIndex];

function dailyTemperatures2(temperatures: number[]): number[] {
  const result: number[] = new Array(temperatures.length).fill(0);
  const stack: TemperatureItem[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > stack[stack.length - 1][0]) {
      const [_, index] = stack.pop()!;
      result[index] = i - index;
    }
    stack.push([temperatures[i], i]);
  }

  return result;
}
