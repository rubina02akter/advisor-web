import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

export default function GetUser() {
  const [userData, setUserData] = useState(null);
  const { user, setAdmin } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:4000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        console.log(data);
        setAdmin(data?.role); // Only set after data is available
      })
      .catch((err) => console.error("Error fetching user:", err));
  }, [user?.email, setAdmin]);

  return null; // No UI needed
}
