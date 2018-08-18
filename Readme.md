# Chinese
## local-web-test
![local-web-test](https://img.shields.io/badge/local--web--test-1.0.0-green.svg)
一个本地的基于node.js的测试服务器。
支持快速的启动web容器服务。
支持快速的发送get，post请求，并记录在/log（log 文件夹需要事先建立，在运行的根目录）文件夹下，并在控制台输出
支持cors跨域请求。

### Install
```
npm install --save local-web-test
```

### Usage

#### 创建本地静态服务器
第一个参数为静态文件地址，第二个参数为端口号
eg;
```
var test = require('local-web-test');
test.static('./', 3344);
```

#### 创建get请求
get请求打印在控制台,并写入文件./log/data.js
第一个参数为url，第二个参数为端口号
eg;
```
var test = require('local-web-test');
test.get('./', 3344);
```

#### 创建post请求
将post请求打印
第一个参数为post地址，第二个参数为端口号,将会把读取的JSON数据输出在控制台，并写入文件中，文件路径为 ./log/data.json
eg
```
var test = require('local-web-test');
test.post('./', 3344);
```

#### Cors
##### 创建get Cors请求
get请求打印在控制台,并写入文件./log/data.js
第一个参数为get地址，第二个参数为端口号,将会把读取的JSON数据输出在控制台，并写入文件中，文件路径为log/data.json, 第三个参数为cors域名,默认支持发送cookice
eg:
```
var test = require('local-web-test');
test.getCors('./', 3344, '*');
```
#### 创建post请求
将post请求打印
第一个参数为post地址，第二个参数为端口号,将会把读取的JSON数据输出在控制台，并写入文件中，文件路径为 ./log/data.json，第三个参数为cors域名
eg
```
var test = require('local-web-test');
test.post('./', 3344, '*');
```

## 更新记录
2018年08月17日 1.0.0 
2018年08月17日 1.0.1	增加英文文档（虽然是机翻的，并没有什么用处╮(╯▽╰)╭）
2018年08月19日 1.0.2	更改路径错误 添加测试用例
2018年08月19日 1.0.3 更改错别字
## 依赖
该包依赖于body-parser cookie-parser express multer

## 鸣谢
没有人╮(╯▽╰)╭

# English
## local-web-test
![local-web-test](https://img.shields.io/badge/local--web--test-1.0.0-green.svg)
a local node.js based test server
Support for fast startup web container services
Support fast send get, post request, and record in the /log (log folder needs to be established in advance, in the root directory of the run) folder, and output in the console
Support cors cross-domain request
## Install
```
npm install --save local-web-test
```
### Usage
#### Create a local static server
The first parameter is the static file address, and the second parameter is the port number.
eg;
```
var test = require('local-web-test');
test.static('./', 3344);
```

#### Create a get request
The get request is printed on the console and written to the file ./log/data.js
The first parameter is url and the second parameter is port number.

eg;
```
var test = require('local-web-test');
test.get('./', 3344);
```

#### Create a post request
Print post request
The first parameter is the post address, and the second parameter is the port number. The read JSON data will be output to the console and written to the file. The file path is ./log/data.json
eg
```
var test = require('local-web-test');
test.post('./', 3344);
```

#### Cors
##### Create a get Cors request
The get request is printed on the console and written to the file ./log/data.js
The first parameter is the get address, and the second parameter is the port number. The read JSON data will be output to the console and written to the file. The file path is log/data.json, and the third parameter is cors. Domain name, default support for sending cookice
eg:
```
var test = require('local-web-test');
test.getCors('./', 3344, '*');
```
#### Create a post request
Print post request
The first parameter is the post address, and the second parameter is the port number. The read JSON data will be output to the console and written to the file. The file path is ./log/data.json, the third parameter. Cors domain name
eg
```
var test = require('local-web-test');
test.post('./', 3344, '*');
```

## update record
August 17, 2018 1.0.0
August 17, 2018 1.0.1 Adding English documents (although it is machine-turned, it has no use (╮)╭)
August 19, 2018 1.0.2 Change path error Add test case
August 19, 2018 1.0.3 Change typos

## rely
This package depends on the body-parser cookie-parser express multer

## Acknowledgement
No one is ╮(╯▽╰)╭