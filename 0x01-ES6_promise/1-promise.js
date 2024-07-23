export default function getFullResponseFromAPI(success) {
  const prom = new Promise(function (res, rej){
  if (success === true) {
    return res({status: 200, body: 'Success'});
 } else {
    return rej(new Error('The fake API is not working currently'));
 }
});
 return prom;
  /*return new Promise((suc, rej) => { */
}
    
