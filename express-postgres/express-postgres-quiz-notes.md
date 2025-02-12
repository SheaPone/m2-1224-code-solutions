# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?

It allows developers to interact with a PostgresSQL database

- How do you tell `pg` which database to connect to?

By creating a database connection object

- How do you send SQL to PostgreSQL from your Express server?

By using db.query

- How do you access the rows that get returned from the SQL query?

By utilizing its index or destructuring

- What must you always remember to put around your asynchronous route handlers? Why?

Try and catch so that you may catch errors

- What is a SQL Injection Attack and how do you avoid it in `pg`?

A code injection technique that hackers can use to insert malicious SQL statements into input fields for execution by the underlying SQL database
By sanitizing which means escaping characters that will be interpreted by the SQL engine
Parameterized queries

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
