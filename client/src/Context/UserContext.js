import React, { useState } from "react";

const UserContext = React.createContext();
const [user, setUser] = useState(null);

function UserProvider({ children }){
    return(
        <UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };