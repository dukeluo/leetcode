function permute(nums: number[]): number[][] {
  if (nums.length === 1) {
    return [[...nums]];
  }

  const allPerms: number[][] = [];

  for (let _ of nums) {
    const num = nums.pop()!;
    const perms = permute(nums);

    for (let perm of perms) {
      perm.push(num);
      allPerms.push(perm);
    }

    nums.unshift(num);
  }

  return allPerms;
}
