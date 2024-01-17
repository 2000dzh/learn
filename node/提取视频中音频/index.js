const ffmpeg = require("fluent-ffmpeg");

// 参考
// https://juejin.cn/post/7309329004497043508?searchId=20231221205605B56ADC71FDC6B81066B1
// 首先电脑要安装 ffmpeg 因为这个包也是借助 ffmpeg 实现的

function convertMp4ToMp3 (inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .output(outputPath)
      .audioCodec("libmp3lame") // 使用 MP3 编解码器
      .on("end", () => {
        console.log("转换完成");
        resolve();
      })
      .on("error", (err) => {
        console.error("转换错误:", err);
        reject(err);
      })
      .run();
  });
}

const inputVideoPath = "./source/ceshi.mp4"; // MP4 文件路径
const outputAudioPath = "./output/天梯.mp3"; // 输出 MP3 文件路径

convertMp4ToMp3(inputVideoPath, outputAudioPath)
  .then(() => console.log("MP4 转 MP3 成功"))
  .catch((err) => console.error("MP4 转 MP3 失败:", err));
