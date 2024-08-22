import * as multer from 'multer';
import * as fs from 'fs';

const storage = multer.diskStorage({
  // 指定了保存的目录为 uploads
  destination: (req, file, cb) => {
    try {
      fs.mkdirSync('uploads');
    } catch {}

    cb(null, 'uploads');
  },
  // 文件名为时间戳-随机数-文件名的格式
  filename: (req, file, cb) => {
    const uniqueSuffix =
      Date.now() +
      '-' +
      Math.round(Math.random() * 1e9) +
      '-' +
      file.originalname;
    cb(null, uniqueSuffix);
  },
});

export { storage };
