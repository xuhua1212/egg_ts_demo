import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const userSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true, default: 'Xu Hua' },
    sort: { type: Number, required: true },
    content: { type: String, required: true },
    state: { type: Number, required: true },
    type: { type: Number, required: true },
    createTime: { type: Date },
    updateTime: { type: Date },
  });
  return mongoose.model('userinfo', userSchema, 'blog');
};
