import React, {useState, useEffect} from "react";
import JoblyApi from "../api";
import Job from "./Job";
import { useUserContext } from "../UserContext";
import { useNavigate } from "react-router";

/** JobsList
 * 
 * props: 
 * 
 * state:
 * 
 */

const JobsList = () => {

    const [jobs, setJobs] = useState([]);

    const { currentUser } = useUserContext();

    const navigate = useNavigate();

    useEffect(() => {
      // Check if currentUser is null and navigate to the homepage if it is
      if (currentUser === null) {
        navigate("/");
      }
    }, [currentUser, navigate]);
    
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