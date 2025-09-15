// fetch(`https://restcountries.com/v3.1/name/ameri`)
//     .then(
//         function(response) {
//             console.log("response", response)
//             const data = response.json()
//             return data
//         }
//     )
//     .then((data) => {
//             console.log("data", data)

//     })


async function fetchCountries(keyword) {
    try {
        const rawResp = await fetch(`https://restcountries.com/v3.1/name/${keyword}`)
        const data = await rawResp.json()
        console.log(data);
        if(rawResp.status === 404){
            console.log("Page not found")
            return []
        } else {
            console.log("Page found.")
        }
        return data;
    } catch(e) {
        console.log("Error", e)
    }
}

export default fetchCountries