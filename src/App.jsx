import React, { useState } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";

const flashcards = [
    {
        frontText:
            "Several users of a shared printer complain that the printer is printing on both sides of a sheet of paper when it should only print on one side.\nWhat setting does a technician change?\n\nA. Orientation\nB. Badging\nC. Quality\nD. Duplex",
        backText: "D. Duplex",
    },
    {
        frontText:
            "The projector in the conference room is experiencing intermittent shutdowns. The technician begins troubleshooting by checking all the connector cables.\nWhat are the next troubleshooting steps for the technician? (Select the best two choices.)\n\nA. Check that the vents are free from dust.\nB. Check that the bulb is not burned out.\nC. Check that the LED array is situated properly.\nD. Check that the fan is working.",
        backText:
            "A. Check that the vents are free from dust.\nD. Check that the fan is working.",
    },
    {
        frontText:
            "A universal asynchronous receiver transmitter (UART) port was traditionally a physical serial port in a legacy system.\nIn a modern mobile device, how can a UART be utilized? (Select all that apply.)\n\nA. Wi-Fi\nB. Bluetooth\nC.USB\nD.Ethernet",
        backText: "B.Bluetooth\nC.USB",
    },
];

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % flashcards.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + flashcards.length) % flashcards.length
        );
    };

    return (
        <div className="App">
            <h1>CompTIA A+ (220-1102)</h1>
            <h3>Flashcards to help prep for your next upcoming Core 1 exam!</h3>
            <p className="flashcard-length">
                {currentIndex + 1} / {flashcards.length}
            </p>
            <Flashcard
                frontText={flashcards[currentIndex].frontText}
                backText={flashcards[currentIndex].backText}
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
