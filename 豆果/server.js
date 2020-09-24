const express = require('express') // 使用commonjs全局引入express
const app = express()
const port = 8080 // 设置端口号
const mysql = require('mysql')

app.all("/*", function(req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next()
})
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'douguo'
})

connection.connect()
app.listen(port, () => {
    console.log('server has started')
})
app.get('/box', (req, res) => {
    connection.query('select * from recipe_jx limit 8', function(err, result) {
        const obj = {
            data: result
        }
        res.json(obj)
    })
});
//笔记
app.get('/node', (req, res) => {
    connection.query('select * from note limit 4', function(err, result) {
        const obj = {
            data: result
        }
        res.json(obj)
    })
});
//大家都在搜
app.get('/search', (req, res) => {
    connection.query('select * from search', function(err, result) {
        const obj = {
            data: result
        }
        res.json(obj)
    })
});
//热门食材
app.get('/hot', (req, res) => {
    connection.query('select * from hot', function(err, result) {
        const obj = {
            data: result
        }
        res.json(obj)
    })
});
//豆果达人
app.get('/talent', (req, res) => {
    connection.query('select * from dgdr where id<6', function(err, result) {
        const obj = {
            data: result
        }
        res.json(obj)
    })
});
// 添加关注
app.get('/follow1', (req, res) => {
    connection.query("update dgdr set concern='已关注' where id=" + req.query.id)
});
// 删除关注
app.get('/follow2', (req, res) => {
    connection.query("update dgdr set concern='+关注' where id=" + req.query.id)
});

//   查询关注
app.get('/follow', (req, res) => {
    connection.query("select * from dgdr where concern='已关注'", function(err, result) {
        const obj = {
            data: result
        }
        res.json(obj)
    })
});
//精彩主题文章
// app.get('/article', (req, res) => {
//   connection.query('select * from article', function (err, result) {
//       const obj={
//           data: result

//       }
//       res.json(obj)
//   })
// });
//精选商城
app.get('/mall', (req, res) => {
    connection.query('select * from mall limit 0,3', function(err, result) {
        const obj = {
            data: result
        }
        res.json(obj)
    })
});
//大家的作品
app.get('/works', (req, res) => {
    connection.query('select * from works ', function(err, result) {
        const obj = {
            data: result
        }
        res.json(obj)
    })
});
//商城
app.get('/shopp', (req, res) => {
    connection.query('select * from mall  limit 0,' + req.query.id + '', function(err, result) {
        const obj = {
            data: result
        }
        res.json(obj)
    })
});
app.get('/recipe_jx', (req, res) => {
    connection.query('select * from recipe_jx limit ' + (req.query.page - 1) * 24 + ',24', function(err, result) {
        const obj = {
            data: result
        }
        res.json(obj)
    })
});
app.get('/recipe_zx', (req, res) => {
    connection.query('select * from recipe_zx limit ' + (req.query.page - 1) * 24 + ',24', function(err, result) {
        const obj = {
            data: result
        }
        res.json(obj)
    })
});
app.get('/recipe_fl', (req, res) => {
    connection.query('SELECT * FROM recipe_fl WHERE typeof_id=' + req.query.typeof_id, function(err, result) {
        const obj = {
            data: result
        }
        res.json(obj);
        console.log(result)
    })
});
app.get('/recipe_sc', (req, res) => {
    connection.query('SELECT * FROM recipe_sc WHERE typeof_id=' + req.query.typeof_id, function(err, result) {
        const obj = {
            data: result
        }
        res.json(obj);
        console.log(result)
    })
})
app.get('/recipe_cd', (req, res) => {
    connection.query('select * from ' + req.query.tab + ' limit ' + req.query.page + ',12', function(err, result) {
        const obj = {
            data: result
        }
        res.json(obj)
    })
});
app.get('/diet_article', (req, res) => {
    // console.log(req.query.page*req.query.limit);
    connection.query('select * from diet_article limit ' + req.query.page * req.query.limit + ',' + req.query.limit, function(err, data) {
        const obj = {
            data
        }
        res.json(obj)
    })
})
app.get('/diet_theme', (req, res) => {
    connection.query('select * from diet_theme limit' + req.query.total / req.query.limit, function(err, data) {
        const obj = {
            data
        }
        res.json(obj)
    })
})

app.get('/diet_theme1', (req, res) => {
    connection.query('select * from diet_theme', function(err, data) {
        const obj = {
            data
        }
        res.json(obj)
    })
})
const bodyParser = require("body-parser");

// 解析以 application/json 和 application/x-www-form-urlencoded 提交的数据
var jsonQuery = bodyParser.json();
var urlQuery = bodyParser.urlencoded({ extended: false });

app.post('/login', urlQuery, (req, res) => { //注册登陆接口
    if (req.body.status == 'in') { //注册
        var phones;
        var names;
        if (req.body.phone != undefined) {
            connection.query('select * from userinfo where phone=' + req.body.phone, function(err, data) {
                const obj = {
                    status: 200,
                    data
                }
                if (obj.data != '') {
                    if (req.body.phone == obj.data[0].phone) {
                        res.json('账号已注册')
                    }
                } else {
                    phones = '';
                }
            })
        }
        if (req.body.name != undefined) {
            connection.query(`select * from userinfo where username='${req.body.name}'`, function(err, data) {
                if (err) throw err
                const obj = {
                    status: 200,
                    data
                }
                if (obj.data != '') {
                    if (req.body.name == obj.data[0].username) {
                        res.json('昵称已存在')
                    }
                } else {
                    names = '';
                }
            })
        }
        if (req.body.phone != phones && req.body.name != names) {
            connection.query("insert into userinfo (username,password,phone) values ('" + req.body.name + "','" + req.body.psw + "','" + req.body.phone + "');", function(err, data) {
                if (err) {
                    res.json('失败')
                } else {
                    res.json('注册成功')
                }
            })
        }

    }
    if (req.body.status == 'up') { //登陆
        if (req.body.name != undefined) {
            connection.query('select * from userinfo where phone=' + req.body.name, function(err, data) {
                const obj = {
                    status: 200,
                    data
                }
                if (obj.data != '') {
                    if (req.body.name == obj.data[0].phone && req.body.psw == obj.data[0].password)
                        res.json('登陆成功')
                } else {
                    res.json('账号不存在')
                }
            })
        }
    }
})


app.get('/anime', (req, res) => { //动漫接口
    if (req.query.id == undefined) {
        connection.query('select * from anime', function(err, data) {
            if (err) throw err
            const obj = {
                status: 200,
                data
            }
            res.json(obj);
        })
    } else {
        connection.query('select title,img from anime where id=' + req.query.id, function(err, data) {
            if (err) throw err
            const obj = {
                status: 200,
                data
            }
            res.json(obj);
        })
    }
})
app.get('/note', (req, res) => { //笔记接口
    if (req.query.tab != undefined) {
        connection.query('select * from note limit ' + req.query.tab + ',50', function(err, data) {
            if (err) throw err
            const obj = {
                status: 200,
                data
            }
            res.json(obj);
        })
    } else if (req.query.flag != undefined) {
        connection.query('select love,flag from note where id=' + req.query.flag, function(err, data) {
            if (err) throw err
            const obj = {
                status: 200,
                data
            }
            res.json(obj);
        })
    } else if (req.query.detail_id != undefined) {
        connection.query('select * from note where id=' + req.query.detail_id, function(err, data) {
            if (err) throw err
            const obj = {
                status: 200,
                data
            }
            res.json(obj);
        })
    } else {
        connection.query('update note set love=' + req.query.i + ',flag=' + req.query.k + ' where id=' + req.query.id, function(err, data) {
            if (err) throw err
            const obj = {
                status: 200,
                data: '成功'
            }
            res.json(obj);
        })
    }
})
app.get('/index', (req, res) => {
        connection.query('select * from douguo_step where id<5', function(err, result) {
            const obj = {
                status: 200,
                data: result
            }
            res.json(obj)
        })
    })
    // 紫芋发糕的其他做法
app.get('/else', (req, res) => {
        connection.query('select * from douguo_else where id<7', function(err, data) {
            const obj = {
                status: 200,
                data
            }
            res.json(obj)
        })
    })
    // 紫芋发糕的相关推荐
app.get('/related', (req, res) => {
        connection.query('select * from douguo_else where id>6 and id<13', function(err, data) {
            const obj = {
                status: 200,
                data
            }
            res.json(obj)
        })
    })
    // 评论
app.get('/comment', (req, res) => {
        connection.query('select * from douguo_comment where id<11', function(err, data) {
            const obj = {
                status: 200,
                data
            }
            res.json(obj)
        })
    })
    // 糖醋香菇条的做法步骤
app.get('/step2', (req, res) => {
        connection.query('select * from douguo_step where id>4 and id<16', function(err, data) {
            const obj = {
                status: 200,
                data
            }
            res.json(obj)
        })
    })
    // 糖醋香菇条的相关推荐
app.get('/related2', (req, res) => {
        connection.query('select * from douguo_else where id>12 and id<19', function(err, data) {
            const obj = {
                status: 200,
                data
            }
            res.json(obj)
        })
    })



//所有title数据
app.get('/', (req, res) => {
    connection.query("select * from a", function(err, result) {
        console.log(111, result)
        const obj = {
            data: result
        }
        res.json(obj)
    })
});


//所有畜类数据
app.get('/data0', (req, res) => {
    connection.query("select content from a where title=='畜类'", function(err, result) {
        console.log(111, result)
        const obj = {
            data: result
        }
        res.json(obj)
    })
});



    // 菜谱菜单单击
app.get('/desc2', (req, res) => {
    connection.query('select * from recipe_menu_desc', function(err, result) {
        console.log(111, result)
        const obj = {
            // status: 200,
            // text: '连接成功',
            data: result
        }
        res.json(obj)
    })
})
app.get('/daren', (req, res) => {
    var num = 0;
    if (req.query.page == 1) {
        num = 0
    } else if (req.query.page == 2) {
        num = 60
    } else if (req.query.page == 3) {
        num = 120
    } else if (req.query.page == 4) {
        num = 180
    }
    connection.query(req.query.tab != "'全部'" ? `select * from dgdr where cate_kind=${req.query.tab} limit ${num},60;` : `select * from dgdr limit ${num},60;`, function(err, result) {
        const obj = {
            status: 200,
            data: result
        }
        console.log(req.query.tab);

        res.json(obj)
    })
});