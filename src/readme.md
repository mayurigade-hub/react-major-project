# Weather App

A small web app built with React. Enter a city name to see its current weather, including temperature, humidity, and a short description. The app gets its weather data from the [OpenWeatherMap Current Weather API](https://openweathermap.org/current).

## What the app does

1. The app starts with sample weather information for Mumbai.
2. Enter a city name in the search box and select **Search**.
3. The app requests current weather for that city in metric units (Celsius).
4. The weather card updates with the city and its conditions. It also chooses an image and icon based on the humidity and temperature.

## Run it on your computer

You need [Node.js](https://nodejs.org/) and npm installed.

1. Open a terminal in the `react-project` folder.
2. Install the project packages:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local address printed in the terminal (Vite usually uses `http://localhost:5173`).

To create a production build, run `npm run build`. To preview that build locally, run `npm run preview`. To check source files with ESLint, run `npm run lint`.

## How the code fits together

The main flow is:

```text
index.html → src/main.jsx → src/App.jsx → src/WeatherApp.jsx
                                               ├── src/SearchBox.jsx
                                               └── src/InfoBox.jsx
```

### App components

| File | What it does |
| --- | --- |
| `src/main.jsx` | The browser entry point. It finds the `root` element in `index.html` and asks React to render the app inside it. `StrictMode` helps highlight potential problems during development. |
| `src/App.jsx` | The top-level React component. It displays `WeatherApp`. |
| `src/WeatherApp.jsx` | Holds the current weather information in React state. It starts with sample Mumbai data, gives `SearchBox` a function to update that data, and passes the current data to `InfoBox`. |
| `src/SearchBox.jsx` | Displays the city input and Search button. When submitted, it requests weather data, converts the API response into the fields the app uses, and passes those fields to `WeatherApp`. It displays an error if the city request fails. |
| `src/InfoBox.jsx` | Displays the weather card. It shows the city, description, feels-like temperature, humidity, current temperature, and minimum and maximum temperatures. It selects a card image and icon from the weather values. |

### How weather information moves through the app

`WeatherApp` owns the weather data so both child components can use it. It passes `updateInfo` down to `SearchBox`. After a successful API request, `SearchBox` calls that function with the new weather details. React updates the state, then `InfoBox` receives the new `info` prop and renders the updated card.

The weather data object contains:

| Field | Meaning |
| --- | --- |
| `city` | City name returned by OpenWeatherMap |
| `description` | Short condition description, such as “clear sky” |
| `feelsLike` | “Feels like” temperature in Celsius |
| `humidity` | Humidity percentage |
| `temp` | Current temperature in Celsius |
| `tempMax` | Reported maximum temperature in Celsius |
| `tempMin` | Reported minimum temperature in Celsius |

### Weather display choices

In `InfoBox.jsx`, humidity above 70% selects the rainy image and thunderstorm icon. Otherwise, a temperature above 20°C selects the hot image and sun icon. All other temperatures use the cold image and snowflake icon. These are simple display rules; they do not interpret the API's condition codes.

## Other project files

| File | What it does |
| --- | --- |
| `index.html` | The HTML page Vite serves. It provides the `root` element where React mounts and loads `src/main.jsx`. |
| `src/index.css` | Global styles, including page typography, colors, layout, and dark-mode colors. It is currently **not imported** by `src/main.jsx`, so these global styles do not currently apply. |
| `src/SearchBox.css` | Centers the search form. |
| `src/InfoBox.css` | Centers and arranges the weather card. |
| `src/App.css` | Contains leftover starter styles. It is not currently imported by the app. |
| `src/assets/hero.png` | Image asset in the project; it is not currently used by the weather app. |
| `src/assets/react.svg`, `src/assets/vite.svg` | Starter logo assets; they are not currently used by the weather app. |
| `public/favicon.svg`, `public/icons.svg` | Static public assets. The favicon is referenced by `index.html`; `icons.svg` is not currently referenced in the app source. |
| `vite.config.js` | Configures Vite to use its React plugin. |
| `eslint.config.js` | Configures ESLint checks for the project source. |
| `package.json` | Lists dependencies and commands such as `dev`, `build`, `preview`, and `lint`. |
| `package-lock.json` | Records the installed package versions so installs can be reproduced. |
| `.gitignore` | Lists generated or local files Git should leave untracked. |

## Main libraries

- **React** builds the interface from components and updates it when state changes.
- **Vite** runs the local development server and creates the production build.
- **Material UI** provides the text field, button, card, typography, and weather icons.
- **Emotion** provides styling support used by Material UI.
- **OpenWeatherMap** supplies current weather data over HTTP.

## API key note

`src/SearchBox.jsx` currently contains an OpenWeatherMap API key directly in the frontend source. Frontend code is sent to each visitor's browser, so this key should be treated as public. For a deployed app, move the key behind a backend service or use a provider-supported restricted key. If you use a Vite environment variable, remember that variables prefixed with `VITE_` are also visible in browser code; they organize configuration but do not hide a secret.

The app also shows a generic “City not found” message for any request failure. This can include network or API-key problems as well as an invalid city. A failed search does not replace the previously displayed weather.

## Current limitations

- The initial Mumbai weather values are sample data, not fetched automatically.
- Search requires a working OpenWeatherMap API key and an internet connection.
- The selected image and icon are based only on humidity and temperature thresholds.
- The weather images are loaded from external websites, so they need an internet connection too.
- There is no loading indicator while a request is in progress.
