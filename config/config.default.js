/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {
    cluster: {
      listen: {
        path: '',
        port: 8081,
        hostname: '192.168.10.7',
      },
    },
  });

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1590147439827_4396';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://localhost:27017/admin',
    options: {},
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['*'], // 允许访问接口的白名单
  };
  config.cors = {
    origin: '*', // 允许跨域请求的地址
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS', // 允许跨域请求的方式
  };

  config.uploadDir = 'app/public/imgs';

  config.jwt = {
    secret: 'bigbang',
  };
  return {
    ...config,
    ...userConfig,
  };
};
