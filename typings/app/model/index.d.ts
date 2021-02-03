// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMeum from '../../../app/model/meum';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Meum: ReturnType<typeof ExportMeum>;
    User: ReturnType<typeof ExportUser>;
  }
}
