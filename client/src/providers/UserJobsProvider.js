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
            let res = await axios.put(`/api/users/${user.id}/userjobs/${uj.id} `, { ...uj });
            let updatedUserJob = userJobs.map((a) => a.id === res.data.id ? res.data : a);
            setUserJobs(updatedUserJob);
        } catch (err) {
            alert('error has occured in change and users job status');
        }
    }

    const deleteUserJob = async (id) => {
        try {
            console.log(id)
            await axios.delete(`/api/users/${user.id}/userjobs/${id}`);
            setUserJobs(userJobs.filter((e) => e.id !== id))
        } catch (err) {
            alert('error has occured in the delete UserJob')
        }
    }



    return (

        <UserJobsContext.Provider value={{ userJobs, addUserJob, updateUserJobStatus, deleteUserJob }}>
            {children}
        </UserJobsContext.Provider>
    )
};
export default UserJobsProvider;