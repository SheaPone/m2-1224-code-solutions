# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?

The fetch function

- What two things need to be done to properly handle HTTP request errors? Why?

A try and catch block and provide user feedback on what the error is.
This prevents uncaught errors from breaking the application and improves user experience and debugging

- How can `useEffect` be used to load data for a component?

It can fetch data inside the callback effect

- How do you use `useEffect` to load component data just once when the component mounts?

By passing an empty dependency array

- How do you use `useEffect` to load component data every time the data key changes?

By passing the variable as a dependency

- In a large-scale production app, what are some better alternatives for loading and managing backend data?

React query and Vercel SWR

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
