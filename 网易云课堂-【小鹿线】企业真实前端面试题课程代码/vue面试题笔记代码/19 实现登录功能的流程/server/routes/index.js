var express = require('express');
var router = express.Router();
var conn = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/login",function(req,res,next){

	let data = req.body;
	let uName = data.uName;
	let uPwd = data.uPwd;
	//前端 给 后端  的数据
	let sql = 'select * from uAdmin where uName=? and uPwd=?';
	conn.query(sql,[uName,uPwd],function(error,results,fields){
		if(error){
			res.json({
				code:0,
				message:"请求失败"
			})
		}else{
			if(results.length != 0){
				res.json({
					code:1,
					message:"登录成功"
				})
			}else{
				res.json({
					code:0,
					message:'用户名或密码不对'
				})
			}
		}

	})

})


module.exports = router;
