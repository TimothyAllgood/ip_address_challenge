// Import Quicksort algo
// const quickSort = require('./quicksort');

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
		// console.log(allIpAddresses[index]);
	}

	// Otherwise we add the ip address to an array and set the request count to our initial value of 1
	else {
		allIpAddresses.push({ ip: ipAddress, requestCount: 1 });
		// console.log(`New IP`);
	}
};

// Test functions
// console.time('Request Function');
// requestHandled('1.1.1.1');
// console.timeEnd('Request Function');
// requestHandled('2.2.2.2');

// Log All IP addresses
// console.log(allIpAddresses);

// Returns the top 100 ips sorted by most requests made
const top100 = () => {
	// Time complexity O(n log(n))
	// Sorts our array, we compare one value to the next, if it is larger we shift the larger number in front of the smaller
	allIpAddresses.sort((a, b) => (a.requestCount > b.requestCount ? -1 : 1));

	// Quick Sort Version
	// quickSort.quickSort(allIpAddresses, 0, allIpAddresses.length - 1);

	// empty array to hold our top ip addresses
	let top100 = [];

	// Loop through our sorted array and push the top 100 ip addresses into our array
	for (let i = 0; i <= 100; i++) {
		top100.push(allIpAddresses[i]);
	}

	// Use Javascript's built-in splice method to shrink array to 100 items
	// top100 = sorted.splice(0, 100);

	return top100;
};

// Calls our function
// console.time('top');
// console.log(top100());
// console.timeEnd('top');

const clear = () => {
	// Time Complexity O(n)

	// Get time when this is called
	const now = new Date();

	// Get time until 10 a.m
	let timeUntilMorning =
		new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0, 0) -
		now;

	// If the time is less than 0 we add 24 hours in milliseconds to our negative amount giving us the time until 10 am in ms
	if (timeUntilMorning < 0) {
		timeUntilMorning += 86400000;
	}

	// Sets a timeout, once time until morning reaches 0 ms the callback function will be called, which empties our ip array
	setTimeout(() => {
		allIpAddresses = [];
	}, timeUntilMorning);
	return now;
};

// Calls our clear function
clear();
