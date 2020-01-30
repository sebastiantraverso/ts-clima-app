// import axios = require('axios');
const axios = require('axios').default;


export const getLugarLatLog = async (direccion) => {
    
    const encodedUrl = encodeURI(direccion);
    
    const instance = axios.default.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '7ac7da7dccmsh5ab27b66ec40a71p15f506jsn2a2452fb691d' }
    });
    
    const resp = await instance.get(`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`);
    

    // axios({
    //     "method":"GET",
    //     "url":"https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
    //     "headers":{
    //     "content-type":"application/octet-stream",
    //     "x-rapidapi-host":"devru-latitude-longitude-find-v1.p.rapidapi.com",
    //     "x-rapidapi-key":"7ac7da7dccmsh5ab27b66ec40a71p15f506jsn2a2452fb691d"
    //     },"params":{
    //     "location":"New York"
    //     }
    //     })
    //     .then((response)=>{
    //     //   console.log(response)
    //       console.log(response.data.Results[0].name)
    //     })
    //     .catch((error)=>{
    //         return `No se pudo determinar el clima de ${direccion}`        
    //     })


    if( resp.data.Results.lenght == 0 ) {
        throw new Error (`No hay resultados para ${direccion}`);        
    }
    
    const data = resp.data.Results[0];
    const direc = data.name;
    const lat = data.lat;
    const lng = data.lon;

    // console.log(`direc: ${direc}`);
    // console.log(`lat: ${lat}`);
    // console.log(`lng: ${lng}`);

    return {
        direc,
        lat,
        lng
    }

}
