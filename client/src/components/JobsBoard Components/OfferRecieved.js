import { useContext, useEffect, useState } from "react"
import { UserJobsContext } from "../../providers/UserJobsProvider"
import React from "react"
import UserJobCard from "./UserJobCard"

const OfferRecieved = () => {
    const [offerRecieved, setOfferRecieved] = useState([])
    const { userJobs } = useContext(UserJobsContext)
    useEffect(() => {
        getOfferRecievedJobs();
    }, [userJobs]);

    const getOfferRecievedJobs = () => {
        setOfferRecieved(userJobs.filter((p) => p.status === "offer recieved"))
    };


    const renderJobs = () => {
        return offerRecieved.map(or => {
            return <UserJobCard key={or.id} {...or} />
        })
    }

    return (
        <div>
            {renderJobs()}
        </div>
    )
}
export default OfferRecieved;
