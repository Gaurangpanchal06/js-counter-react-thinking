# JavaScript Counter App

A simple counter app built using HTML, CSS, and JavaScript.
This project is part of my daily learning journey toward becoming a React Developer.


## Day 10 – Why React Exists

Today’s focus was understanding **why frameworks like React are needed**, not using them blindly.

As the application grew, updating the UI in multiple places became harder to manage.
Every user action required manual DOM updates, which increased complexity and chances of bugs.

To solve this, I refactored the code by:
- Treating `count` as a single source of truth (state)
- Centralizing all UI updates inside one function
- Updating the UI only in response to state changes

This mirrors React’s core philosophy:

**UI = f(state)**

This exercise helped me understand React conceptually before using it.

Next step: Rebuilding this app using React to compare approaches.
