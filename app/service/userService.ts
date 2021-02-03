import BaseService from './baseService';
import { Context } from 'egg';
export default class UserService extends BaseService {
  constructor(app:Context) {
    super('User', app);
  }
}

// import { Service } from 'egg';
// export default class UserService extends Service {
//   /**
//    * 根据条件查询全部(带分页)
//    * @param query 查询条件
//    * @param pagesize 当前页数
//    * @param pagelimit 每页条数
//    * @return 总条数,总页数,查询内容
//    */
//   async list(query: object, pagesize = 1, pagelimit = 10) {
//     const data = await this.app.model.User.find(query)
//       .limit(pagelimit)
//       .skip((pagesize - 1) * pagelimit)
//       .sort({ _id: -1 });
//     const totalCount: number = await this.app.model.User.count(query);
//     return {
//       totalCount,
//       pages: Math.ceil(totalCount / pagelimit),
//       data,
//     };
//   }
//
//   /**
//    * 根据id查询一条记录
//    * @param id id
//    * @return 内容
//    */
//   async one(id: string) {
//     const data = await this.app.model.User.findById(id);
//     return data;
//   }
//   /**
//    * 根据id修改内容
//    * @param id id
//    * @param data 要修改的数据
//    * @return
//    */
//   async update(id: string, data: object) {
//     const result = await this.app.model.User.findByIdAndUpdate(id, data, {
//       upsert: true,
//     });
//     return result;
//   }
//   /**
//    * 新增内容
//    * @param data 内容
//    * @return result
//    */
//   async save(data: object) {
//     const { User } = this.app.model;
//     const result = await User.create(data);
//     return result;
//   }
//   /**
//    * 新增多条
//    * @param models string对象数组
//    * @return data
//    */
//   async savaMany(models:string[]) {
//     const { User } = this.app.model;
//     const data = await User.insertMany(models);
//     return data;
//   }
//   /**
//    * 根据id删除一条记录
//    * @param id id
//    * @return result
//    */
//   async deleteOne(id: string) {
//     const { User } = this.app.model;
//     const data = await User.findByIdAndRemove(id);
//     return data;
//   }
//   /**
//    * 删除多条
//    * @param ids ids
//    * @return result
//    */
//   async deleteMany(ids: string[]) {
//     const { User } = this.app.model;
//     const data = await User.remove({ $in: ids });
//     return data;
//   }
// }
