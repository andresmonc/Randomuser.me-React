# Random User Generator - React App

A client-side React application for generating random user data. This application has been converted from a Node.js/MongoDB server application to a pure client-side React app.

## Features

- Generate random user data with customizable options
- Filter by gender and nationality
- Reproducible results using seed values
- Responsive design
- No backend required - runs entirely in the browser

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm build
```

Builds the app for production to the `build` folder.

## API Data Structure

The `api/` folder contains data files organized by version (1.0, 1.1, 1.2, 1.3, 1.4) with country-specific data in subdirectories. Each country folder contains:

- `inject.js` - Country-specific data injection logic
- `lists/` - Text files with names, cities, streets, etc.

This structure is maintained to allow easy updates to the data files for each API version.

## Supported Nationalities

- AU (Australia)
- BR (Brazil)
- CA (Canada)
- CH (Switzerland)
- DE (Germany)
- DK (Denmark)
- ES (Spain)
- FI (Finland)
- FR (France)
- GB (United Kingdom)
- IE (Ireland)
- IN (India)
- IR (Iran)
- MX (Mexico)
- NL (Netherlands)
- NO (Norway)
- NZ (New Zealand)
- RS (Serbia)
- TR (Turkey)
- UA (Ukraine)
- US (United States)

## Usage Options

- **Results**: Number of users to generate (1-5000)
- **Gender**: Filter by male/female or show both
- **Nationality**: Filter by specific country or show all
- **Seed**: Provide a seed value for reproducible results

## Technology Stack

- React 18
- React Scripts (Create React App)
- Vanilla CSS

## How to contact us
If you have any questions, feel free to ask us on our Twitter page [@randomapi](https://twitter.com/randomapi).
