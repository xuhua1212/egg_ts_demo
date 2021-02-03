import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const meumSchema = new Schema({
    name: { type: String, required: true },
    title: { type: String },
    createTime: { type: Date },
    updateTime: { type: Date },
  });
  return mongoose.model('meum', meumSchema, 'meum');
};
