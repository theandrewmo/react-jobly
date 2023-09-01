import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import JoblyApi from "../api";
import Job from "./Job";

/** Company
 * 
 * props: 
 * 
 * state:  
 * 
 */

const Company = () => {

    const {handle} = useParams();
    const [company, setCompany] = useState([]);

    useEffect(()=> {
        async function getOneCompany() {
            const foundCompany = await JoblyApi.getCompany(handle);
            setCompany(foundCompany);
        }
        getOneCompany();
    }, [])

    return (
        <>
        {company.name}
        {company.jobs?.map(
            (job) => (<Job key={job.id} job={job}></Job>))
        }
        </>
    )
}

export default Company;