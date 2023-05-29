function truncateString(str, length) {
    if (str.length > length) {
        return `${str.slice(0, length + 1)}&#8230`;
    }

    return str;
}

export default truncateString;
