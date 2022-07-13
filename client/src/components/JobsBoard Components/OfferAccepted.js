import { useContext, useEffect, useState } from "react"
import { UserJobsContext } from "../../providers/UserJobsProvider"
import React from "react"

const OfferAccepted = () => {
    const [offerAppecpted, setOfferAccepted] = useState([])
    const { userJobs } = useContext(UserJobsContext)
    useEffect(() => {
        getOfferAcceptedJobs();
    }, [userJobs]);

    const getOfferAcceptedJobs = () => {
        setOfferAccepted(userJobs.filter((p) => p.status === "interview"))
    };


    return (
        <div>
            <h2>Offer Accepted</h2>
            <p>{JSON.stringify(offerAppecpted)}</p>
        </div>
    )
}
export default OfferAccepted;