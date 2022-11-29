export const filter = (things, { keyword, showWantedThings }) => {
    let filtered = things;
    if (keyword.length > 0)
        filtered = filtered.filter(thing => thing.name.toLowerCase().includes(keyword.toLowerCase()));
    if (showWantedThings)
        filtered = filtered.filter(thing => thing.stock < 1);

    return filtered;
}