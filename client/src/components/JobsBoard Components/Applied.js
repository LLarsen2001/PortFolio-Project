import { useContext, useEffect, useState } from "react"
import { UserJobsContext } from "../../providers/UserJobsProvider"
import React from "react"
import UserJobCard from "./UserJobCard"

const Applied = () => {
    const [applied, setApplied] = useState([])
    const { userJobs } = useContext(UserJobsContext)
    useEffect(() => {
        getAppliedJobs();
    }, [userJobs]);

    const getAppliedJobs = () => {
        setApplied(userJobs.filter((p) => p.status === "applied"))
    };

    const renderJobs = () => {
        return applied.map(a => {
            return <UserJobCard key={a.id} {...a} />
        })
    }

    return (
        <div>
            {renderJobs()}
        </div>
    )
}
export default Applied;