import React from "react"
import { useUserContext } from "../UserContext"
import JoblyApi from "../api";
import { Table } from "reactstrap";

/** Job
 * 
 * props: job, apply
 * 
 * state: 
 * 
 */

const Job = ( {job, apply} ) => {

    const { currentUser, setCurrentUser } = useUserContext();

    const handleApplyClick = async (id) => {
        if (!currentUser) {
            console.error('No user set')
            return
        }
        const applied = await apply(currentUser.username, id);
        if (applied === 'success') {
            alert('application submitted')
            const user = await JoblyApi.getUserDetails(currentUser.username)
            setCurrentUser(user);
        }
        else if (applied.error === 'duplicate key value violates unique constraint "applications_pkey"') alert('cannot reapply to same job')
    }

    return (
        <>
            <tr>
                <td>{job.title}</td>
                <td>{job.companyName}</td>
                <td>{job.salary ? `$${job.salary}` : "not provided"}</td>
                <td>
                    <button
                    onClick={() => handleApplyClick(job.id)}
                    disabled={currentUser.applications.includes(job.id) ? true : false}
                    >
                    Apply
                    </button>
                </td>
            </tr>
        </>
    )
}

export default Job;