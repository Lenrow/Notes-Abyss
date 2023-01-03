const urlParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlParams.entries());

const NoteBooks = JSON.stringify(params);
