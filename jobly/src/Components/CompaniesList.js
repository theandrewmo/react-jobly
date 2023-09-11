import React, { useState, useEffect } from "react";
import JoblyApi from '../api';
import { Link } from "react-router-dom";
import { useUserContext } from "../UserContext";
import { useNavigate } from "react-router";
import { Table, Container } from "reactstrap";

/** CompaniesList
 * 
 * props:
 * 
 * state: companies, inputData
 * 
 */

const CompaniesList = () => {

    const [companies, setCompanies] = useState([]);
    const [inputData, setInputData] = useState('');

    const { currentUser } = useUserContext();

    const navigate = useNavigate();

    if (!currentUser)  navigate("/");

    useEffect(()=> {
        async function getCompanies() {
            const companies = await JoblyApi.getAllCompanies();
            if (companies) setCompanies(companies);
            else console.error('no companies found')
        }
        getCompanies();
    }, [])

    const handleChange = (e) => {
        const {value} = e.target
        setInputData(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let queryParams = {};

        if (inputData.trim() !== "") {
          queryParams = { name: inputData };
        }
        try {
            const matchedCompanies = await JoblyApi.getAllCompanies(queryParams);
            setCompanies(matchedCompanies);
        } catch(e) {
            console.error(e);
        }
        setInputData('');
    }

    if (!companies) return (
        <>
        <p>Loading ...</p>
        </>
    )

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <label htmlFor="company">Search for Company:</label>
                <input type='text' name='company' onChange={handleChange} value={inputData}></input>
                <button>Submit</button>
            </form>
            <h1> Companies List </h1>
            <div style={{ maxHeight: "600px", overflowY: "scroll" }}>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Company Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map(company => (
                            <tr key={company.handle}>
                                <td>
                                    <Link to={`/companies/${company.handle}`}>
                                        {company.name}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}

export default CompaniesList;