import React, {useState, useEffect} from "react";
import JoblyApi from "../api";
import Job from "./Job";
import { useUserContext } from "../UserContext";
import { useNavigate } from "react-router";
import { Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';


/** JobsList
 * 
 * props: apply
 * 
 * state:
 * 
 */

const JobsList = ( {apply} ) => {

    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

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

    const totalPages = Math.ceil(jobs.length / itemsPerPage);
    const handlePageClick = (page) => {
        setCurrentPage(page);
      };    
    const indexOfLastJob = currentPage * itemsPerPage;
    const indexOfFirstJob = indexOfLastJob - itemsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    return (
        <>
          <h2>Available Jobs</h2>
          <Table className='job-area'>
            <thead>
                <tr>
                    <th>
                        Job Title
                    </th>
                    <th>
                        Company Name
                    </th>
                    <th>
                        Salary (USD)
                    </th>
                    <th>
                        
                    </th>
                </tr> 
            </thead>
            <tbody>
                {currentJobs.map((job) => (
                    <Job key={job.id} job={job} apply={apply} />
                ))}
            </tbody>
           
          </Table>

          {/* Pagination controls */}
          <Pagination>
            <PaginationItem>
              <PaginationLink
                previous
                onClick={() => handlePageClick(currentPage - 1)}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i} active={i + 1 === currentPage}>
                <PaginationLink onClick={() => handlePageClick(i + 1)}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationLink
                next
                onClick={() => handlePageClick(currentPage + 1)}
              />
            </PaginationItem>
          </Pagination>
        </>
      );
}

export default JobsList;