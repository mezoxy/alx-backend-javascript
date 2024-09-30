export default function handleResponseFromAPI(promise) {
  promise.then((result) => {
    return {status: 200, body: success};
  }).catch((error)=> {
    return new Error();
  }).finally(() => console.log('Got the response from the API'))
}
