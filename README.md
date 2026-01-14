# Brightline Medical System Website

A modern, responsive website for Brightline Medical System - a premium medical equipment supplier based in Legazpi City, Albay, Philippines.

## Features

- **Multi-page Design**: Home, Equipment Catalog, and Medical Supplies pages
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean medical theme with teal and lime green brand colors
- **Equipment Catalog**: Comprehensive listing of CE-certified medical equipment
- **Contact Form**: Integrated inquiry system
- **Smooth Animations**: Professional transitions and hover effects

## Technologies Used

- React 18
- React Router DOM 6
- CSS3 with custom properties
- Google Fonts (Sora & Outfit)

## Installation

1. Extract the project folder
2. Navigate to the project directory:
   ```bash
   cd brightline-medical-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `build` folder, ready for deployment.

## Project Structure

```
brightline-medical-website/
├── public/
│   └── index.html
├── src/
│   ├── data/
│   │   └── equipmentData.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Equipment.js
│   │   └── Supplies.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Pages

### Home Page
- Hero section with company introduction
- About Brightline Medical System
- Features and services
- Featured equipment preview
- Contact form

### Equipment Page
- Complete catalog of medical equipment
- Category filtering
- Detailed specifications
- Technical documentation
- Request quote functionality

### Supplies Page
- Medical supplies catalog (to be populated)
- Coming soon placeholder

## Customization

### Update Contact Form
Replace `YOUR_FORM_ID` in the contact form action with your actual Formspree ID or another form handling service.

### Add Medical Supplies
Edit `/src/pages/Supplies.js` to add your medical supplies catalog when ready.

### Brand Colors
The brand colors are defined in `/src/App.css` using CSS custom properties:
- Primary Teal: `#00CEC5`
- Accent Lime: `#C3F73A`

## Contact Information

**Brightline Medical System**
- Location: Legazpi City, Albay, Philippines
- Phone: 0992-568-2337 / 0961-389-9651
- Email: brightlinemedicalsystem@ymail.com

## License

© 2025 Brightline Medical System. All Rights Reserved.
