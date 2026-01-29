const sidebar = document.getElementById('sidebar');
const menuItems = document.getElementById('menuItems');
const toggleBtn = document.getElementById('toggleBtn');
const overlay = document.getElementById('overlay');
const statusIndicator = document.getElementById('statusIndicator'); // ADDED - Get status indicator element

// function to check if sidebar is open
function isSidebarOpen() {
    return sidebar.classList.contains('active');
}

// function to update status indicator
function updateStatus() {
    if (isSidebarOpen()) {
        statusIndicator.textContent = 'Sidebar is OPEN';
        statusIndicator.classList.remove('closed');
        statusIndicator.classList.add('open');
    } else {
        statusIndicator.textContent = 'Sidebar is CLOSED';
        statusIndicator.classList.remove('open');
        statusIndicator.classList.add('closed');
    }
}

// function to open sidebar
function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    toggleBtn.classList.add('active');
    updateStatus(); // update status indicator when sidebar opens
}

// function to close sidebar
function closeSidebar() {
    sidebar.classList.remove('active'); // remove active class from sidebar
    overlay.classList.remove('active'); // remove active class from overlay
    toggleBtn.classList.remove('active'); // remove active class from toggle button
    updateStatus(); // update status indicator when sidebar closes
}

// function to toggle sidebar
function toggleSidebar() {
    if (isSidebarOpen()) {
        closeSidebar();
    } else {
        openSidebar();
    }
}

// event listener for toggle button
toggleBtn.addEventListener('click', toggleSidebar);

// close sidebar when clicking overlay
overlay.addEventListener('click', closeSidebar);

// close sidebar with escape key and handle keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // close sidebar when escape key is pressed (only if sidebar is open)
    if (event.key === 'Escape' && isSidebarOpen()) {
        closeSidebar();
    }
    
    // open sidebar when 'O' or 'o' key is pressed
    if (event.key === 'O' || event.key === 'o') {
        openSidebar();
    }
    
    // close sidebar when 'C' or 'c' key is pressed
    if (event.key === 'C' || event.key === 'c') {
        closeSidebar();
    }
});

// handle menu item clicks with auto-close
menuItems.addEventListener('click', function(event) {
    // Check if the clicked element is a list item
    if (event.target.tagName === 'LI') {
        // show alert with the menu item name
        // alert(`You clicked on ${event.target.textContent}`);
        
        // auto-close sidebar after menu item click
        closeSidebar();
    }
});

// initialize status indicator on page load
updateStatus();