# ds-bst-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the Binary Search Tree data structure.

A data structure that holds its data in a tree, with special rules that allow for quick search and retrieval.
A tree holds data in a structure that resembles an upside down tree, with a "root" at the top and children beneath it. Each node in the tree contains the node's value and references to the children beneath it.

- What are some examples of when you would use a Binary Search Tree?

Searching through elements, maintain elements in a sorted order, and range queries

- How do you determine if an element is in a Binary Search Tree? What is its time complexity?

Compare the target value with the current node
If the target equals the current node, the element is found.
If the target is less, move to the left child.
If the target is greater, move to the right child.
Time complexity: logarithmic

- How do you add an element into a Binary Search Tree? What is its time complexity?

Compare the value to insert with the current node:
If the value is less, move to the left child.
If the value is greater, move to the right child.
Time complexity: logarithmic

- How do you remove an element from a Binary Search Tree? What is its time complexity?

Node has no children: Simply delete the node.
Node has one child: Replace the node with its child.
Node has two children:
Find the in-order successor (smallest value in the right subtree).
Replace the node's value with the successor's value.
Recursively delete the successor.
Time complexity: logarithmic

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
