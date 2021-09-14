# IP Address Challenge

## Solutions

[Javascript Solution](https://github.com/TimothyAllgood/ip_address_challenge/blob/main/js/server.js)
[Python Solution](https://github.com/TimothyAllgood/ip_address_challenge/blob/main/python/ip_addresses_challenge.py)

### Questions and Answers

When answering these questions, I am referring to my Javascript solution, which is my main solution. The answers are similar for both solutions with some nuance.

#### What would you do differently if you had more time?

If given more time to tackle this challenge, I would have looked into creating my own in-memory store, I would utilized better scheduling solutions for the clear function. I also would have implemented better ways to track performance and tested against edge cases.

#### What is the runtime complexity of each function?

O(n) runs n number of times, if an array has 50 items a function will have to complete 50 iterations, if it has 1000 items, that function would have to complete 1000 iterations.

O(n log n) is a bit more difficult to explain. Usually the complexity of sorting algorithms, this complexity is used for algorithms that divides a data set in half. Those subsets of data are then processed independtly with a sub algorithm, usually a loop, with a complexity of O(n). The combined complexity of these two sub algorithms make the complexity O(n log n)

##### requestHandled()

This function's time complexity is O(n). It loops through one array, so it will need to check however many IP addresses are in memory.

##### top100()

This function's time complexity is O(n log n). It sorts an array, either with Javascript's built in sort method, or my own quick sort implementation.

##### clear()

This function's time complexity is O(n). It will run for n amount of time.

#### How does your code work?

My main code is built using Javascript. First I create an array to hold all of my IP addresses, and their respective request counts. I then created a function to create random seed IP addresses for testing.

##### requestHandled()

My requestHandled function works by having a boolean variable set to check if any IP address already exists in my array. If it does I set the variable to true, and increment the request count. If it does not exist, I create a new object that stores the IP address, and set the request count to 1 for that IP.

##### top100()

My top100 function sorts the IP address array by the request count value. The larger values are put at the front of the array, doing this means that I know exactly where my top 100 IP addresses are. Once I have my sorted array, I push the top 100 IP address to another array and return that array.

##### clear()

My clear function gets the current time and the time until an arbitrary time in the morning, 10 a.m. in this case. Then, I set a timeout using the current time and the time until morning. When this timeout ends, my clear function is called. This function clears the IP address array.

#### What other approaches did you decide not to pursue?

I decided not to use any external packages for memory stores. I also tried to avoid any approaches that would create inefficient code, especially in the top100 function.

The approach I DID take was very methodical, with ample time given for planning.

#### How would you test this?

I did as much testing as I could throughout my time completing the challenge. I created seed data for my IP addresses, I used console.time and console.timeEnd for very rudimentary perfomance testing. Given more time, I would more thoroughly test against edge cases.
