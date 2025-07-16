document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu ---
    const menuIcon = document.querySelector('.menu-icon');
    const mainNav = document.getElementById('main-nav');

    if (menuIcon && mainNav) {
        // Toggle menu on icon click
        menuIcon.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click from immediately closing
            mainNav.classList.toggle('active');
        });

        // Close menu if a link is clicked
        mainNav.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });

        // Close menu if clicking outside of it
        document.addEventListener('click', (event) => {
            if (mainNav.classList.contains('active') && !mainNav.contains(event.target) && !menuIcon.contains(event.target)) {
                mainNav.classList.remove('active');
            }
        });
    }

    // --- Activity Filtering ---
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    
    if (categoryFilter && priceFilter) {
        const activityCards = document.querySelectorAll('.grid .card[data-category]');

        const filterActivities = () => {
            const selectedCategory = categoryFilter.value;
            const selectedPrice = priceFilter.value;

            activityCards.forEach(card => {
                const cardCategory = card.dataset.category;
                const cardPrice = card.dataset.price;

                const categoryMatch = selectedCategory === 'all' || selectedCategory === cardCategory;
                const priceMatch = selectedPrice === 'any' || selectedPrice === cardPrice;

                if (categoryMatch && priceMatch) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        };

        // Add event listeners
        categoryFilter.addEventListener('change', filterActivities);
        priceFilter.addEventListener('change', filterActivities);

        // Initial filter on page load
        filterActivities();
    }
});