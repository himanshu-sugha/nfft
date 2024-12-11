import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      {user ? (
        <div>
          <h3>Welcome, {user.displayName}</h3>
          <img src={user.photoURL} alt={user.displayName} style={{ borderRadius: "50%", width: "100px", height: "100px" }} />
          <p>Email: {user.email}</p>
          <button
            onClick={handleLogout}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#f44336",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Log Out
          </button>
        </div>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
};

export default UserProfile;
