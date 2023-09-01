import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import JoblyApi from "../api";
import Job from "./Job";

const Company = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null); // Initialize as null

  useEffect(() => {
    async function getOneCompany() {
      try {
        const foundCompany = await JoblyApi.getCompany(handle);
        setCompany(foundCompany);
      } catch (error) {
        console.error("Error fetching company data:", error);
        // You might want to handle errors here
      }
    }
    getOneCompany();
  }, [handle]); // Add 'handle' as a dependency

  if (company === null) {
    // Render a loading state or handle null company data
    return (
        <>
            <h1>Company</h1>
            <p>Loading...</p>
        </>
    )
  }

  return (
    <>
      <h1>Company</h1>
      <h3>{company.name}</h3>
      {company.jobs?.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </>
  );
};

export default Company;
