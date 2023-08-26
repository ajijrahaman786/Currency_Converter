const fromCurrencyElement = document.getElementById("fromCurrency");
const toCurrencyElement = document.getElementById("toCurrency");
const amountElement = document.getElementById("amountElement");

// set as all countries in a Array
const countries = [
    {code: "INR", name: "Indian Rupee"},
    {code: "USD", name: "Unitate States"},
]

// Populate "fromCurrency" select element
countries.forEach(function(country, index){
    // Generating dynamic options for currency selection
    let createOption1           = document.createElement("option");
    let createOption2           = document.createElement("option");
    // Displaying both the country code and name as option text
    createOption1.value = createOption2.value  = country.code;
    createOption1.textContent = createOption2.textContent  = `(${country.code}) (${country.name})`;

    // Appending the new target currency option to the dropdown
    fromCurrencyElement.appendChild(createOption1);
    toCurrencyElement.appendChild(createOption2);


    toCurrency.addEventListener("change", function(){
        

    });



    
});


