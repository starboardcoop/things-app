async function getAll() {
    let data;
    let now = new Date();

    let previousRefresh = new Date(localStorage.getItem("previousRefresh"));
    if (Math.abs(now - previousRefresh) > 120000) {
        data = _getAll();
        localStorage.setItem("previousRefresh", now.toUTCString());
    } else {
        data = JSON.parse(localStorage.getItem("data"));

        console.log('Previous data refreshed.');
    }
    
    return data;
}

async function _getAll() {
    const result = await fetch(`/.netlify/functions/things`);
    let data = await result.json();
    localStorage.setItem("data", JSON.stringify(data));

    data.things = data.things.filter(thing => thing.categories);

    console.log('Refreshed data from API.');
    return data;
}

export default {
    getAll
}