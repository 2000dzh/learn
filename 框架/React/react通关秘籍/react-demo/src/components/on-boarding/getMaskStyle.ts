export const getMaskStyle = (element: HTMLElement, container: HTMLElement) => {
  if (!element) {
    return {}
  }

  const { width, height, left, top } = element.getBoundingClientRect()
  const isBody = () => container === document.body

  const elementTopWithScroll = isBody() ? window.scrollY + top : container.scrollTop + top
  const elementLeftWithScroll = isBody() ? window.scrollX + left : container.scrollLeft + left


  return {
    width: container.scrollWidth,
    height: container.scrollHeight,
    borderTopWidth: Math.max(elementTopWithScroll, 0),
    borderLeftWidth: Math.max(elementLeftWithScroll, 0),
    borderBottomWidth: Math.max(container.scrollHeight - height - elementTopWithScroll, 0),
    borderRightWidth: Math.max(container.scrollWidth - width - elementLeftWithScroll, 0),
  }
}
