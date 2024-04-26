// Get Container
const container = document.querySelector('.container');

// Generate 16x16 grid
generateGrid(16, container);

// Grid size button
const gridSizeBtn = document.querySelector('#grid-size-btn');
gridSizeBtn.addEventListener('click', (e) => {
    const size = parseInt(prompt('Enter a Grid Size between 16 and 100:', 16));
    if (size >= 16 && size <= 100) {
        generateGrid(size, container);
    }
    else {
        alert('Grid size limit is from 16 to 100');
    }
});

// Reset btn
document.querySelector('#reset-btn').addEventListener('click', (e) => {
    generateGrid(16, container);
});


// Generate grid
function generateGrid(size, elem) {

    // Empty elem
    elem.innerHTML = '';

    // For each row
    for (let i = 0; i < size; i++) {

        // For each column
        for (let j = 0; j < size; j++) {
            // Create new div
            let div = document.createElement('div');
            div.classList.add('grid-item');
            div.style.opacity = 0.1;
        
            // Add Hover effects
            div.addEventListener('mouseenter', (e) => {
                e.currentTarget.style.backgroundColor = generateRandomRGBColor();
            });
            div.addEventListener('mouseout', (e) => {
                const item = e.currentTarget;
                item.style.backgroundColor = 'black';
                let opacity = parseFloat(item.style.opacity);
                if (opacity < 1) opacity += 0.1; 
                item.style.opacity = opacity;
            })
        
            // Set width and height based on size of grid
            div.style.width = `calc(100% / ${size})`;
            div.style.height = `calc(100% / ${size})`;

            elem.appendChild(div);
        }
    }
}

// Generate random color
function generateRandomRGBColor() {
    // Generates random RGB color and returns its CSS
    return `rgb(${generateRandomNumber(0, 255)}, ${generateRandomNumber(0, 255)}, ${generateRandomNumber(0, 255)})`;
}

// Generate random number in range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

