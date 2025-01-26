# ds-list-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the List data structure.

A list is a data structure that holds its data in a contiguous block of memory.
Each element in the list is the same size, and they are accessed by index, with the first element being at index 0

- What are some examples of when you would use a List?

Adding a list of menu items or as discussed in class, if a hospital needed to know who to see first (I.e. sick or stabbed)

- How do you read an element of a List given its index? What is its time complexity?

By accessing its index and index(0) is the first element
Time Complexity: Constant

- How do you add an element into a List at a given index? What is its time complexity?

By using either array.push or array.splice
This shifts all elements from the index onward one position to the right to make room for the new element.
Time Complexity: Linear

- How do you update an element in a List at a given index? What is its time complexity?

By using array.splice
This replaces the value at the specified index with the new element.
Time Complexity: Constant

- How do you remove an element from a List at a given index? What is its time complexity?

Array.shift
This shifts all elements following the index one position to the left to fill the gap left by the removed element.
Time Complexity: Linear

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
