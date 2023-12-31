import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_KEY = ""; //Enter you API key


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", 
    { 
        content: "Waiting for data...",
        longitude: "",
        latitude: "",
        weather: "",
        temperature: "",
        feels_like: "",
        temp_min: "",
        temp_max: "",
        humidity: "",
        country: "",
        timezone: ""
});
  });

app.get("/get-weather", async (req, res) => {
    const { city } = req.query;

    if (!city) {
        res.render("index.ejs", 
        { 
            content: "City parameter is missing",
            longitude: "",
            latitude: "",
            weather: "",
            temperature: "",
            feels_like: "",
            temp_min: "",
            temp_max: "",
            humidity: "",
            country: "",
            timezone: ""
        });
    }
    else{
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;

    try {
        const result = await axios.get(API_URL);
        res.render("index.ejs", 
        { 
            content:"",
            longitude: JSON.stringify(result.data.coord.lon),
            latitude: JSON.stringify(result.data.coord.lat),
            weather: JSON.stringify(result.data.weather.description),
            temperature: JSON.stringify(result.data.main.temp),
            feels_like: JSON.stringify(result.data.main.feels_like),
            temp_min: JSON.stringify(result.data.main.temp_min),
            temp_max: JSON.stringify(result.data.main.temp_max),
            humidity: JSON.stringify(result.data.main.humidity),
            country: JSON.stringify(result.data.sys.country),
            timezone: JSON.stringify(result.data.name)
        });
    } catch (error) {
        res.render("index.ejs", 
        { 
            content: "Enter a valid City Name.",
            longitude: "",
            latitude: "",
            weather: "",
            temperature: "",
            feels_like: "",
            temp_min: "",
            temp_max: "",
            humidity: "",
            country: "",
            timezone: ""
    });
    }
    }
      });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
