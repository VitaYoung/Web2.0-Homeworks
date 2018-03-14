var http = require("http");
var fs = require("fs");
var querystring = require("querystring");
var url = require("url");

http.createServer(function(req, res) {
	if (req.method == "GET") {
		console.log("get");
		var pathname = url.parse(req.url).pathname;
		if (pathname.match(/.css/) != null) {
			fs.readFile("." + pathname, function(error, data) {
				if (error) {
					throw error;
				}
				res.writeHead(200, {"Content-Type": "text/css; charset = utf-8"});
				res.end(data);
			});
		} else if (pathname.match(/.js/) != null) {
			fs.readFile("." + pathname, function(error, data) {
				if (error) {
					throw error;
				}
				res.writeHead(200, {"Content-Type": "text/javascript; charset = utf-8"});
				res.end(data);
			});
		} else if (pathname.match(/.jpg/) != null) {
			fs.readFile("." + pathname, function(error, data) {
				if (error) {
					throw error;
				}
				res.writeHead(200, {"Content-Type": "image/jpeg"});
				res.end(data);
			});
		} else {
			var search = querystring.parse(url.parse(req.url).query);
			if (search.username != undefined) {
				fs.readFile("data.json", function(error, data) {
					if (error) {
						throw error;
					}
					if (data == undefined || data == null || data.length == 0) {
						data += "[]";
					}
					var users = JSON.parse(data);
					var user = find(users, search.username);
					if (user == null) {
						SigninPage(res);
					} else {
						DetailPage(user, res);
					}
				});
			} else {
				SigninPage(res);
			}
		}
	} else if (req.method == "POST") {
		console.log("POST");
		var data = "";
		req.addListener("data", function(chunk) {
			if (chunk != undefined) {
				data += chunk;
			}
		});
		req.addListener("end", function() {
			var newuser = querystring.parse(data);
			IsExist(res, newuser);
		});
	}
}).listen(8000);

function find(users, username) {
	for (var i = 0; i < users.length; i++) {
		if (users[i].username == username) {
			return users[i];
		}
	}
	return null;
}

function SigninPage(res, warning) {
	res.writeHead(200, {"Content-Type": "text/html; charset = utf-8"});
	fs.readFile("index.html", function(error, data) {
		if (error) {
			throw error;
		}
		if (warning == undefined || warning == null) {
			res.write(data);
		} else {
			var temp = data.toString();
			temp = temp.replace("Error", warning);
			res.write(temp);
		}
		res.end();
	});
}

function DetailPage(user, res) {
	res.writeHead(200, {"Content-Type": "text/html; charset = utf-8"});
	fs.readFile("upload.html", function(error, data) {
		if (error) {
			throw error;
		}
		var temp = data.toString();
		temp = temp.replace("Username", user.username);
		temp = temp.replace("number", user.idnumber);
		temp = temp.replace("Phone", user.phone);
		temp = temp.replace("Email", user.email);
		res.write(temp);
		res.end();
	});
}

function IsExist(res, newuser) {
	fs.readFile("data.json", function(error, data) {
		if (error) {
			throw error;
		}
		var users = JSON.parse(data);
		var warning = WarningTest(users, newuser);
		if (warning == null) {
			users.push(newuser);
			var newdata = JSON.stringify(users);
			fs.writeFileSync("data.json", newdata);
			DetailPage(newuser, res);
		} else {
			SigninPage(res, warning);
		}
	});
}

function WarningTest(users, newuser) {
	var result = "";
	var flag = 0;
	for (var i = 0; i < users.length; i++) {
		if (users[i].username == newuser.username) {
			result += " 用户名已存在 ";
			flag = 1;
		}
		if (users[i].idnumber == newuser.idnumber) {
			result += " 学号已存在 ";
			flag = 1;
		}
		if (users[i].phone == newuser.phone) {
			result += " 电话已存在 ";
			flag = 1;
		}
		if (users[i].email == newuser.email) {
			result += " 邮箱已存在 ";
			flag = 1;
		}
	}
	if (flag == 1) {
		return result;
	} else {
		return null;
	}
}