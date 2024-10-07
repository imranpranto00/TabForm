function openTab(event, tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    // Remove active class from all tab links
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Show the current tab and add active class to clicked tab
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');

    // Adjust the height dynamically based on content
    const activeTab = document.getElementById(tabId);
    const tabContainer = document.querySelector('.tab-container');
    tabContainer.style.height = `${activeTab.scrollHeight}px`;
}

// Set default open tab
// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('customerInfo').style.display = 'block';
// });
