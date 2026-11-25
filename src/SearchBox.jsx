import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox() {
    let [city, setCity] = useState('');
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = 'ab54ecc9f473e8fb2421b872b8272da9'; 

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console .log(jsonResponse);
        let result = {
            temp:  jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            description: jsonResponse.weather[0].description,
            feelsLike: jsonResponse.main.feels_like,
        }
        console.log(result);
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = (evt) => {
        evt.preventDefault();
        setCity('');
        getWeatherInfo();
    }

    return(
        <div className="search-box">
           <h3>Search for a Weather</h3>
           <form onSubmit={handleSubmit}>
               <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
               <br></br>
               <br></br>
               <Button variant="contained" type="submit">Search</Button>
           </form>
        </div>
    )
}