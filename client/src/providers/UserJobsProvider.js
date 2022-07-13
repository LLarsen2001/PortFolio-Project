import axios from "axios"
import React, { useContext, useEffect, useState } from "react"

import { AuthContext } from "./AuthProvider"

export const UserJobsContext = React.createContext();

const UserJobsProvider = ({ children }) => {
    const [userJobs, setUserJobs] = useState([])
    const { user } = useContext(AuthContext)
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
            let res = await axios.post('/api/users/:user_id/userjobs', uj)
            setUserJobs([res.data, ...uj])
        }
        catch (err) {
            alert('error occured in the add job to board')
        }
    }

    const updateUserJobStatus = async (uj) => {
        try {
            let res = await axios.put(`/api/users/${user.id}/userjobs/${user.userjob_id} `, uj);
            let updatedUserJob = uj.map((a) => a.id === res.data.id ? res.data : a);
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