import axios from "axios"
import React, { useContext, useEffect, useState } from "react"


import { AuthContext } from "./AuthProvider"

export const FormDataContext = React.createContext();

const FormDataProvider = ({ children }) => {
    const { user } = useContext(AuthContext)
    const [jobs, setJobs] = useState([])
    const [job, setJob] = useState([])
    useEffect(() => {
        getJobs();
    }, [])


    const getJobs = async () => {
        let res = await axios.get(`/api/jobs/all`)
        setJobs(res.data)
    };

    const setJobData = (id) => {
        console.log(jobs)
        console.log(jobs.filter(j => j.id === id))
        setJob(jobs.filter(j => j.id === id))

    }

    return (

        <FormDataContext.Provider value={{ job, setJobData }}>
            {children}
        </FormDataContext.Provider>
    )
};
export default FormDataProvider;