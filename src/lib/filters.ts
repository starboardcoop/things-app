export const filter = (things, { keyword, onlyWishList }) => {
    let filtered = things;
    if (keyword.length > 0)
        filtered = filtered.filter(thing => thing.name.toLowerCase().includes(keyword.toLowerCase()));
    if (onlyWishList)
        filtered = filtered.filter(thing => thing.stock < 1);

    return filtered;
}

export const filterByCategory = (things, category) => {
    return things.filter(thing => thing.categories?.includes(category));
}