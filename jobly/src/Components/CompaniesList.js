import React, { useState, useEffect } from "react";
import JoblyApi from '../api';

/** CompaniesList
 * 
 * props: 
 * 
 * state:
 * 
 */

const CompaniesList = () => {

    const [companies, setCompanies] = useState([]);
    console.log('hi')

    useEffect(()=> {
        async function getCompanies() {
            const companies = await JoblyApi.getAllCompanies();
            setCompanies(companies);
            console.log(companies);
        }
        getCompanies();
    }, [])



    return (
        <>

        <p>Search Box - Filter companies using backend here</p>

        Companies List here
        {companies.map(company => (<p>{company.name}</p>))}

        </>
    )
}

export default CompaniesList;