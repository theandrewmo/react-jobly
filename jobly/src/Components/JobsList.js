import React, {useState, useEffect} from "react";
import JoblyApi from "../api";
import Job from "./Job";
import { useUserContext } from "../UserContext";
import { useNavigate } from "react-router";

/** JobsList
 * 
 * props: apply
 * 
 * state:
 * 
 */

const JobsList = ( {apply} ) => {

    const [jobs, setJobs] = useState([]);

    const { currentUser } = useUserContext();

    const navigate = useNavigate();

    if (currentUser === null) navigate("/");
   
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
            (job) => (<Job key={job.id} job={job} apply={apply}/>))}
        </>
    )
}

export default JobsList;