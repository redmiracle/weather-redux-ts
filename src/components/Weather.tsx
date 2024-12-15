
import {useAppSelector} from "../hooks/hooks.ts";

const Weather = () => {

    const weather=useAppSelector(state => state.weather)

    return (
        <div className={'infoWeath'}>
            {!weather.message &&
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {weather.sunset.toLocaleString()}</p>
                </>
            }{weather.message}
        </div>
    )
}

export default Weather;