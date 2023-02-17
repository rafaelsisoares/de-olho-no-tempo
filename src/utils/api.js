const params = {
    key: 'cc81e515e2776ffdeef08afddb696062',
    units: 'metric',
    lang: 'pt_br',
}

const requestAPI = async (city) => {
    const urlToFetch = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${params.units}&lang=${params.lang}&APPID=${params.key}`;
    try {
        const response = await fetch(urlToFetch);
        const data = response.json();
        return data;
    } catch (err) {
        console.error(err.message);
    }
};

export default requestAPI;