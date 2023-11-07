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

function permute2(nums: number[], collected: number[] = []): number[][] {
  if (nums.length === 0) {
    return [collected];
  }

  const allPerms: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const rest = nums.slice(0, i).concat(nums.slice(i + 1));

    for (let perm of permute2(rest, [...collected, num])) {
      allPerms.push(perm);
    }
  }

  return allPerms;
}
