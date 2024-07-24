export default function handleResponseFromAPI(promise) {
  promise.then(
    () => {
       return {status: 200, body: 'success'};
}).catch(
    (error) => {
      return new Error();
}).finally(
    () => {
    console.log('Got a response from the API');
});}
