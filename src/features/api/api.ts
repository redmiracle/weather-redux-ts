import {api_key, base_url} from "../../utils/constants.ts";

import {createAsyncThunk} from "@reduxjs/toolkit";




export const fetchWeather =createAsyncThunk(
    'fetchWeather',
    async (city:string)=>{
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
        const data = await response.json();
        return {
            country: data.sys.country as string,
            city: data.name as string,
            temp: data.main.temp as number,
            pressure: data.main.pressure as number,
            sunset: data.sys.sunset*1000 as number,
        }
    }
)


// export const fetchWeather=(city:string)=> {
//     return async (dispatch:AppDispatch)=> {
//         dispatch(dataRequest());
//
//         try {
//             const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
//             const data = await response.json();
//             const newSunset=new Date(data.sys.sunset * 1000)
//              dispatch(dataSuccess({
//                 country: data.sys.country,
//                 city: data.name,
//                 temp: data.main.temp,
//                 pressure: data.main.pressure,
//                 sunset: newSunset,
//             }));
//
//         } catch {
//             dispatch(dataError())
//         }
//     }
// }

    //  fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
    // .then(result =>result.json())
    // .then(data =>{
    //     dispatch(
    //         dataSuccess({
    //             country: data.sys.country,
    //             city: data.name,
    //             temp: data.main.temp,
    //             pressure: data.main.pressure,
    //             sunset: new Date(data.sys.sunset * 1000)
    //         })
    //
    //     )})
    //      .catch(()=>{
    //          dispatch(dataError({}));
    //
    //      });


