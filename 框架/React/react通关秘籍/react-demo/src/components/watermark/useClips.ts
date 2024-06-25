import type { WatermarkProps } from './index'

export const FontGap = 3

function prepareCanvas(
  width: number,
  height: number,
  ratio: number = 1
): [
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  realWidth: number,
  realHeight: number
] {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!

  const realWidth = width * ratio
  const realHeight = height * ratio
  canvas.setAttribute('width', `${realWidth}px`)
  canvas.setAttribute('height', `${realHeight}px`)
  ctx.save()

  return [ctx, canvas, realWidth, realHeight]
}

export default function useClips() {
  function getClips(
    content: NonNullable<WatermarkProps['content']> | HTMLImageElement,
    rotate: number,
    ratio: number,
    width: number,
    height: number,
    font: Required<NonNullable<WatermarkProps['font']>>,
    gapX: number,
    gapY: number
  ) {
    console.log(content)

    const [ctx, canvas, contentWidth, contentHeight] = prepareCanvas(width, height, ratio)

    if (content instanceof HTMLImageElement) {
      // Image
      ctx.drawImage(content, 0, 0, contentWidth, contentHeight)
    } else {
      const { color, fontSize, fontWeight, fontStyle, fontFamily, textAlign } = font
      const mergedFontSize = Number(fontSize) * ratio

      ctx.font = `${fontStyle} normal ${fontWeight} ${mergedFontSize}px/${height}px ${fontFamily}`
      ctx.fillStyle = color
      ctx.textAlign = textAlign
      ctx.textBaseline = 'top'
      const contents = Array.isArray(content) ? content : [content]
      contents.forEach((item, index) => {
        ctx.fillText(item ?? '', contentWidth / 2, index * (mergedFontSize + FontGap * ratio))
      })
    }
  }

  return getClips
}
