import { useContext, useEffect, useState } from "react"
import { UserJobsContext } from "../../providers/UserJobsProvider"
import React from "react"

const WishList = () => {
    const [wishList, setWishList] = useState([])
    const { userJobs } = useContext(UserJobsContext)
    useEffect(() => {
        getWishListJobs();
    }, [userJobs]);

    const getWishListJobs = () => {
        setWishList(userJobs.filter((p) => p.status === "wishlist"))
    };






    return (
        <div>
            <h2>wishlist</h2>
            <p>{JSON.stringify(wishList)}</p>
        </div>
    )
}
export default WishList;