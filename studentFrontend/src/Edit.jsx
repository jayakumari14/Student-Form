import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  //   const [student, setStudent] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/read/` + id)
      .then((res) => {
        console.log(res);
        setValues({
          ...values,
          name: res.data[0].student_name,
          age: res.data[0].student_age,
          grade: res.data[0].student_grade,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const [values, setValues] = useState({
    name: "",
    age: "",
    grade: "",
  });

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8081/edit/` + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center ">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={handleUpdate}>
            <h2> Update Student</h2>
            <div className="mb-2">
              <label htmlFor="">Student Name:</label>
              <input
                type="text"
                placeholder="enter name"
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                className="form-control"
                value={values.name}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="">Grade:</label>
              <input
                type="text"
                placeholder="enter grade"
                onChange={(e) =>
                  setValues({ ...values, grade: e.target.value })
                }
                className="form-control"
                value={values.grade}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="">Age:</label>
              <input
                type="number"
                placeholder="enter age"
                onChange={(e) => setValues({ ...values, age: e.target.value })}
                className="form-control"
                value={values.age}
              />
            </div>
            <Link to={"/"} className="btn btn-secondary border-0 mx-5">
              Back
            </Link>
            <button className="btn btn-success" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
