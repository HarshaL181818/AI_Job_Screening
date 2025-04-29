import React, { useState } from "react";
import axios from "axios";

const JDList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAnalyzeAndStore = async () => {
    if (!title || !description) {
      alert("Please fill both title and description.");
      return;
    }

    try {
      const res = await axios.post("/api/jd/analyze", {
        jd_text: description,
      });

      const parsedJD = res.data.parsed;

      await axios.post("/api/jd/store", {
        raw_text: description,
        parsed_json: parsedJD,
        title: title,
      });

      alert("JD analyzed and stored!");
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error("Error analyzing JD:", err);
      alert("Analysis failed.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Enter New Job Description</h2>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md"
      />
      <textarea
        placeholder="Job Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={10}
        className="w-full p-2 mb-4 border rounded-md"
      />
      <button
        onClick={handleAnalyzeAndStore}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Analyze & Store
      </button>
    </div>
  );
};

export default JDList;
