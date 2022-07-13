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



    return (

        <UserJobsContext.Provider value={{ userJobs }}>
            {children}
        </UserJobsContext.Provider>
    )
};
export default UserJobsProvider;