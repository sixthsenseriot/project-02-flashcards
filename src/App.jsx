import React, { useState, useEffect } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";
import { flashcards } from "./data/flashcards";

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % flashcards.length);
        setIsFlipped(false);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + flashcards.length) % flashcards.length
        );
        setIsFlipped(false);
    };

    const handleFlip = () => {
        setIsFlipped((prev) => !prev);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") {
                handleNext();
            } else if (e.key === "ArrowLeft") {
                handlePrev();
            } else if (e.key === " " || e.code === "Space") {
                e.preventDefault();
                handleFlip();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="App">
            <h1>CompTIA A+ (220-1102)</h1>
            <h3>
                Flashcards to you help prep for your next upcoming Core 1 exam!
            </h3>
            <p className="flashcard-length">
                {currentIndex + 1} / {flashcards.length}
            </p>
            <Flashcard
                frontText={flashcards[currentIndex].frontText}
                backText={flashcards[currentIndex].backText}
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
            />
            <div className="nav-buttons">
                <button className="prev-button" onClick={handlePrev}>
                    ◀
                </button>
                <button className="next-button" onClick={handleNext}>
                    ▶
                </button>
            </div>
        </div>
    );
};

export default App;
