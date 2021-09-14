# Imports

from random import randint
import schedule
import time
import datetime

# Ip requests dictionary
requests = {
  "1.1.1.1": 69
}

# Function to seed requests dictionary
def seed_data():
  count = randint(0,1000)
  ip = ".".join(str(randint(0,255)) for _ in range(4))
  requests[ip] = count
  return

# Seed dictionary i amount of times
for i in range(100000):
  seed_data()

 
def request_handled(ip_address):
  # If key exists increment count
  if ip_address in requests.keys():
    requests[ip_address]+=1
  # If key is not found create new dictionary key and set count to 1
  else:
    requests[ip_address] = 1
  return

request_handled('1.1.1.1')

def top100():
  # Sort dictionary by value
  sorted_requests = dict(sorted(requests.items(), key=lambda kv: kv[1]))
  # Create new dictionary with only the top 100 ip addresses
  top100 = {k: sorted_requests[k] for k in list(sorted_requests)[:100]}
  return top100
start_time = datetime.datetime.now()
top100()
end_time = datetime.datetime.now()
print(end_time - start_time)
def clear():
  # clears initial request dictionary
  requests.clear()
  return

# Uses the scheduler package to run our clear function every day
schedule.every().day.at("10:00").do(clear)

# Runs our scheduler as long as program is running
while True:
  schedule.run_pending()
  time.sleep(60)