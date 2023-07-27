function maxArea(height: number[]): number {
  let l = 0;
  let r = height.length - 1;
  let area = 0;

  while (l < r) {
    const lh = height[l];
    const rh = height[r];

    area = Math.max(area, Math.min(lh, rh) * (r - l));
    if (lh > rh) r--;
    else l++;
  }

  return area;
}
