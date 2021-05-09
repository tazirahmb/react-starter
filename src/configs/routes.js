const routes = {
  HOME: () => '/',
  PROFILE: (name = ':name') => `/${name}`,
};

export default routes;
