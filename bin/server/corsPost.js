var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// 将post请求打印在控制台
// 第一个参数为post地址，第二个参数为端口号,将会把读取的JSON数据输出在控制台，并写入文件中，文件路径为log/data.json
function postServer(postUrl, port) {
	app.post(postUrl, (req, res) => {
		// 输出json格式
		console.log(req.body);
		// 写入文件
		fs.open('./log/data.json', 'a+', (err, fd) => {
			if (err) {
				return console.log(err);
			};
			fs.writeFile(fd, JSON.stringify(req.body), (err) => {
				if (err) {
					return console.log(err);
				}
			});
		});
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Credentials', 'true'); 
		res.end(JSON.stringify(req.body));
	})

	var server = app.listen(port, () => {
		console.log(server.address());
	})
}

exports.postServer = postServer;