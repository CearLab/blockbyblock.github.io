document.addEventListener('DOMContentLoaded', function () {
    const featureItems = document.querySelectorAll('.feature-item');

    featureItems.forEach(item => {
        const tooltip = item.querySelector('.tooltip-text');

        item.addEventListener('click', function () {
            // Hide any other open tooltips
            document.querySelectorAll('.tooltip-text').forEach(t => t.classList.remove('active'));

            // Move the tooltip to the body
            if (tooltip) {
                document.body.appendChild(tooltip); // Move tooltip to the body
                tooltip.style.visibility = 'visible';
                tooltip.style.pointerEvents = 'auto';
            }

            // Add 'active' class to the clicked item
            item.classList.add('active');
        });

        const closeBtn = item.querySelector('.close-tooltip');
        if (closeBtn) {
            closeBtn.addEventListener('click', function (e) {
                e.stopPropagation(); // Prevent the click event from bubbling up to the feature item
                tooltip.style.visibility = 'hidden';
                tooltip.style.pointerEvents = 'none';
                item.classList.remove('active');
            });
        }

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                tooltip.style.visibility = 'hidden';
                tooltip.style.pointerEvents = 'none';
                item.classList.remove('active');
            }
        });
    });
});