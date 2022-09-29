var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.render('users', { title: 'pongs' });
  res.send('respond with a resource11');
  // 如果同时存在，按顺序执行一个，不会显示第二个页面
  // 测试发现。前端请求获得了一个html页面，没有收到response
})
router.get('/dept', function(req, res, next) {
    // res.render('users', { title: 'pongs' });
    res.json({
        msg: '获取部门信息',
        status: true,
        data:[
            {
                "id": 8,
                "name": "上海铁路局",
                "parentId": 1,
                "deptType": 2,
                "children": [
                    {
                        "id": 48,
                        "name": "合肥机务段",
                        "parentId": 8,
                        "deptType": 3
                    },
                    {
                        "id": 49,
                        "name": "南京东机务段",
                        "parentId": 8,
                        "deptType": 3
                    },
                    {
                        "id": 50,
                        "name": "上海机务段",
                        "parentId": 8,
                        "deptType": 3
                    },
                    {
                        "id": 51,
                        "name": "杭州机务段",
                        "parentId": 8,
                        "deptType": 3
                    },
                    {
                        "id": 52,
                        "name": "徐州机务段",
                        "parentId": 8,
                        "deptType": 3
                    },
                    {
                        "id": 126,
                        "name": "柳州机务段",
                        "parentId": 8,
                        "deptType": 3
                    }
                ]
            }
        ]
  })})



module.exports = router;

