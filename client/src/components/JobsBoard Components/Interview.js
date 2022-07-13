import { useContext, useEffect, useState } from "react"
import { UserJobsContext } from "../../providers/UserJobsProvider"
import React from "react"

const Interview = () => {
    const [interview, setInterview] = useState([])
    const { userJobs } = useContext(UserJobsContext)
    useEffect(() => {
        getInterviewJobs();
    }, [userJobs]);

    const getInterviewJobs = () => {
        setInterview(userJobs.filter((p) => p.status === "interview"))
    };






    return (
        <div>
            <h2>Interview</h2>
            <p>{JSON.stringify(interview)}</p>
        </div>
    )
}
export default Interview;