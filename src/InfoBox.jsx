import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    const HOT_URL = "https://wallpaperaccess.com/full/6056528.jpg";
    const COLD_URL = "https://cdn.pixabay.com/photo/2023/12/06/08/53/winter-8433257_1280.jpg";
    const RAINY_URL = "https://static.vecteezy.com/system/resources/thumbnails/042/146/565/small_2x/ai-generated-beautiful-rain-day-view-photo.jpg";

    return(
        <div className="info-box">
        <h3>Weather Information</h3>
        <div className="info-card">
        <Card sx={{ width: 500 }}>
        <CardMedia
        sx={{ height: 300 }}
        image = {
            info.humidity > 70 ? 
            RAINY_URL : info.temp > 20 ? 
            HOT_URL : COLD_URL}
        title="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {
            info.humidity > 70 ? 
            <ThunderstormIcon /> : info.temp > 20 ? 
            <SunnyIcon /> : <AcUnitIcon />
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Description: {info.description} <br />
        Feels Like: {info.feelsLike} <br />
        Humidity: {info.humidity} <br />
        Temperature: {info.temp} <br />
        Max Temperature: {info.tempMax} <br />
        Min Temperature: {info.tempMin} <br />
        </Typography>
        </CardContent>
        </Card>
        </div>
        </div>
    )
}