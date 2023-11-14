function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let arr = nums1.concat(nums2).sort((a, b) => a - b),
    left = 0,
    right = arr.length - 1

  while (right >= left) {
    if (right === left) {
      return arr[right]
    }

    if (right - left === 1) {
      return (arr[left] + arr[right]) / 2
    }

    left++
    right--
  }
}
