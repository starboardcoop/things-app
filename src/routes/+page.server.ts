export const load = async ({ fetch }) => {
    const result = await fetch('https://starboardcoop-things-api.glitch.me/things');
    const data = await result.json();
    data.things = data.things.filter(thing => thing.categories);

    return data;
}