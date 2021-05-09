// set base url for API based on MODE
let BASE_URL;
switch (process.env.MODE) {
  case 'production':
    BASE_URL = 'https://insert-production-url-here';
    break;
  case 'staging':
    BASE_URL = 'http://insert-stage-url-here';
    break;
  default:
    BASE_URL = 'http://insert-development-url-here';
    break;
}

export default {
  BASE_URL,
};
