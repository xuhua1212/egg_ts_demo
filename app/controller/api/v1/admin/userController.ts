import { Context } from 'egg';
import BaseController from './baseController';

export default class UserController extends BaseController {
  constructor(app:Context) {
    super('userService', app);
  }
}
// import { Controller } from 'egg';
// export default class UserController extends Controller {
//   /**
//    * 查询全部
//    * get
//    */
//   async index() {
//     const { ctx } = this;
//     const data = await ctx.service.user.list();
//     ctx.body = data;
//   }
//   /**
//    * 查询单条
//    * /:id
//    * get
//    */
//   async show() {
//     const { ctx } = this;
//     const data = await ctx.service.user.one(ctx.params.id); // '5ffd3b25b2bb733f20b861d3'
//     ctx.body = data;
//   }
//   /**
//    * 新增单条
//    * post
//    * 表单
//    */
//   async create() {
//     const { ctx } = this;
//     const result = await ctx.service.user.save(ctx.request.body);
//     ctx.body = {
//       code: 1,
//       msg: '新增成功',
//       data: result,
//     };
//   }
//   /**
//    * 修改数据
//    * put
//    */
//   async update() {
//     const { ctx } = this;
//     const result = await ctx.service.user.update(ctx.params.id, ctx.request.body);
//     ctx.body = {
//       code: 1,
//       msg: '修改成功',
//       data: result,
//     };
//   }
//   /**
//    * 删除单条
//    * /:id
//    * delete
//    */
//   async destroy() {
//     const { ctx } = this;
//     const result = await ctx.service.user.deleteOne(ctx.params.id);
//     ctx.body = {
//       code: 1,
//       msg: '删除成功',
//       data: result,
//     };
//   }
// }
