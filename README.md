# Automated Medicine Dispenser (QR Code Based)

A Node.js and Express-based web application for an automated medicine dispenser system using QR code authentication and payment. The system allows users to log in, scan or generate QR codes for authentication, view and manage their medicine bills, and make payments securely.

## Features

- **User Authentication:** Simple login system for access control.
- **QR Code Generation:** Generate QR codes for user login and payment.
- **QR Code Scanning:** Scan QR codes to authenticate and connect users.
- **Medicine Management:** View, add, and manage medicines for each user.
- **Billing:** Automatic calculation of total bill based on selected medicines.
- **Payment Integration:** Generate payment QR codes and update payment status.
- **Status Tracking:** Real-time status updates for connection and payment.

## Project Structure

```
├── data.js                # Sample user and medicine data
├── index.js               # Main Express server
├── package.json           # Project dependencies and scripts
├── vercel.json            # Vercel deployment config
├── views/                 # HTML views for UI
│   ├── bill.html
│   ├── doPayment.html
│   ├── login.html
│   ├── paymentQR.html
│   ├── qrCodeGenrator.html
│   └── qrCodeScanner.html
└── README.md
```

## Setup & Installation

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd automated-macine-dispencer
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the server:**
   ```sh
   npm start
   ```
4. **Open in browser:**
   Visit [http://localhost:3002](http://localhost:3002)

## Usage

- **Login:** Go to `/login` and use `admin`/`admin` as credentials.
- **Generate QR:** Visit `/gen` to generate a QR code for login.
- **Scan QR:** Visit `/scan` to scan a QR code and connect.
- **View Bill:** Go to `/bill` to see and manage medicines and billing.
- **Payment:** Go to `/payment` to pay via QR code. `/do/payment` simulates payment status update.

## API Endpoints

- `GET /api/gen/string` – Get the QR string for login
- `GET /api/gen/status` – Get connection status
- `POST /api/status` – Update connection status
- `POST /api/get/medicine` – Get medicines for a user
- `GET /api/payment/status` – Get payment status
- `POST /api/payment/status` – Update payment status
- `GET /api/gen/user` – Get connected user info

## Dependencies

- express
- body-parser
- nodemon (dev)
- qrcode

## Deployment

This project is ready for deployment on [Vercel](https://vercel.com/) using the provided `vercel.json`.

## License

MIT
