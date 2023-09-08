import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import JoblyApi from "../api";
import Job from "./Job";

const Company = ( {apply} ) => {

  const { handle } = useParams();
  const [company, setCompany] = useState(null); // Initialize as null

  useEffect(() => {
    async function getOneCompany() {
      try {
        const foundCompany = await JoblyApi.getCompany(handle);
        setCompany(foundCompany);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    }
    getOneCompany();
  }, [handle]); 

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
        <Job key={job.id} job={job} apply={apply}/>
      ))}
    </>
  );
};

export default Company;
