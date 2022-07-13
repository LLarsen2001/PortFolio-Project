import { useContext, useEffect, useState } from "react"
import { UserJobsContext } from "../../providers/UserJobsProvider"
import React from "react"
import UserJobCard from "./UserJobCard"

const OfferAccepted = () => {
    const [offerAppecpted, setOfferAccepted] = useState([])
    const { userJobs } = useContext(UserJobsContext)
    useEffect(() => {
        getOfferAcceptedJobs();
    }, [userJobs]);

    const getOfferAcceptedJobs = () => {
        setOfferAccepted(userJobs.filter((p) => p.status === "interview"))
    };

    const renderJobs = () => {
        return offerAppecpted.map(oa => {
            return <UserJobCard key={oa.id} {...oa} />
        })
    }

    return (
        <div>
            {renderJobs()}
        </div>
    )
}
export default OfferAccepted;