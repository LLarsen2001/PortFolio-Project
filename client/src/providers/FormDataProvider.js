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
        setJob(jobs.filter(j => j.id === id))

    }

    const deleteJob = async (id) => {
        try {
            debugger
            console.log(id)
            await axios.delete(`/api/users/${user.id}/jobs/${id}`);
            setJobs(jobs.filter((e) => e.id !== id))
        } catch (err) {
            alert('error has occured in the delete a users jobs ')
        }
    }

    return (

        <FormDataContext.Provider value={{ job, setJobData, deleteJob }}>
            {children}
        </FormDataContext.Provider>
    )
};
export default FormDataProvider;