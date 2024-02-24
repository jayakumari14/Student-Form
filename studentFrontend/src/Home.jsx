import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8081/delete/" + id)
      .then(() => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-secondary font-30px justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h1>Student Form</h1>
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success">
            Create +
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Grade</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, i) => {
              return (
                <tr key={i} className="me-4">
                  <td>{val.student_id}</td>
                  <td>{val.student_name}</td>
                  <td>{val.student_grade}</td>
                  <td>{val.student_age}</td>
                  <td>
                    <Link
                      to={`/read/${val.student_id}`}
                      className="border-0 px-2 mx-2 bg-primary text-white "
                    >
                      Read
                    </Link>
                    <Link
                      to={`/edit/${val.student_id}`}
                      className="border-0 px-2 mx-2 bg-success text-white "
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(val.student_id)}
                      className="border-0 px-2 mx-2 bg-danger text-white "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
