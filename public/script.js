function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(url);
        img.onerror = () => reject(`Failed to load image: ${url}`);
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startDrawing() {
    const imageUrl = 'https://via.placeholder.com/800x600.png'; 
    const interval = 10; 
    const duration = 3000; 
    const endDelay = 50; 

    const startTime = Date.now();
    let lastRequestTime = Date.now();

    while (Date.now() - startTime < duration) {
        await loadImage(imageUrl);
        lastRequestTime = Date.now();
        await delay(interval - (Date.now() - lastRequestTime));
    }

    for (let i = 0; i < 5; i++) { 
        const currentTime = Date.now();
        await Promise.all([
            loadImage(imageUrl),
            delay(endDelay)
                .then(() => loadImage(imageUrl))
        ]);
        await delay(200 - (Date.now() - currentTime));
    }
}