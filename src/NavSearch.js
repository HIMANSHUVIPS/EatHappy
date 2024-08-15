document.querySelector('.clear-btn').addEventListener('click', () => {
    const searchInput = document.querySelector('input[type="search"]');
    searchInput.value = '';
    searchInput.focus();
});