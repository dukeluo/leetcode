function permute(nums: number[]): number[][] {
  if (nums.length === 1) {
    return [[...nums]];
  }

  const permutations: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums.shift();

    for (let perm of permute(nums)) {
      permutations.push([num, ...perm]);
    }
    nums.push(num);
  }

  return permutations;
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

function permute3(nums: number[]): number[][] {
  const permutations: number[][] = [];

  function backtrace(candidates: number[], permutation: number[]) {
    if (candidates.length === 0) {
      permutations.push(permutation.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const num = nums.shift();
      backtrace([...nums], [...permutation, num]);
      nums.push(num);
    }
  }

  backtrace(nums, []);

  return permutations;
}

console.log(permute([1, 2, 3]));
console.log(permute3([1, 2, 3]));
