import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const UserAccount = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>User Account Settings: you must be logged to see this</h1>
            <p>Hello {user.email}</p>
        </div>
    )
}

export default UserAccount;