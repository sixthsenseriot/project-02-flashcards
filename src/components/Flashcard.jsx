import React from "react";
import "./Flashcard.css";

const Flashcard = ({ frontText, backText, isFlipped, setIsFlipped }) => {
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="Flashcard">
            <div className="flashcard-container" onClick={handleClick}>
                <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
                    <div className="front">
                        <div className="content">{frontText}</div>
                    </div>
                    <div className="back">
                        <div className="content">{backText}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flashcard;
