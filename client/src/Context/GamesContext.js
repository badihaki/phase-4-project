import React, { useState } from "react";

const GamesContext = React.createContext();

function GamesProvider({ children }){
    
    const [games, setGames] = useState(null);

    return(
        <GamesContext.Provider value={{games, setGames}}>
            {children}
        </GamesContext.Provider>
    );
}

export { GamesContext, GamesProvider };