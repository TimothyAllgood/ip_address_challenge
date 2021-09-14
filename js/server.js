// Create IP address array to hold all IP addresses
let allIpAddresses = [{ ip: '1.1.1.1', requestCount: 2 }];

// This function is used to create seed data for our IP addresses
const seedIp = () => {
	// Will set request count to a number between 1 and 10000
	const requestCount = Math.floor(Math.random() * 10001);

	// Will generate a random IP that fits the IP address format
	const ip =
		Math.floor(Math.random() * 255) +
		1 +
		'.' +
		Math.floor(Math.random() * 255) +
		'.' +
		Math.floor(Math.random() * 255) +
		'.' +
		Math.floor(Math.random() * 255);

	// Stores the new random IP address in memory
	allIpAddresses.push({ ip, requestCount });
};

// This loop is to generate i amount of random IP addresses
// Current Amount of IP addresses: 1,000,000
for (let i = 0; i < 1000000; i++) {
	seedIp();
}

// Handles updating ip memory store
const requestHandled = (ipAddress) => {
	// Time Complexity : O(n)

	// Set boolean to false by default to check if ip is found
	let ipFound = false;

	// This will be the index of the ip if found
	let index;

	// Loop through our ip addresses
	for (let i = 0; i < allIpAddresses.length; i++) {
		//If ip address is found we set our check variable to true and the index to the current iterator
		if (allIpAddresses[i].ip === ipAddress) {
			ipFound = true;
			index = i;
		}
	}

	// If the ip is found we increase the request count
	if (ipFound) {
		allIpAddresses[index].requestCount++;
		console.log(allIpAddresses[index]);
	}

	// Otherwise we add the ip address to an array and set the request count to our initial value of 1
	else {
		allIpAddresses.push({ ip: ipAddress, requestCount: 1 });
		console.log(`New IP`);
	}
};

// Test functions
console.time('Request Function');
requestHandled('1.1.1.1');
console.timeEnd('Request Function');
requestHandled('2.2.2.2');

// Log All IP addresses
// console.log(allIpAddresses);
