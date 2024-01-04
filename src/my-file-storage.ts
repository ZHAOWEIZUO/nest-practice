/*
 * @Author: zwz
 * @Date: 2024-01-01 16:44:20
 * @LastEditors: zwz
 * @LastEditTime: 2024-01-01 16:48:10
 * @Description: 上传文件
 */

import * as multer from 'multer';
import * as fs from 'fs';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    try {
      fs.mkdirSync('uploads');
    } catch (e) {
      cb(null, 'uploads');
    }
  },
  filename: function (req, file, cb) {
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
