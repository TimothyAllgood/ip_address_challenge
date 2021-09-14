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
for (let i = 0; i < 1000000; i++) {
	seedIp();
}
