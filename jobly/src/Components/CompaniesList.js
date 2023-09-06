import React, { useState, useEffect } from "react";
import JoblyApi from '../api';
import { Link } from "react-router-dom";
import { useUserContext } from "../UserContext";
import { useNavigate } from "react-router";

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

    useEffect(() => {
      // Check if currentUser is null and navigate to the homepage if it is
      if (currentUser === null) {
        navigate("/");
      }
    }, [currentUser, navigate]);

    useEffect(()=> {
        async function getCompanies() {
            const companies = await JoblyApi.getAllCompanies();
            setCompanies(companies);
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
        const matchedCompanies = await JoblyApi.getAllCompanies(queryParams);
        setCompanies(matchedCompanies);
        setInputData('');
    }

    if (!companies) return (
        <>
        <p>Loading ...</p>
        </>
    )

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="company">Search for Company:</label>
            <input type='text' name='company' onChange={handleChange} value={inputData}></input>
            <button>Submit</button>
        </form>
        <h1> Companies List </h1>
        {companies.map(company => (<Link key={company.handle} to={`/companies/${company.handle}`}><p>{company.name}</p></Link>))}
        </>
    )
}

export default CompaniesList;