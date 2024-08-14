
async function startDrawing() {
    const interval = 10;
    const duration = 3000;
    const endDelay = 50;

    const startTime = Date.now();
    let lastRequestTime = Date.now();

    // while (Date.now() - startTime < duration) {
    //     loadData(interval, 1, randomContentType());
    //     lastRequestTime = Date.now();
    // }

    for (let i = 0; i < 5; i++) {
        const currentTime = Date.now();
        loadData(interval, 1, randomContentType());
        lastRequestTime = Date.now();
    }
}