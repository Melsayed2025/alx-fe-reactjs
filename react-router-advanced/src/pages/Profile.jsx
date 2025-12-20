import { Outlet,link } from "react-router-dom";

export default function Profile() {

    return (
        <div>
            <h1>Profile Page</h1>
            <nav>   
                <link to= "/profile/details" style={{ marginRight: '10px' }}>Profile Details</link>
                <link to= "/profile/settings">Profile Settings</link>
            </nav>
            <Outlet />
        </div>
    );
}