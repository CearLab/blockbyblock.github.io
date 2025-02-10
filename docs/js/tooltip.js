document.addEventListener('DOMContentLoaded', function () {
    const featureItems = document.querySelectorAll('.feature-item');

    featureItems.forEach(item => {
        item.addEventListener('click', function () {
            // Hide any other open tooltips
            featureItems.forEach(i => i.classList.remove('active'));
            // Show the clicked tooltip
            this.classList.add('active');
        });

        const closeBtn = item.querySelector('.close-tooltip');
        closeBtn.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent the click event from bubbling up to the feature item
            item.classList.remove('active');
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                item.classList.remove('active');
            }
        });
    });
});