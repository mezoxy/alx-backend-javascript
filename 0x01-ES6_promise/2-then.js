export default function handleResponseFromAPI(promise) {
  return promise.then((result) => {
    {status: 200, body: success};
  }).catch((error)=> {
    new Error();
  }).finally(() => console.log('Got the response from the API'))
}
