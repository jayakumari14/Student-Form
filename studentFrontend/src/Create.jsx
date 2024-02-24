import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [values, setValues] = useState({
    name: "",
    age: "",
    grade: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/student", values)
      .then((res) => console.log(res));
    navigate("/");
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center ">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2> Add Student</h2>
          <div className="mb-2">
            <label htmlFor="">Student Name:</label>
            <input
              type="text"
              placeholder="enter name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Grade:</label>
            <input
              type="text"
              placeholder="enter grade"
              onChange={(e) => setValues({ ...values, grade: e.target.value })}
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Age:</label>
            <input
              type="number"
              placeholder="enter age"
              onChange={(e) => setValues({ ...values, age: e.target.value })}
              className="form-control"
            />
          </div>

          <button className="btn btn-success" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
