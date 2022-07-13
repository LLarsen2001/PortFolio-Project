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
            <div>
                <h3>Wish List</h3>
                <WishList />
            </div>
            <div>
                <h3>Applied</h3>
                <Applied />
            </div>
            <div>
                <h3>Interview</h3>
                <Interview />
            </div>
            <div>
                <h3>OfferRecieved</h3>
                <OfferRecieved />
            </div>
            <div>
                <h3>Offer Accepted</h3>
                <OfferAccepted />
            </div>

            <h2>All of a User Jobs</h2>
            <hr />
            <p>{JSON.stringify(userJobs)}</p>

        </div>
    )
}

export default JobsBoard;