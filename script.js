// script.js file

// Function to execute a callback function when the DOM is fully loaded
function domReady(fn) {
    // Check if the document is already loaded or is in an interactive state
    if (
        document.readyState === "complete" ||   // If the document is fully loaded
        document.readyState === "interactive"   // Or if the document has been loaded enough to interact with
    ) {
        // If true, call the function after a short delay (1 second)
        setTimeout(fn, 1000);
    } else {
        // Otherwise, add an event listener to run the function when the DOM is fully loaded
        document.addEventListener("DOMContentLoaded", fn);
    }
}

// Call the domReady function with a callback function that runs when the DOM is ready
domReady(function () {

    // Function to handle the successful scanning of a QR code
    function onScanSuccess(decodeText, decodeResult) {
        // Display an alert with the decoded text from the QR code
        alert("You Qr is : " + decodeText, decodeResult);
    }

    // Create a new instance of Html5QrcodeScanner with specific options
    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",   // The ID of the HTML element where the scanner will be rendered
        { fps: 10, qrbos: 250 }   // Options: frames per second for the scan, and QR code box size in pixels
    );
    // Render the QR code scanner and set the onScanSuccess function as the callback for when a QR code is successfully scanned
    htmlscanner.render(onScanSuccess);
});
