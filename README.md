# React Project

## About The Project

This is a React project.  
In this project I use React and JSON data.  
It is a simple project where user can see and manage the data.

## Technologies I Use

- React
- JavaScript
- HTML
- CSS
- JSON

## Features

- Load data from JSON
- Manage data using React state
- Simple and clean UI

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is like HTML but we write it inside JavaScript.

We use JSX because it make UI easy to write in React.

### 2. What is the difference between props and state?

Props is use to send data from parent to child.

State is use to store data inside a component and change the data.

### 3. What does the useState hook do, and where did you use it in this project?

useState is use to create and change state.

I use useState to store and update data in this project.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is use to run some code when component load or data change.

I use useEffect to load the JSON data when the component start.

### 5. Why does every item in a .map() list need a unique key prop?

React use key to identify every item.

It help React know which item is changed, added or removed.

### 6. What is conditional rendering?

Conditional rendering means show something when a condition is true.

I use it to show empty stack message when there is no item.

{stack.length === 0 && <p>Stack is empty</p>}

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent send data to child using props.

Child send data to parent using a function.

So parent to child use props and child to parent use function.
