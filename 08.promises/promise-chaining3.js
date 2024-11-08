// Simulate generating a number
function generateNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!num) {
        reject("Invalid Number");
        return; // Stop execution if num is invalid
      }
      resolve(num);
    }, 1000);
  });
}

// Get user info
function getUser(userId) {
  return new Promise((resolve, reject) => {
    if (!userId) {
      reject("Enter valid user id");
      return; // Stop execution if userId is invalid
    }
    setTimeout(() => {
      console.log("Get the user from database");
      resolve({
        userId,
        userName: "admin",
      });
    }, 1000);
  });
}

// Get services of a user
function getServices(user) {
  return new Promise((resolve, reject) => {
    if (!user) {
      reject("Not a valid user");
      return; // Stop execution if user is invalid
    }
    setTimeout(() => {
      console.log(`Get the services of ${user.userName} from the database`);
      resolve(["Email", "VPN", "CDN"]);
    }, 1000);
  });
}

// Calculate service cost
function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    if (!services) {
      reject("No services");
      return; // Stop execution if services are invalid
    }
    setTimeout(() => {
      console.log("Calculate the service cost");
      resolve(services.length * 100);
    }, 2000);
  });
}

// Main promise chain
getUser(1)
  .then((user) => {
    console.log(user); // Log user data
    return getServices(user); // Pass user to get services
  })
  .then((services) => {
    console.log(services); // Log services data
    return getServiceCost(services); // Pass services to calculate cost
  })
  .then((cost) => {
    console.log(`Total service cost: $${cost}`); // Log the total cost
  })
  .catch((error) => {
    console.log(error); // Centralized error handling
  });
