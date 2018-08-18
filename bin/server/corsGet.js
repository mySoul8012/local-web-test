var express = require('express');
var fs = require('fs');
var app = express();

// 将get请求打印在控制台
// 第一个参数为get地址，第二个参数为端口号,将会把读取的JSON数据输出在控制台，并写入文件中，文件路径为log/data.json, 第三个参数为cors域名,默认支持发送cookice
function getServer(getUrl, port,cors) {
	app.get(getUrl, (req, res) => {
		// 输出json格式
		console.log(req.query);
		// 写入文件
		fs.open('./log/data.json', 'a+', (err, fd) => {
			if (err) {
				return console.log(err);
			};
			fs.writeFile(fd, JSON.stringify(req.query), (err) => {
				if (err) {
					return console.log(err);
				}
			});
		});
		res.header('Access-Control-Allow-Origin', cors + "");
		res.header('Access-Control-Allow-Credentials', 'true'); 
		res.end(JSON.stringify(req.query));
	})

	var server = app.listen(port, () => {
		console.log(server.address());
	})
}

exports.getServer = getServer;