import fetchCountries from "./fetch-data.js";

// fetchCountries("banglade").then(r => console.log(r))

const inputBox = document.querySelector("#search-input");
const suggestionBox = document.querySelector("#suggestion-box");


const handleSearch = async (keyword) => {
    const countriesArr = await fetchCountries(keyword);
    const countriesNameArr = countriesArr.map(country => country.name.common);
    return countriesNameArr;
}

const handleSuggestions = async (ev) => {
    console.log(ev.target.value);
    const keyword = ev.target.value;
    const countriesNameArr = await handleSearch(keyword);
    console.log(countriesNameArr)
    createSuggestionBox(countriesNameArr);
}

inputBox.addEventListener("input", handleSuggestions)

const createSuggestionBox = () => {}
