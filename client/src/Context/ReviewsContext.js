import React, { useState } from "react";

const ReviewsContext = React.createContext();

function ReviewsProvider({ children }){

    const [reviews, setReviews] = useState(null);
    const [userReviews, setUserReviews] = useState(null);

    return(
        <ReviewsContext.Provider value={{reviews, userReviews, setReviews, setUserReviews}}>
            {children}
        </ReviewsContext.Provider>
    );
}

export { ReviewsContext, ReviewsProvider};