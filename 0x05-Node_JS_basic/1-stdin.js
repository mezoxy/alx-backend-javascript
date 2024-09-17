if (process.argv[2] === '' || process.argv[2] === undefined) {
	process.stdin.setEncoding('utf-8');
	console.log('Welcome to Holberton School, what is your name?');
	process.stdin.on('data', (input) => {
		console.log(`Your name is ${input}`);
		process.exit();
	}
)}

else {
	console.log('Welcome to Holberton School, what is your name?');
	console.log(`Your name is ${process.argv[2]}`);
	console.log('This important software is now closing');
}
