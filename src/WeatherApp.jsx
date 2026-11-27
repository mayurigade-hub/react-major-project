import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Mumbai",
        description: "smoke",
        feelsLike: 32.44,
        humidity: 45,
        temp: 31.49,
        tempMax: 31.99,
        tempMin: 28.86
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Weather app by Delta</h1>
           <SearchBox updateInfo={updateInfo} />
           <InfoBox info={weatherInfo} />           
        </div>
    )
}