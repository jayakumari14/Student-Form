const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student",
});

// app.get("/", function (req, res) {
//   res.send("student application is ready");
//   //   return res.json("hello");
// });

app.get("/", (req, res) => {
  const sql = "SELECT * FROM student_info";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
  // res.send("student application is ready");
  //   return res.json("hello");
});

app.post("/student", function (req, res) {
  const sql =
    "INSERT INTO student_info(`student_name`,`student_grade`,`student_age`) VALUES (?)";
  const values = [req.body.name, req.body.grade, req.body.age];
  db.query(sql, [values], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
  //   return res.json("hello");
});

app.get("/read/:id", (req, res) => {
  const sql = "SELECT * FROM student_info WHERE student_id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.put("/edit/:id", (req, res) => {
  const sql =
    "UPDATE student_info SET `student_name`=?,`student_grade`=?, `student_age`=? WHERE student_id=? ";
  const id = req.params.id;
  db.query(
    sql,
    [req.body.name, req.body.grade, req.body.age, id],
    (err, result) => {
      if (err) return res.json({ Message: "Error inside server" });
      return res.json(result);
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM student_info WHERE student_id=? ";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.listen(8081, () => {
  console.log("listening");
});
