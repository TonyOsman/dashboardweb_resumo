function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Format time with leading zeros
    const formattedTime = 
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;

    // Update the HTML element with the current time
    document.getElementById('header').innerText = formattedTime;
}

// Call updateTime every second to refresh the displayed time
setInterval(updateTime, 1000);

// Call updateTime immediately to show the time when the page loads
updateTime();