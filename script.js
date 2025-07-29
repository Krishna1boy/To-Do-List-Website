// Function to load saved states from localStorage
function loadSavedStates() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState === 'true') {
            checkbox.checked = true;
        }
    });
}

// Function to save the state of a checkbox
function saveState(event) {
    const checkbox = event.target;
    localStorage.setItem(checkbox.id, checkbox.checked);
}

// Load saved states when the page is loaded
window.onload = loadSavedStates;

// Add event listeners to checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', saveState);
});
