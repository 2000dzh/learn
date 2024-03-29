const nums = [2, 7, 11, 15]

type numArrT = Array<number>

function twoSum(nums: numArrT, target: number): numArrT {
  const hasMap: Map<number, number> = new Map()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const diff = target - num

    if (hasMap.has(num)) {
      return [hasMap.get(num), i]
    }

    hasMap.set(diff, i)
  }

  return []
}

console.log(twoSum(nums, 9))
