import BaseService from './baseService';
import { Context } from 'egg';
export default class MeumService extends BaseService {
  constructor(app:Context) {
    super('Meum', app);
  }
}
