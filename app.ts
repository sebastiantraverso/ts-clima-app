import lugar = require('./lugar/lugat');
import clima = require('./clima/clima');
import yargs = require('yargs');


const args = yargs.option({
    direccion: {
        alias: 'd',
        desc: 'Nombre de la ciudad para buscar su clima',
        demand: true
    }
}).argv;


const getClima = async(direccion) => {
    try{
        const coord = await lugar.getLugarLatLog(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);

        return `El clima de ${direccion} es de ` + Math.round(temp) + "º";
        return `El clima de ${direccion} `;
    } 
    catch( error ) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}


getClima(args.direccion)
    .then( console.log )
    .catch( console.log )



