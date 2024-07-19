let count = 0;
let savedCounts = [];

function incrementCount() {
    count++;
    document.getElementById('countDisplay').innerText = `Count: ${count}`;
}

function resetCount() {
    count = 0;
    document.getElementById('countDisplay').innerText = `Count: ${count}`;
}

function saveCount() {
    const countName = document.getElementById('countName').value;
    if (countName && count > 0) {
        savedCounts.push({ name: countName, value: count });
        alert(`Count saved as "${countName}" with value ${count}.`);
        document.getElementById('countName').value = ''; // Clear input
    } else {
        alert('Please enter a name and ensure the count is greater than 0.');
    }
}

function viewSavedCounts() {
    const list = document.getElementById('savedCountsList');
    list.innerHTML = ''; // Clear previous list
    if (savedCounts.length === 0) {
        list.innerHTML = '<li>No saved counts yet.</li>';
        return;
    }
    savedCounts.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name}: ${item.value}`;
        list.appendChild(li);
    });
}