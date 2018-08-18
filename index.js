/*
 *	时间；2018年08月17日
 *	说明；这是一个入口文件，该文件是包local-web-test的入口文件
 *	Copyright(c) 2018年 - 至今 ming
 */

// 本地http静态服务器
var static = require('./bin/server/static.js').static;
exports.static = static;

// get请求打印在控制台,并写入文件./log/data.js
var getServer = require('./bin/server/get.js').getServer;
exports.get = getServer;

// post请求打印在控制台，并写入文件./log/data.js
var postServer = require('./bin/server/post.js').postServer;
exports.post = postServer;

// 下面是cors
// get请求打印在控制台,并写入文件./log/data.js
var getServerCors = require('./bin/server/corsGet.js').getServer;
exports.getCor = getServerCors;

// post请求打印在控制台，并写入文件./log/data.js
var postServerCors = require('./bin/server/corsPost.js').postServer;
exports.post = postServerCors;



