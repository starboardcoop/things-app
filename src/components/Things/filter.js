export function filter(things, category) {
    return things.filter(thing => thing.categories?.includes(category));
}