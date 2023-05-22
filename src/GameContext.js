import React, { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [images, setImages] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const contextvalue = {
        images,
        setImages,
        score,
        setScore,
        bestScore,
        setBestScore,
    }

    return (
        <GameContext.Provider value={contextvalue}>
            {children}
        </GameContext.Provider>
    )
}