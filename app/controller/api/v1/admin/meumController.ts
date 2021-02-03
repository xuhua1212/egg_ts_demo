import { Context } from 'egg';
import BaseController from './baseController';

export default class MeumController extends BaseController {
  constructor(app:Context) {
    super('meumService', app);
  }
}
