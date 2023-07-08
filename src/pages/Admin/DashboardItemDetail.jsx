import React, { useState } from "react";

const DashboardItemDetail = ({ type, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const handleDeleteUser = (userId) => {
    // Delete the user with the given ID
  };

  const handleContactUser = (userId) => {
    // Contact the user with the given ID
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = type.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(type.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  return (
    <div className="admin-dashboard-detail">
      {type[0]?.name ? (
        <table className="table table-bordered table-hover">
          <thead className="bg-dark text-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user, i) => (
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="btn me-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleContactUser(user.id)}
                    className="btn"
                  >
                    Contact
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="table table-bordered table-hover">
          <thead className="bg-dark text-light">
            <tr>
              <th>Course</th>
              <th>Instructor</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((course, i) => (
              <tr key={i}>
                <td>{course.title}</td>
                <td>{course.instructorName}</td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(course._id)}
                    className="btn me-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleContactUser(course.id)}
                    className="btn"
                  >
                    View course
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
     <div className="flex between">
     <div className="pagination">
        <button
          className="btn"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="mx-3">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <button
        className="btn bg-dark"
        onClick={onClose}
      >
        Close table
      </button>
     </div>
     
    </div>
  );
};

export default DashboardItemDetail;