# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Material UI (MUI) – React UI Component Library

## 1. What is Material UI (MUI)?

**Material UI (MUI)** is an open-source React UI component library that provides pre-built, reusable components to build modern and responsive user interfaces.

It follows Google's **Material Design** principles.

Instead of writing HTML and CSS from scratch for every UI element, MUI provides ready-made components such as:

- Buttons
- Text Fields
- Cards
- Navigation Bars
- Dialog Boxes
- Tables
- Icons
- Forms

We can directly import these components into our React application and customize them according to our requirements.

## 2. Why do we use MUI?

Without MUI, we need to create and style every component manually using HTML and CSS.

With MUI, we get:

1. **Reusable Components:** Ready-made components that can be reused throughout the application.
2. **Faster Development:** Reduces the time required to design and develop UI elements.
3. **Customization:** Components can be customized using props and styling.
4. **Responsive Design:** Supports responsive layouts for different screen sizes.
5. **Consistency:** Maintains a consistent design across the application.
6. **Accessibility:** Provides built-in accessibility features for many components.

## 3. Installation

To use Material UI in a React project, install the required packages.

### Install MUI Core

```bash
npm install @mui/material @emotion/react @emotion/styled
```

### Install MUI Icons (Optional)

```bash
npm install @mui/icons-material
```

**Note:** MUI uses Emotion as its default styling engine.

## 4. Importing Components

MUI components can be imported directly from the `@mui/material` package.

Example:

```jsx
import Button from '@mui/material/Button';
```

Here:
- `@mui/material` is the MUI component library.
- `Button` is the component we want to use.

## 5. Understanding MUI Button

MUI provides different button variants through the `variant` prop.

### Example:

```jsx
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      <Button variant="contained">
        Click me!
      </Button>
    </div>
  );
}

export default App;
```

### Button Variants

**1. Contained**

A filled button with a background color.

```jsx
<Button variant="contained">Click Me</Button>
```

**2. Outlined**

A button with a border and transparent background.

```jsx
<Button variant="outlined">Click Me</Button>
```

**3. Text**

A button with no background or border.

```jsx
<Button variant="text">Click Me</Button>
```

## 6. Understanding Props in MUI

Props allow us to customize MUI components.

Example:

```jsx
<Button
  variant="contained"
  color="success"
  size="large"
>
  Submit
</Button>
```

Some commonly used Button props:

| Prop | Purpose |
|---|---|
| `variant` | Defines the button style |
| `color` | Changes the button color |
| `size` | Defines the button size |
| `disabled` | Disables the button |
| `fullWidth` | Makes the button occupy full width |
| `onClick` | Handles click events |

## 7. MUI vs Traditional CSS

| Traditional CSS | Material UI |
|---|---|
| Write styles manually | Pre-built styled components |
| Create buttons from scratch | Use ready-made Button |
| More styling work | Faster UI development |
| Maintain styles yourself | Consistent component styling |

## 8. Important MUI Packages

| Package | Purpose |
|---|---|
| `@mui/material` | Core UI components |
| `@mui/icons-material` | Material Design icons |
| `@emotion/react` | CSS-in-JS styling |
| `@emotion/styled` | Styled components |

## 9. Key Takeaways

- MUI is a React component library.
- It follows Google's Material Design principles.
- It provides reusable, pre-built UI components.
- Components are imported from `@mui/material`.
- Props are used to customize components.
- MUI helps developers build consistent and responsive interfaces faster.

**Official Documentation:** https://mui.com/material-ui/getting-started/


# Understanding Fetch API – Response Object & JSON Response

## 1. What is Fetch API?

The Fetch API is used in JavaScript to make HTTP requests to servers and APIs.

It allows us to request data from an API and use that data in our application.

Example:

```js
let response = await fetch(URL);
```

Here, `fetch()` sends a request to the specified URL and returns a Response Object.

## 2. Understanding the API Request Flow

When we make an API request, two important steps take place:

1. Fetch the response from the API.
2. Extract and parse the actual data from the response.

```js
let response = await fetch(URL);
let jsonResponse = await response.json();
```

## 3. Response Object

When we use `fetch()`, we receive a **Response Object**.

The Response Object contains information about the HTTP response received from the server.

Some important properties are:

| Property | Description |
|---|---|
| `response.status` | HTTP status code (200, 404, etc.) |
| `response.ok` | Returns true if the HTTP status is between 200 and 299 |
| `response.headers` | Contains response headers |
| `response.body` | Contains the response body as a readable stream |

Example:

```js
let response = await fetch(URL);

console.log(response.status); // 200
console.log(response.ok);     // true
```

**Remember:** The Response Object gives us information about the API request and its response.

## 4. JSON Response Object

After receiving the Response Object, we use:

```js
let jsonResponse = await response.json();
```

The `.json()` method reads the response body and parses the JSON data into a JavaScript value.

For example, the API might return:

```json
{
    "name": "Mumbai",
    "main": {
        "temp": 29,
        "humidity": 70
    }
}
```

After parsing, we can directly access the data:

```js
console.log(jsonResponse.name);         // Mumbai
console.log(jsonResponse.main.temp);    // 29
console.log(jsonResponse.main.humidity);// 70
```

**Remember:** The JSON Response contains the actual data that we want to use in our application.

## 5. Difference Between Both Objects

| Response Object | JSON Response Object |
|---|---|
| Received using `fetch()` | Received using `response.json()` |
| Contains HTTP response information | Contains actual API data |
| Has status, ok, headers, etc. | Has properties like name, temp, humidity, etc. |
| Used to check the API response | Used to access and display data |

Both are JavaScript objects, but they serve different purposes.

## 6. Complete Fetch API Flow

```js
let response = await fetch(URL);

// Check HTTP response
console.log(response.status);
console.log(response.ok);

// Extract actual data
let jsonResponse = await response.json();

// Access the data
console.log(jsonResponse);
```

### Execution Flow

1. `fetch(URL)` sends an API request.
2. The server sends back an HTTP response.
3. JavaScript receives the Response Object.
4. `response.json()` reads and parses the response body.
5. We get the actual JSON data as a JavaScript value.
6. We access the required properties and use them in our application.

## 7. Simple Real-Life Analogy

Imagine ordering a pizza:

- **Response Object:** The delivery box containing delivery status and other information.
- **JSON Response:** The actual pizza inside the box.

Similarly, `fetch()` gives us the Response Object, while `response.json()` gives us the actual data we need.

---

### Key Takeaway

- `fetch()` → Returns a Response Object.
- `response.json()` → Reads and parses the response body.
- `response` → Information about the HTTP response.
- `jsonResponse` → Actual API data that we can use in our application.
