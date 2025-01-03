import { useEffect } from "react"
import { DestinationInformation, MainWrapper } from "./style"
import axios from "axios";

function Destination() {
    // const options = {
    //     method: 'GET',
    //     url: 'https://vacations-details-your-ultimate-guide.p.rapidapi.com/api/countries',  // The full URL
    //     headers: {
    //       'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY_HERE',  // Replace with your actual API key
    //       'x-rapidapi-host': 'vacations-details-your-ultimate-guide.p.rapidapi.com'
    //     }
    //   };
    const destinations=[
        {
            place:"Korea",
            imageLink:"https://imgs.search.brave.com/c_8c0H6OSQgROrC75Gkp-Lpcpl5FgCQRAdOcvEMvKsU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODM1/MzkxNTQ2L3Bob3Rv/L3Nlb3VsLXNvdXRo/LWtvcmVhLXNreWxp/bmUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU1kc3R1TnBh/QmswYWJ6V2lPZVd5/NHhLWXpYelc1WFFO/WkNKYU50bGc4aVE9",
            info:"South Korea blends ancient traditions with modern vibrancy, offering immersive cultural experiences, scenic hikes, and culinary adventures that showcase the country's rich heritage and stunning landscapes.",
            
        },
        {
            place:"Korea",
            imageLink:"https://imgs.search.brave.com/c_8c0H6OSQgROrC75Gkp-Lpcpl5FgCQRAdOcvEMvKsU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODM1/MzkxNTQ2L3Bob3Rv/L3Nlb3VsLXNvdXRo/LWtvcmVhLXNreWxp/bmUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU1kc3R1TnBh/QmswYWJ6V2lPZVd5/NHhLWXpYelc1WFFO/WkNKYU50bGc4aVE9",
            info:"South Korea blends ancient traditions with modern vibrancy, offering immersive cultural experiences, scenic hikes, and culinary adventures that showcase the country's rich heritage and stunning landscapes."
        }
        ,{
            place:"Korea",
            imageLink:"https://imgs.search.brave.com/c_8c0H6OSQgROrC75Gkp-Lpcpl5FgCQRAdOcvEMvKsU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODM1/MzkxNTQ2L3Bob3Rv/L3Nlb3VsLXNvdXRo/LWtvcmVhLXNreWxp/bmUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU1kc3R1TnBh/QmswYWJ6V2lPZVd5/NHhLWXpYelc1WFFO/WkNKYU50bGc4aVE9",
            info:"South Korea blends ancient traditions with modern vibrancy, offering immersive cultural experiences, scenic hikes, and culinary adventures that showcase the country's rich heritage and stunning landscapes."
        },{
            place:"Korea",
            imageLink:"https://imgs.search.brave.com/c_8c0H6OSQgROrC75Gkp-Lpcpl5FgCQRAdOcvEMvKsU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODM1/MzkxNTQ2L3Bob3Rv/L3Nlb3VsLXNvdXRo/LWtvcmVhLXNreWxp/bmUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU1kc3R1TnBh/QmswYWJ6V2lPZVd5/NHhLWXpYelc1WFFO/WkNKYU50bGc4aVE9",
            info:"South Korea blends ancient traditions with modern vibrancy, offering immersive cultural experiences, scenic hikes, and culinary adventures that showcase the country's rich heritage and stunning landscapes."
        }
    ]

    // useEffect(()=>{
    //     axios(options)
    //     .then(response => {
    //      // console.log(response.data);  // Handle the response
    //     })
    //     .catch(error => {
    //       console.error('An error occurred:', error);  // Handle errors
    //     });
    // },[])
  return (
    <MainWrapper className="py-10">
        <div  className="animate-pulse text-3xl font-bold text-center underline my-4">Explore Our Featured Destinations</div>
       <DestinationInformation>
            {destinations.map((destination,index)=>(<div data-aos="fade-up" data-aos-once="false" data-aos-duration="2000" className="transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 duration-400 box border-2 border-solid shadow-xl  shadow-indigo-500/40 border-r-2 border-l-neutral-400 cursor-move " key={index}><img className="mx-auto " height={"100px"} width={"auto"} src={destination.imageLink} alt="" />
                <div className="text-xl font-semibold">{destination.place} </div><div className="text-lg"  >{destination.info}</div>
               
                </div>))}
       </DestinationInformation>
           
    </MainWrapper>
  )
}

export default Destination