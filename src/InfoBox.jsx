import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function InfoBox({info}) {
    const img_url = "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg"
    return(
        <div className="info-box">
        <h3>Weather Information</h3>
        <div className="info-card">
        <Card sx={{ width: 500 }}>
        <CardMedia
        sx={{ height: 300 }}
        image={img_url}
        title="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}
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