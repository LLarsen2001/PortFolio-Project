import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    // if user is null, we are not logged in
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = async (user) => {
        // TODO axios call interact with DB
        try {
            let res = await axios.post("/api/auth/sign_in", user);
            setUser(res.data.data);
            navigate("/jobs");
        } catch (err) {
            alert("signin did not work");
            console.log(err);
        }

    };
    const logout = async () => {
        //Not working which user to logout?
        // we are going to need to pass the token to the signout
        // call
        try {
            await axios.delete("/api/auth/sign_out");
            setUser(null);
            navigate("/login");
        } catch (err) {
            //   alert('sign out did not work')
            // TODO fix
            setUser(null);
            console.log(err);
        }
    };



    const Signup = async (user) => {
        // TODO axios call interact with DB
        try {
            let res = await axios.post("/api/auth", user);
            console.log(res);
            setUser(res.data.data);
            navigate("/");
        } catch (err) {
            alert("Sign In did not work");
            console.log(err);
        }
    };

    const EditUser = async (u) => {
        try {
            let res = await axios.put(`/api/users/${user.id}`, u)
            console.log(res)
            setUser(res.data)
        } catch (err) {
            alert("user update didnt work")
        }
    }

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, Signup, EditUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
