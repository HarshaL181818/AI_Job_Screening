
// === JDCard.jsx ===
import React, { useState } from "react";
import axios from "axios";

const JDCard = ({ jd }) => {
  const [parsed, setParsed] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeJD = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/jd/analyze", {
        jd_text: jd.description || jd.text || jd.JD,
      });
      setParsed(res.data.parsed);
    } catch (err) {
      console.error("JD analysis failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-2xl shadow-md bg-white">
      <h3 className="font-semibold text-lg mb-2">
        {jd.title || jd["Job Title"] || "Untitled JD"}
        </h3>

        <p className="text-sm text-gray-700 mb-4 line-clamp-4">
        {jd["Job Description"]}
        </p>


      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
        onClick={analyzeJD}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze JD"}
      </button>

      {parsed && (
        <div className="mt-4 text-sm bg-gray-100 p-3 rounded-xl">
          <p><strong>Title:</strong> {parsed.title}</p>
          <p><strong>Experience:</strong> {parsed.experience}</p>
          <p><strong>Education:</strong> {parsed.education}</p>
          <p><strong>Skills:</strong> {parsed.skills.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default JDCard;
