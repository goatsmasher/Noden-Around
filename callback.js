function greet(callback) {
	var data = {
		name: "John Doe"
	};
	console.log(`Hello, ${data.name}`);

	callback(data);
}

function goodbye(data) {
	console.log(`Goodbye, ${data.name}`);
}

greet(goodbye);