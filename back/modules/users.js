// 引用的套件們
// 驗證用
const { body, validationResult } = require('express-validator');
// 授權用
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);
const multer = require('multer');
const path = require('path');


const express = require("express");
const Usersrouter = express();
Usersrouter.use(express.json());

Usersrouter.use((res,req,next)=>{
  console.log('這裡是使用者的中間件');
  next();
});

// TODO:登入
Usersrouter.get('/login', (req, res) => {
    res.render('login')
  })
  // app.post(
  //   '/user',
  //   body('email').custom(value => {
  //     return User.findUserByEmail(value).then(user => {
  //       // 檢查信箱是否存在
  //       if (user) {
  //         return Promise.reject('E-mail already in use');
  //       }
  //     });
  //   }),
  //   (req, res) => {
      
  //   },
  // );
  Usersrouter.use(
    expressSession({
      // 告訴 express-session session 要存哪裡
      store: new FileStore({
        path: path.join(__dirname, '..', 'sessions'),
      }),
      secret: process.env.SESSION_SECRET,
      // true: 即使 session 沒有改變也重新儲存一次
      // 取決於你用的 storage 是有時效性的，可能會需要不停地刷新時效
      resave: false,
      // true: 還沒有正式初始化的 session 也真的存起來
      saveUninitialized: false,
    })
  );

  // TODO:註冊
  Usersrouter.get('/register', (req, res) => {
    res.render('register')
  })
    // app.post(
  //   '/user',
  //   // 用戶名稱要是電子信箱
  //   body('username').isEmail(),
  //   // 密碼要至少五個字
  //   body('password').isLength({ min: 5 }),
  //   (req, res) => {
  //     // 把錯誤訊息寫在裡面
  //     const errors = validationResult(req);
  //     if (!errors.isEmpty()) {
  //       return res.status(400).json({ errors: errors.array() });
  //     }
  
  //     User.create({
  //       username: req.body.username,
  //       password: req.body.password,
  //     }).then(user => res.json(user));
  //   },
  // );
  // TODO:登出
  


  module.exports = Usersrouter;