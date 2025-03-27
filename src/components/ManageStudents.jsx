import React, { useState, useEffect } from 'react';
import '../Styles/ManageStudents.css';

const ManageStudent = () => {
  const [students, setStudents] = useState([]);

  // Fetch student data from the endpoint
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:8081/student/user'); // Replace with actual API endpoint
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="manage-student-container">
      <h2 className="title">Manage Students</h2>
      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Grade Level</th>
              <th>Attendance %</th>
              {/* <th>Counseling</th> */}
              <th>Drop Risk Score</th>
              <th>Residential Address</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id}>
                  <td data-label="ID">{student.id}</td>
                  <td data-label="Name">{student.name}</td>
                  <td data-label="Email">{student.email}</td>
                  <td data-label="Phone">{student.phone}</td>
                  <td data-label="Grade Level">{student.gradelevel}</td>
                  <td data-label="Attendance %">{student.attendancepercentage}</td>
                  {/* <td data-label="Counseling">{student.counselling}</td> */}
                  <td data-label="Drop Risk Score">{student.droupriskscore}</td>
                  <td data-label="Residential Address">{student.residentialaddress}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9">No students found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageStudent;
