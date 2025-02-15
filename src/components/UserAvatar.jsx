//Kosei
import { useState, useEffect } from "react";
import placeholder from "../assets/img/user-placeholder.jpg";
import { useNavigate } from "react-router-dom";

export default function UserAvatar({ uid }) {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        image: placeholder,
        name: "User's Name",
        // title: "User's Title"
    });
    const url = `https://railfinder-app-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`;

    useEffect(() => {
        async function getUser() {
            const response = await fetch(url);
            const data = await response.json();
            setUser(data);
        }
        getUser();
    }, [url]);

    function handleClick() {
        navigate(`/${uid}`);
    }

    return (
        <div className="avatar" onClick={handleClick}>
            <img className="avatar-image" src={user.image || placeholder} alt={user.id} />
            <span>
                <h3>@{user.name}</h3>
                {/* <p>{user.title}</p> */}
            </span>
        </div>
    );
}
