import React, { useContext } from 'react'
import { UserJobsContext } from '../../providers/UserJobsProvider';

const JobsBoard = () => {
    const { userJobs } = useContext(UserJobsContext)

    return (
        <div>
            <h2>Jobs Board</h2>
            <hr />
            <h2>All of a User Jobs</h2>
            <hr />
            <p>{JSON.stringify(userJobs)}</p>
        </div>
    )
}
export default JobsBoard;