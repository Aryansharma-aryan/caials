import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const AdminPanel = () => {
  const [queries, setQueries] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchQueries = async (pageNumber = 1) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("adminToken");

      if (!token) {
        console.error("No admin token found. Redirecting to login.");
        window.location.href = "/login";
        return;
      }

      const res = await axios.get(
        `https://caials-ebon.onrender.com/api/getConsultation/paginated/list?page=${pageNumber}&limit=10`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setQueries(res.data.consultations || []);
      setTotalPages(res.data.totalPages || 1);
      setPage(res.data.currentPage || 1);
    } catch (err) {
      console.error("Failed to fetch consultations:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueries(page);
  }, [page]);

  const toggleCompletion = async (id, current) => {
    try {
      const token = localStorage.getItem("adminToken");
      await axios.put(
        `https://caials-ebon.onrender.com/api/getConsultation/${id}/complete`,
        { isCompleted: !current },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchQueries(page);
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const handlePrevious = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 px-4 py-12">
      <div className="max-w-7xl mx-auto p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl border border-white/40 transition-all hover:shadow-indigo-200">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-indigo-800 tracking-wide">
            👋 Hi Rosy,
          </h2>
          <p className="text-lg text-indigo-600 mt-2 font-medium">
            Here are all the recent consultation queries
          </p>
          <div className="mt-3 w-24 mx-auto h-1 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full"></div>
        </div>

        {loading ? (
          <div className="text-center text-indigo-600 text-lg animate-pulse">
            Loading consultations...
          </div>
        ) : queries.length === 0 ? (
          <div className="text-center text-gray-600 italic">
            No consultations found.
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
            <table className="w-full table-auto text-sm text-left text-gray-700">
              <thead className="bg-indigo-100 text-indigo-900 sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Full Name</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Visa Type</th>
                  <th className="px-4 py-3">Country</th>
                  <th className="px-4 py-3">Submitted</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {queries.map((q, index) => (
                  <tr
                    key={q._id}
                    className={`transition-all ${
                      q.isCompleted
                        ? "bg-green-50 hover:bg-green-100"
                        : index % 2 === 0
                        ? "bg-white hover:bg-indigo-50"
                        : "bg-gray-50 hover:bg-indigo-50"
                    }`}
                  >
                    <td className="px-4 py-3 font-semibold text-gray-500">
                      {(page - 1) * 10 + (index + 1)}
                    </td>
                    <td className="px-4 py-3">{q.fullName}</td>
                    <td className="px-4 py-3">{q.phone}</td>
                    <td className="px-4 py-3">{q.visaType}</td>
                    <td className="px-4 py-3">{q.countryOfInterest}</td>
                    <td className="px-4 py-3 text-gray-500 text-sm">
                      {moment(q.createdAt).format("DD MMM YYYY, h:mm A")}
                    </td>
                    <td className="px-4 py-3">
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
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => toggleCompletion(q._id, q.isCompleted)}
                        className={`text-white text-xs px-4 py-2 rounded-full transition-all duration-300 ${
                          q.isCompleted
                            ? "bg-red-600 hover:bg-red-700 shadow-md"
                            : "bg-green-600 hover:bg-green-700 shadow-md"
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
        )}

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={handlePrevious}
            disabled={page === 1}
            className={`px-5 py-2 rounded-full font-semibold text-sm shadow-lg transition-all ${
              page === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105"
            }`}
          >
            ⬅ Previous
          </button>

          <span className="text-indigo-700 font-semibold text-sm">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className={`px-5 py-2 rounded-full font-semibold text-sm shadow-lg transition-all ${
              page === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105"
            }`}
          >
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
