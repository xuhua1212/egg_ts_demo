import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.resources(
    'user_admin',
    '/api/v1/admin/user',
    controller.api.v1.admin.userController,
  );
  router.resources(
    'user_meum',
    '/api/v1/admin/meum',
    controller.api.v1.admin.meumController,
  );
};
