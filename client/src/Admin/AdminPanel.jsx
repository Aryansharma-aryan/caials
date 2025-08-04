import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const AdminPanel = () => {
  const [queries, setQueries] = useState([]);

  const fetchQueries = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        console.error("No admin token found. Redirecting to login.");
        // Optional: Redirect to login page
        window.location.href = "/login";
        return;
      }

      const res = await axios.get("http://localhost:5000/api/getConsultation", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setQueries(res.data);
    } catch (err) {
      console.error("Failed to fetch consultations:", err);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  const toggleCompletion = async (id, current) => {
    try {
      const token = localStorage.getItem("adminToken");

      await axios.put(
        `http://localhost:5000/api/getConsultation/${id}/complete`,
        { isCompleted: !current },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchQueries(); // Refresh the list after update
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-100 px-4 py-12">
      <div className="max-w-7xl mx-auto p-6 sm:p-10 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/40">
        <h2 className="text-4xl font-bold text-center text-indigo-800 mb-8 tracking-wide">
          Admin Panel - All Consultations
        </h2>

        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="w-full table-auto text-sm text-left text-gray-700 border border-gray-200">
            <thead className="bg-indigo-100 text-indigo-800 sticky top-0 z-10">
              <tr>
                <th className="px-3 py-3">#</th>
                <th className="px-3 py-3">Full Name</th>
                <th className="px-3 py-3">Phone</th>
                <th className="px-3 py-3">Visa</th>
                <th className="px-3 py-3">Country</th>
                <th className="px-3 py-3">Submitted</th>
                <th className="px-3 py-3">Status</th>
                <th className="px-3 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {queries.map((q, index) => (
                <tr
                  key={q._id}
                  className={`transition ${
                    q.isCompleted
                      ? "bg-green-50"
                      : index % 2 === 0
                      ? "bg-white"
                      : "bg-gray-50"
                  }`}
                >
                  <td className="px-3 py-2 font-semibold text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-3 py-2">{q.fullName}</td>
                  <td className="px-3 py-2">{q.phone}</td>
                  <td className="px-3 py-2">{q.visaType}</td>
                  <td className="px-3 py-2">{q.countryOfInterest}</td>
                  <td className="px-3 py-2 text-sm text-gray-500">
                    {moment(q.createdAt).format("DD MMM YYYY, h:mm A")}
                  </td>
                  <td className="px-3 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        q.isCompleted
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {q.isCompleted ? "Completed" : "Pending"}
                    </span>
                  </td>
                  <td className="px-3 py-2">
                    <button
                      onClick={() => toggleCompletion(q._id, q.isCompleted)}
                      className={`text-white text-xs px-3 py-1 rounded-lg transition ${
                        q.isCompleted
                          ? "bg-red-600 hover:bg-red-700"
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      {q.isCompleted ? "Undo" : "Mark Done"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
