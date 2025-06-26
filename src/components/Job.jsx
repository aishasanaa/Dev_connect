// // import React from "react";
// import "./Job.css";
// import Navbar from "./Navbar";
// import axios from "axios";

// const Job = () => {
//   const jobList = [
//     {
//       title: "Frontend Developer",
//       company: "Tech Innovators Inc.",
//       location: "Bangalore, India",
//       type: "Full-time",
//     },
//     {
//       title: "Backend Engineer",
//       company: "DataWorks",
//       location: "Hyderabad, India",
//       type: "Remote",
//     },
//     {
//       title: "React Developer",
//       company: "Webify",
//       location: "Mumbai, India",
//       type: "Contract",
//     },
//     {
//       title: "Full Stack Developer",
//       company: "CodeBrew",
//       location: "Chennai, India",
//       type: "Internship",
//     },
//   ];

//   const handleApply = async (job) => {
//     const token = localStorage.getItem("token");

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/apply-job",
//         { job },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       alert("✅ Applied successfully!");
//     } catch (err) {
//       console.error("❌ Error applying to job:", err);
//       alert("Error applying to job. See console for details.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="job-page">
//         <h2>Explore Job Opportunities</h2>
//         <div className="job-list">
//           {jobList.map((job, index) => (
//             <div className="job-card" key={index}>
//               <h3>{job.title}</h3>
//               <p><strong>Company:</strong> {job.company}</p>
//               <p><strong>Location:</strong> {job.location}</p>
//               <p><strong>Type:</strong> {job.type}</p>
//               <button className="apply-btn" onClick={() => handleApply(job)}>Apply</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Job;

import React from "react";
import "./Job.css";
import Navbar from "./Navbar";
import axios from "axios";

const Job = () => {
  const jobList = [
    {
      title: "Frontend Developer",
      company: "Tech Innovators Inc.",
      location: "Bangalore, India",
      type: "Full-time",
    },
    {
      title: "Backend Engineer",
      company: "DataWorks",
      location: "Hyderabad, India",
      type: "Remote",
    },
    {
      title: "React Developer",
      company: "Webify",
      location: "Mumbai, India",
      type: "Contract",
    },
    {
      title: "Full Stack Developer",
      company: "CodeBrew",
      location: "Chennai, India",
      type: "Internship",
    },
  ];

  const handleApply = (job) => {
  const token = localStorage.getItem("token");
  axios
    .post(
      "http://localhost:5000/api/auth/apply-job",
      { job },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(() => {
      alert("✅ Job applied successfully!");
    })
    .catch((err) => {
      console.error("❌ Failed to apply", err);
      alert("❌ Failed to apply.");
    });
};

  return (
    <>
      <Navbar />
      <div className="job-page">
        <h2>Explore Job Opportunities</h2>
        <div className="job-list">
          {jobList.map((job, index) => (
            <div className="job-card" key={index}>
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Type:</strong> {job.type}</p>
              <button className="apply-btn" onClick={() => handleApply(job)}>Apply</button>

            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Job;

