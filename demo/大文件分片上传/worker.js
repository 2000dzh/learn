import SparkMD5 from 'spark-md5'

function createChunk(file, index, chunkSize) {
  return new Promise((resolve) => {
    const start = index * chunkSize
    const end = start + chunkSize
    const spark = new SparkMD5.ArrayBuffer()
    const fileReader = new FileReader()

    fileReader.onload = (e) => {
      spark.append(e.target.result)
      resolve({
        start,
        end,
        index,
        hash: spark.end(),
      })
    }

    fileReader.readAsArrayBuffer(file.slice(start, end))
  })
}

onmessage = async (e) => {
  const { file, CHUNK_SIZE, startIndex, endIndex } = e.data
  const promise = []
  for (let i = startIndex; i < endIndex; i++) {
    promise.push(createChunk(file, i, CHUNK_SIZE))
  }
  const chunks = await Promise.allSettled(promise)
  postMessage(chunks)
}
