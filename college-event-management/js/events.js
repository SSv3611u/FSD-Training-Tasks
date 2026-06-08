// Events Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    renderEvents(eventsData);
    setupEventFilters();
});

function setupEventFilters() {
    const searchInput = document.getElementById('searchInput');
    const filterCategory = document.getElementById('filterCategory');

    if (searchInput) {
        searchInput.addEventListener('input', filterEvents);
    }

    if (filterCategory) {
        filterCategory.addEventListener('change', filterEvents);
    }
}

function filterEvents() {
    const searchInput = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const selectedCategory = document.getElementById('filterCategory')?.value || '';

    const filtered = eventsData.filter(event => {
        const matchesSearch = event.name.toLowerCase().includes(searchInput) ||
                            event.description.toLowerCase().includes(searchInput);
        const matchesCategory = selectedCategory === '' || event.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    renderEvents(filtered);
}
