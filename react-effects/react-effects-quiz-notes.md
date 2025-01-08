# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?

When it is first added to the DOM and drawn on the page

- What is a React Effect?

An effect is a way to perform side effects in functional components. Side effects are actions that interact with the outside world.

- When should you use an Effect and when should you not use an Effect?

You should use an effect when you want to ‘step out’ of our code and synchronize with some external system

- When do Effects run?

They run at the end of a commit after the screen updates

- What function is used to declare an Effect?

useEffect Hook

- What are Effect dependencies and how do you declare them?

Effect dependencies refer to the variables or values that a useEffect hook relies on to determine when to re-run its side effect logic; they are declared as an array passed as the second argument to useEffect

- Why would you want to clean up from an Effect?

So it can stop or undo whatever the effect was doing

- How do you clean up from an Effect?

By using a cleanup function

- When does the cleanup function run?

When a component unmounts from the DOM

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
