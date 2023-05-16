export const load = async ({ fetch }) => {
    const host = process.env.API_HOST ?? 'http://localhost:8088';
    const result = await fetch(`${host}/things`);
    const data = await result.json();
    data.things = data.things.filter(thing => thing.categories);

    return data;
}