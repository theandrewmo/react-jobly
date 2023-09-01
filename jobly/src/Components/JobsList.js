import React, {useState, useEffect} from "react";
import JoblyApi from "../api";
import Job from "./Job";

/** JobsList
 * 
 * props: 
 * 
 * state:
 * 
 */

const JobsList = () => {

    const [jobs, setJobs] = useState([]);
    
    useEffect(()=> {
        async function getJobs() {
            const allJobs = await JoblyApi.getAllJobs();
            setJobs(allJobs);
        }
        getJobs();
    }, [])

    return (
        <>
        Jobs List here
        {jobs.map(
            (job) => (<Job key={job.id} job={job}/>))}
        </>
    )
}

export default JobsList;