// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApiV1AdminBaseController from '../../../app/controller/api/v1/admin/baseController';
import ExportApiV1AdminMeumController from '../../../app/controller/api/v1/admin/meumController';
import ExportApiV1AdminUserController from '../../../app/controller/api/v1/admin/userController';

declare module 'egg' {
  interface IController {
    api: {
      v1: {
        admin: {
          baseController: ExportApiV1AdminBaseController;
          meumController: ExportApiV1AdminMeumController;
          userController: ExportApiV1AdminUserController;
        }
      }
    }
  }
}
