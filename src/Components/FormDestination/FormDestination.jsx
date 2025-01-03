import { useEffect, useState } from "react"
import { FormDiv, FormWrapper, ResultWrapper } from "./style"
// import axios from "axios"

export const FormDestination = () => {
    // const url = 'http://api.weatherstack.com/current';
    // const access_key = '7b70ac1126e979fc1fe36fdc69723085'

    const [query, setQuery] = useState({
        query: 'India'  // The location you want the weather for
    })

    const [result, setResult] = useState([
        {
            country:"India",
            activity:"sports",
            humidity
                :
                41,
            is_day
                :
                "yes",
            observation_time
                :
                "05:35 PM",
    
            pressure
                :
                1014,
            temperature
                :
                5,
            weather_descriptions
                :
                ['Overcast'],
            weather_icons
                :
                ['https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png'],
            wind_speed
                :
                29
        }
    ])

    const options = [
        {
            country: "India",
            activity:"bungie jumping",
            humidity
                :
                41,
            is_day
                :
                "yes",
            observation_time
                :
                "05:35 PM",

            pressure
                :
                1014,
            temperature
                :
                5,
            weather_descriptions
                :
                ['Overcast'],
            weather_icons
                :
                ['https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png'],
            wind_speed
                :
                29
        },
        {
            country: "New York",
            activity:"hiking",
            humidity
                :
                41,
            is_day
                :
                "yes",
            observation_time
                :
                "05:35 PM",

            pressure
                :
                1014,
            temperature
                :
                5,
            weather_descriptions
                :
                ['Overcast'],
            weather_icons
                :
                ['https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png'],
            wind_speed
                :
                29
        },
        {
            country: "America",
            activity:"Paragliding",
            humidity
                :
                41,
            is_day
                :
                "yes",
            observation_time
                :
                "05:35 PM",

            pressure
                :
                1014,
            temperature
                :
                5,
            weather_descriptions
                :
                ['Overcast'],
            weather_icons
                :
                ['https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png'],
            wind_speed
                :
                29
        },
        {
            country: "Japan",
            activity:"Skydiving",
            humidity
                :
                41,
            is_day
                :
                "yes",
            observation_time
                :
                "06:35 AM",

            pressure
                :
                1014,
            temperature
                :
                5,
            weather_descriptions
                :
                ['Overcast'],
            weather_icons
                :
                ['https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png'],
            wind_speed
                :
                29
        }
    ]
    /* ask subscription
             useEffect(()=>{
                axios.get(url, {
                    params: {
                      access_key: '7b70ac1126e979fc1fe36fdc69723085',  // Your API key
                      query: query  // The location you want the weather for
                    }
                  })
                    .then(response => {
                        console.log(response.data)
                      setResult(response.data.current);  // Log the response data (weather information)
                    })
                    .catch(error => {
                      console.error('An error occurred:', error);  // Handle any errors
                    });
             },[])
             */

   const getData=(e)=>{
    e.preventDefault()
    //console.log(e.target.value)
    setQuery({ query: e.target.value })
    setResult(options.filter( (o )=>  o.country==e.target.value))}
    //console.log(result)
               
    useEffect(()=>{},[setResult])
   
    return (
        <FormWrapper className="mt-20">
            <FormDiv>
                
                <form onSubmit={(e)=>e.preventDefault()} >
                <div className="text-center text-2xl font-bold text-slate-600 w-2/3 mx-auto">Where and When to Travel?
                The site that lets you know where and when to go on holiday: find weather adapted to the activities you want to do and your budget, all depending on which month you choose to travel. </div>
                    <div>
                        <b>Find a destination</b>for your next holiday</div>
                    <div><select   className="cursor-pointer bg-indigo-50 shadow-md shadow-indigo-500" type="location" onChange={(e)=>getData(e)}
                         >
                        {options.map((o, index) => (<option key={index} value={o.country}>{o.country} </option>))}
                    </select></div>
                    
                    
                </form>
                <ResultWrapper>
                        <div className=" animate-pulse pb-4 font-bold underline text-3xl">Weather Conditions and Activities</div>
                       {result.map((result,index)=> <table className=" border-solid rounded-lg overflow-hidden break-words'" key={index}>
                            
                            <tr>
                                <td>Country</td>
                                <td>{result.country}</td>

                            </tr>
                            <tr>
                                <td>Activies</td>
                                <td>{result.activity}</td>

                            </tr>
                            <tr>
                                <td>Tempreature</td>
                                <td>{result.temperature}</td>

                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>{result.pressure}</td>

                            </tr>
                            <tr>
                                <td>Humidity</td>
                                <td>{result.humidity}</td>

                            </tr>
                            <tr>
                                <td>Is Day?</td>
                                <td>{result.is_day}</td>

                            </tr>
                            <tr>
                                <td>Descriptions</td>
                                <td>{result.weather_descriptions}</td>

                            </tr>

                        </table>)}



                    </ResultWrapper>
            </FormDiv>
        </FormWrapper>
    )
}
