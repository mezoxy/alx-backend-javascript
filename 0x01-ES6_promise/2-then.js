function handleResponseFromAPI(promise) {
	promise.then((res) => {
		return {status: 200, body: success};
	}).catch((rej) => {
		return new Error();
	}).finally(() => console.log('Got the response from the API'))
}

const promise = Promise.resolve();
handleResponseFromAPI(promise);
