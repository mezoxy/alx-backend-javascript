export default function getResponseFromAPI() {
    const prom = new Promise(function(res, rej){
	    res();
	    rej();
    });
    return prom;
}
