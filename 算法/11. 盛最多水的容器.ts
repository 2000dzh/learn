function maxArea(height: number[]): number {
  let left = 0,
    right = height.length - 1,
    result = 0

  while (left < right) {
    result =
      height[right] > height[left]
        ? Math.max(result, (right - left) * height[left++])
        : Math.max(result, (right - left) * height[right--])
  }
  return result
}
