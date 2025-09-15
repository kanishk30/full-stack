import fetchCountries from "./fetch-data.js";

// fetchCountries("banglade").then(r => console.log(r))

const inputBox = document.querySelector("#search-input");
const suggestionBox = document.querySelector("#suggestion-box");

function debounce(fn, delay = 500) {
    let timerId;

    return function (...args) {
        if (timerId) {
            console.log("clearTimeout called")
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            console.log("setTimeout called")

            fn(...args);
        }, delay);
    };
}


const handleSearch = async (keyword) => {
    const countriesArr = await fetchCountries(keyword);
    console.log("handleSearch called")
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

inputBox.addEventListener("input", debounce(handleSuggestions))

const createSuggestionBox = (countriesNameArr) => {
    // implement.
    if(countriesNameArr.length) {
        suggestionBox.classList.add("visible")
    } else {
        suggestionBox.classList.remove("visible")
    }
    // clear previous results.
    suggestionBox.innerHTML = '';

    const fragment = document.createDocumentFragment();

    for(let i = 0 ; i < countriesNameArr.length; i++){
        const li = document.createElement("li");
        li.textContent = countriesNameArr[i];
        fragment.appendChild(li)
    }

    suggestionBox.appendChild(fragment)

}
