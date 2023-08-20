function largestRectangleArea(heights: number[]): number {
  let maxArea = 0;
  const stack: number[][] = [];

  for (let i = 0; i < heights.length; i++) {
    let start = i;
    let height = heights[i];

    while (stack.length && stack[stack.length - 1][1] > height) {
      const [si, sh] = stack.pop()!;

      maxArea = Math.max(maxArea, sh * (i - si));
      start = si;
    }
    stack.push([start, height]);
  }

  for (let i = 0; i < stack.length; i++) {
    maxArea = Math.max(maxArea, stack[i][1] * (heights.length - stack[i][0]));
  }

  return maxArea;
}
