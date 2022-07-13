import { useContext, useEffect, useState } from "react"
import { UserJobsContext } from "../../providers/UserJobsProvider"
import React from "react"

const Applied = () => {
    const [applied, setApplied] = useState([])
    const { userJobs } = useContext(UserJobsContext)
    useEffect(() => {
        getAppliedJobs();
    }, [userJobs]);

    const getAppliedJobs = () => {
        setApplied(userJobs.filter((p) => p.status === "applied"))
    };






    return (
        <div>
            <h2>Applied</h2>
            <p>{JSON.stringify(applied)}</p>
        </div>
    )
}
export default Applied;