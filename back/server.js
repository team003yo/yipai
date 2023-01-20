const express = require("express");

const app = express();

require("dotenv").config();
const mysql2 = require("mysql2/promise");

let pool = mysql2.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    // 限制 pool 連線數的上限
    connectionLimit: 10,
});

// 允許跨源存取,預設是全部開放,也可以做部分限制，參考 npm cors 的文件
const cors = require("cors");
app.use(cors());
//
app.get("/", (req, res, next) => {
    console.log("這裡是首頁!", req.mfee31, req.dt);
    res.send("Hello Express 9");
});

app.get("/space", async (req, res, next) => {
    console.log("這裡是 /space");
    let [data] = await pool.query("SELECT * FROM space");
    res.json(data);
});
app.get('/user', (req, res, next) => {
    console.log('這裡是使用者頁面', req.dt);
    res.send('會員您好');
  });

app.get("/space/:spaceId", async (req, res, next) => {
    console.log("/space/:spaceId => ", req.params.spaceId);
    let [data] = await pool.query("SELECT * FROM space WHERE space_id=? ", [
        req.params.spaceId,
    ]);
    res.json(data);
});
app.use((req, res, next) => {
    console.log("出現404！");
    res.status(404).send("錯誤代號404，請輸入正確的網址");
});

app.listen(3001, () => {
    console.log("Server running at port 3001");
});
