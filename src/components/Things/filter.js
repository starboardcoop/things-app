export function filterThings(category) {
    return shownThings.filter(thing => thing.categories?.includes(category));
}