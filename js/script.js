const fromCurrencyElement = document.getElementById("fromCurrency");
const toCurrencyElement = document.getElementById("toCurrency");
const amountElement = document.getElementById("amount");
const convertedAmountElement = document.getElementById("convertedAmount")

// Corrected typo in country name
const countries = [
    {code: "INR", name: "Indian Rupee"},
    {code: "USD", name: "Unitate States"},
]

// Populate "fromCurrency" select element
countries.forEach(function(country, index){
    // Generating dynamic options for currency selection
    let createOption1           = document.createElement("option");
    // Displaying both the country code and name as option text
    createOption1.value  = country.code;
    createOption1.textContent  = `(${country.code}) (${country.name})`;

    // Appending the new target currency option to the dropdown
    toCurrencyElement.appendChild(createOption1);

    
});

// to get the exchange rate and calculate converted amount
const getExchangeRate = async () => {
    // Get the amount from the input field and parse it as a float
    let amount = parseFloat(amountElement.value);

    // Get the selected currencies from the dropdowns
    let fromCurrency = fromCurrencyElement.value;
    let toCurrency = toCurrencyElement.value;

     // Fetch exchange rate data from the API using selected base currency
        const response = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=602916d336d4802b074bde3d00cb3096&currency=${fromCurrency}`);

        const data = await response.json();

        console.log(data);

        const conversionRate = data.rates[toCurrency];
        // console.log(conversionRate);

        const convertedAmount = (amount * conversionRate);
        // console.log(amount, 'amount')
        convertedAmountElement.value = convertedAmount;
        console.log(convertedAmount);



};

// Call the function initially or attach it to a user-triggered event
fromCurrencyElement.addEventListener("change", getExchangeRate);
toCurrencyElement.addEventListener("change", getExchangeRate);

