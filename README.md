# Document Compression Project

## Overview

This project provides a web-based tool using React to compress documents by reducing their quality, effectively decreasing their file size. It supports various image formats including JPEG, PNG, WebP, and BMP. This can be particularly useful for saving storage space, optimizing images for web usage, or reducing the bandwidth needed for transferring images over the internet.

## Features

- **Compression of JPEG, PNG, WebP, and BMP formats**
- **Adjustable quality settings** to control the level of compression
- **Batch processing** to handle multiple files at once
- **User-friendly interface** built with React

## Requirements

- Node.js
- npm or yarn

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/document-compression.git
    cd document-compression
    ```

2. Install the required dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

## Usage

1. Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

2. Open your browser and navigate to http://localhost:3000.

3. Upload the images you want to compress using the interface.

4. Adjust the quality settings as needed.

5. Download the compressed images.

## Project Structure

document-compression/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── ImageUploader.js
│ │ ├── ImageCompressor.js
│ │ └── ...
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json


## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- React
- Pillow
