export const getAll = async () => {
    const result = await fetch(`/.netlify/functions/things`);
    let data = await result.json();
    data.things = data.things.filter(thing => thing.categories);

    console.log('Refreshed data from API.');
    return data;
}