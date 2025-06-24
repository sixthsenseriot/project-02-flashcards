# Web Development Project 2 - *CompTIA A+ Core 1 Flashcards*

Submitted by: **Khanh Nguyen**

**CompTIA A+ Core 1 Flashcards** is a simple and responsive web application designed to help users study for the CompTIA A+ (220-1102) certification exam. Users can flip through cards to view questions and answers, and navigate by using space and arrow keys, or by manually clicking. It's a focused, no-frills tool built for efficient test prep.

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:
- [X] **The app displays the title of the card set, a short description, and the total number of cards**
  - [X] Title of card set is displayed 
  - [X] A short description of the card set is displayed 
  - [X] A list of card pairs is created
  - [X] The total number of cards in the set is displayed 
  - [X] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [X] **A single card at a time is displayed**
  - [X] Only one half of the information pair is displayed at a time
- [X] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [X] Clicking on a card flips it over, showing the back with corresponding information 
  - [X] Clicking on a flipped card again flips it back, showing the front
- [X] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:
- [ ] Cards contain images in addition to or in place of text
  - [ ] Some or all cards have images in place of or in addition to text
- [ ] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:
* [X] Flashcards can be navigated via space and arrow keys (left and right for previous and next, and space to flip flashcard)
* [X] Randomize and unrandomize can be toggled for flashcards

## Video Walkthrough
Here's a walkthrough of implemented required features:

![Website Walkthrough](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDR2OWFreTlyOHh2bmx5Ym91eTQ0NnBoZTJ3dTd1NHAzMnkzNTIwdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U6E0VcQn1mqGKfYUs1/giphy.gif)

🔗 [Link for Better Viewing of Walkthrough](https://imgur.com/gallery/codepath-project-2-flashcards-kn-5aW8ODx)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [LICEcap v1.32](https://www.cockos.com/licecap/)
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes
One of the biggest challenges in building this app was understanding the role of each `useState` implementation and how state changes affect the user experience. Managing the current flashcard index, tracking whether a card is flipped, and resetting the flipped state when navigating between cards required careful state coordination.

Another key hurdle was implementing the flip animation itself. Ensuring that the card flips smoothly and consistently, while also resetting to the front side when switching cards, involved setting up CSS 3D transforms and integrating them cleanly with the `setIsFlipped` logic.

## License
    Copyright 2025 Khanh Nguyen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
