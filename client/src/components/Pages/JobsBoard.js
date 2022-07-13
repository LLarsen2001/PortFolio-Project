import React, { useContext } from 'react'
import { UserJobsContext } from '../../providers/UserJobsProvider';
import Applied from '../JobsBoard Components/Applied';
import Interview from '../JobsBoard Components/Interview';
import OfferAccepted from '../JobsBoard Components/OfferAccepted';
import OfferRecieved from '../JobsBoard Components/OfferRecieved';
import WishList from '../JobsBoard Components/WishList';

const JobsBoard = () => {
    const { userJobs } = useContext(UserJobsContext)

    return (
        <div>
            <h2>Jobs Board</h2>
            <hr />

            <WishList />
            <hr />
            <Applied />
            <hr />
            <Interview />
            <hr />
            <OfferRecieved />
            <hr />
            <OfferAccepted />
            <hr />
            <h2>All of a User Jobs</h2>
            <hr />
            <p>{JSON.stringify(userJobs)}</p>

        </div>
    )
}
export default JobsBoard;