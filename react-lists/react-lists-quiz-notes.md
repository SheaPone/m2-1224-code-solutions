# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to programmatically create a list of React components?

Fetching data from an API, user-generated content, etc.

- Why is it important for React components to be data-driven?

They enable a component to dynamically render its UI based on the data it receives as props

- What `Array` method is commonly used to create a list of React components?

map()

- Why do components in a list need to have unique keys?

Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.

- What is the best value to use as a "key" prop when rendering lists?

String or number that is unique

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
