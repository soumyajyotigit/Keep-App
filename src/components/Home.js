import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../firebase/Firebase";


const Home = () => {
    const [authenticated, setAuthenticated] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
            }
        });
    }, []); // Empty dependency array to ensure the effect runs only once after initial render

    if (authenticated === null) {
        return <p>Loading...</p>; // Add a loading state while authentication is being checked
    } else if (!authenticated) {
        window.location.href = "/login"; // Redirect if not authenticated
        return null; // This is just to satisfy React's requirement of returning something
    } else {
        return (
            <div>
                <p>Welcome to your Home</p>
            </div>
        );
    }
};

export default Home;