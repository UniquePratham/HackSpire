const puppeteer = require("puppeteer");
const readline = require("readline");

// Function to read user input from the console
const askQuestion = (query) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    })
  );
};

const autoFillForm = async (url, userData) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);

  // Fill in form fields (adjust selectors based on actual form structure)
  await page.type('input[name="name"]', userData.name); // Replace selector with the actual form field name
  await page.type('input[name="email"]', userData.email); // Replace selector with the actual form field name
  await page.type('input[name="password"]', userData.password); // Replace selector with the actual form field name

  // Submit the form (adjust selector for the submit button)
  await page.click('button[type="submit"]'); // Adjust for the form's actual submit button

  // Wait for navigation or success message
  await page.waitForNavigation();

  console.log("Form submitted successfully!");
  await browser.close();
};

// Main function to collect input and execute the Puppeteer logic
const main = async () => {
  const url = await askQuestion("Please enter the form URL: ");
  const name = await askQuestion("Please enter your full name: ");
  const email = await askQuestion("Please enter your email: ");
  const password = await askQuestion("Please enter your password: ");

  const userData = { name, email, password };

  // Run Puppeteer with the user input
  autoFillForm(url, userData);
};

main();
