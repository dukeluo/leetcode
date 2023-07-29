function trap(height: number[]): number {
  const maxLeft = new Array(height.length).fill(0);
  const maxRight = new Array(height.length).fill(0);

  for (let i = 1; i < height.length; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1]);
  }
  for (let i = height.length - 2; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], height[i + 1]);
  }

  return height.reduce((s, h, i) => {
    const v = Math.min(maxLeft[i], maxRight[i]) - h;
    return v > 0 ? s + v : s;
  }, 0);
}

function trap2(height: number[]): number {
  let l = 0;
  let r = height.length - 1;
  let ml = height[l];
  let mr = height[r];
  let s = 0;

  while (l < r) {
    if (ml < mr) {
      l++;
      ml = Math.max(ml, height[l]);
      s += ml - height[l];
    } else {
      r--;
      mr = Math.max(mr, height[r]);
      s += mr - height[r];
    }
  }

  return s;
}
