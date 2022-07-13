import { useContext, useEffect, useState } from "react"
import { UserJobsContext } from "../../providers/UserJobsProvider"
import React from "react"
import UserJobCard from "./UserJobCard"

const WishList = () => {
    const [wishList, setWishList] = useState([])
    const { userJobs } = useContext(UserJobsContext)
    useEffect(() => {
        getWishListJobs();
    }, [userJobs]);

    const getWishListJobs = () => {
        setWishList(userJobs.filter((p) => p.status === "wishlist"))
    };


    const renderJobs = () => {
        return wishList.map(wl => {
            return <UserJobCard key={wl.id} {...wl} />
        })
    }

    return (
        <div>
            {renderJobs()}
        </div>
    )
}
export default WishList;