function update(object) {
    localStorage.setItem('session', JSON.stringify(object));
}

function json() {
    return JSON.parse(localStorage.getItem('session'));
}

export default {
    update,
    json
}