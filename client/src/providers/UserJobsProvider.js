import axios from "axios"
import React, { useContext, useEffect, useState } from "react"


import { AuthContext } from "./AuthProvider"

export const UserJobsContext = React.createContext();

const UserJobsProvider = ({ children }) => {
    const { user } = useContext(AuthContext)
    const [userJobs, setUserJobs] = useState([])
    console.log(user)
    useEffect(() => {
        if (!user) {
            return
        }
        getUserJobs();
    }, [user]);



    const getUserJobs = async () => {
        let res = await axios.get(`/api/users/${user.id}/data`)

        setUserJobs(res.data)

    };

    const addUserJob = async (uj) => {
        try {
            debugger
            console.log(uj.job_id)
            console.log(uj.status)
            let res = await axios.post(`/api/users/${user.id}/userjobs`, uj)
            setUserJobs([res.data, ...userJobs])
        }
        catch (err) {
            alert('error occured in the add job to board')
        }
        console.log(setUserJobs)
    }

    // uj = an object{id: userjob_id status: string}
    const updateUserJobStatus = async (uj) => {
        try {
            console.log(uj)
            let res = await axios.put(`/api/users/${user.id}/userjobs/${uj.id} `, { ...uj });
            let updatedUserJob = userJobs.map((a) => a.id === res.data.id ? res.data : a);
            setUserJobs(updatedUserJob);
        } catch (err) {
            alert('error has occured in change and users job status');
        }
    }





    return (

        <UserJobsContext.Provider value={{ userJobs, addUserJob, updateUserJobStatus }}>
            {children}
        </UserJobsContext.Provider>
    )
};
export default UserJobsProvider;