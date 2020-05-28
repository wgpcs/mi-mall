let baseURL;
switch (process.env.NODE_ENV){
    case 'development':
        baseURL = '/api'
        break;
    case 'prod':
        baseURL = '/'
        break;
    default:
        baseURL = '/'
        break;
}

export default {
    baseURL
}