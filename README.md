[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/mikkvillem/test-react/tree/anagram)

# React test

## Goal

We need to track various counts and counters and act on count changing throughout our app.

User needs to be able to increment by 1 and by more than 1, decrement by one and more than one. User needs various effects to run when count changes.
We need a way to limit triggering events when count changes quickly.

## Task

-   Create a reusable hook useCount() that would export the a count state and relavant methods to mutate the state.

-   Use the hook to implement increment, decrement, incrementBy, incrementDebounced, onCountChange etc.
