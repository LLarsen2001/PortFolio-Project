import { useContext, useEffect, useState } from "react"
import { UserJobsContext } from "../../providers/UserJobsProvider"
import React from "react"

const OfferRecieved = () => {
    const [offerRecieved, setOfferRecieved] = useState([])
    const { userJobs } = useContext(UserJobsContext)
    useEffect(() => {
        getOfferRecievedJobs();
    }, [userJobs]);

    const getOfferRecievedJobs = () => {
        setOfferRecieved(userJobs.filter((p) => p.status === "offer recieved"))
    };






    return (
        <div>
            <h2>Offer Recieved</h2>
            <p>{JSON.stringify(offerRecieved)}</p>
        </div>
    )
}
export default OfferRecieved;
