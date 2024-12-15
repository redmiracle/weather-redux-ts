import {FormEvent, useState} from "react";

import {AppDispatch} from "../store/store.ts";
import {fetchWeather} from "../features/api/api.ts";
import {useAppDispatch} from "../hooks/hooks.ts";


const Form = () => {
    const [city, setCity] = useState('');
    const dispatch:AppDispatch=useAppDispatch();

    const getCity = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(fetchWeather(city));
        setCity('');
    }

    return (
        <form onSubmit={getCity}>
            <input onChange={e => setCity(e.target.value)} type="text" value={city} />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;