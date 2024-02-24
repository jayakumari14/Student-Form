import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const { id } = useParams();
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8081/read/` + id)
      .then((res) => {
        console.log(res);
        setStudent(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex vh-100 bg-secondary font-30px justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2 className="text-center">Student Details</h2>
        <h2>{student.student_id}</h2>
        <h2>{student.student_name}</h2>
        <h2>{student.student_grade}</h2>
        <h2>{student.student_age}</h2>
        <Link to={"/"} className="btn btn-secondary border-0 mx-5">
          Back
        </Link>
        <Link
          to={`/edit/${student.student_id}`}
          className="btn btn-warning border-0 mx-5"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default Read;
