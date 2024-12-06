# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?

Special functions that allow components to have access to state and other react features. Hooks are used to add state into a component that will be persisted across component calls and used to schedule component re-renders

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

The function name must start with use followed by an uppercase letter
Hooks can only be called by React components and other hooks
All hooks in a component must always be called a the top level of a component, and in the same order

- What is the purpose of state in React?

It allows React to store any values that will need to persist between component re-renders, and lets React know when it needs to schedule a component re-render

- Why can't we just maintain state in a local variable?

Because local variables are only accessible within the function or block where they are defined

- What two actions happen when you call a `state setter` function?

Updates the variable and triggers React to render the component again

- When does the local `state variable` get updated with the new value?

When the component re-renders

## Notes

I think you could have a handle click that when clicked changes the description, caption, and image all at once

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
