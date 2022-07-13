import { useContext, useEffect, useState } from "react"
import { UserJobsContext } from "../../providers/UserJobsProvider"
import React from "react"
import UserJobCard from "./UserJobCard"

const Interview = () => {
    const [interview, setInterview] = useState([])
    const { userJobs } = useContext(UserJobsContext)
    useEffect(() => {
        getInterviewJobs();
    }, [userJobs]);

    const getInterviewJobs = () => {
        setInterview(userJobs.filter((p) => p.status === "interview"))
    };

    const renderJobs = () => {
        return interview.map(i => {
            return <UserJobCard key={i.id} {...i} />
        })
    }

    return (
        <div>
            {renderJobs()}
        </div>
    )
}
export default Interview;