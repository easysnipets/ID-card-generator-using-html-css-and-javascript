# ID Card Generator

This is a web application for generating professional ID cards. Users can input their personal details, upload a photo, and generate an ID card with a QR code. The application also allows users to download the ID card as an image.

## Features

- Input personal details (Name, Role, Email, Phone, Employee ID).
- Upload a profile photo.
- Generate a QR code containing ID card data.
- Download the ID card as an image.

## Files

### 1. `index.html`
The main HTML file containing the structure of the application.

### 2. `main.js`
Handles the application logic, including:
- Form submission.
- QR code generation using `qrcode` library.
- Photo upload handling.
- Download functionality using `html2canvas`.

### 3. `counter.js`
A module for handling a simple counter functionality, useful for click event tracking.

### 4. `images.jpg` and `javascript.svg`
Images used within the project.

## Installation

1. Clone the repository or download the files.
2. Open `index.html` in a web browser.

## Dependencies

The application uses the following libraries:
- [QRCode](https://github.com/soldair/node-qrcode): For generating QR codes.
- [html2canvas](https://html2canvas.hertzen.com/): For rendering the ID card to an image.

Ensure to include these dependencies in your project.

## How to Use

1. Open the application in a browser.
2. Fill in the form with your details.
3. Upload a photo.
4. Click on "Generate ID Card."
5. Download the ID card by clicking the "Download" button.

## License

This project is open source and available under the MIT License.

---

Happy ID Card Generating!
