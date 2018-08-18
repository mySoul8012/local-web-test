var express = require('express');
var fs = require('fs');
var app = express();

// 创建http静态服务器
// 第一个参数为静态文件地址，第二个参数为端口号
function static(file, port) {
	app.use(express.static(file));
	var server = app.listen(port, ()=> {
		console.log(server.address());
	});
};
exports.static = static;