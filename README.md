# Tax Loss Harvesting Tool

A responsive React + TypeScript application for tax loss harvesting simulation with modern UI/UX and animations.

## Features

### Core Functionality
- **Capital Gains Visualization**: Pre and post-harvesting capital gains comparison
- **Interactive Holdings Table**: Select assets to simulate harvesting
- **Real-time Calculations**: Immediate updates to projected tax savings
- **Persistence**: User selections saved to localStorage

### Enhanced UI/UX
- **Dark/Light Mode**: Fully themed interface with smooth transitions
- **Comprehensive Animations**: Fade-in/slide effects for components and interactive elements
- **Mobile Responsive**: Optimized layouts for all screen sizes
- **Custom Components**: Enhanced checkboxes and selection feedback
- **Sophisticated Error Handling**: User-friendly error states with retry functionality

## Tech Stack
- React 18
- TypeScript
- CSS Animations
- Context API for state management

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd tax-loss-harvesting
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── CapitalGainsCard.tsx
│   ├── HoldingsTable.tsx
│   └── NotesDisclaimer.tsx
├── contexts/           # React context providers
│   ├── AppContext.tsx  # Application state management
│   └── ThemeContext.tsx # Theme management
├── services/           # API and data services
│   └── api.ts          # Mock API implementation
├── types/              # TypeScript definitions
│   ├── holdings.ts
│   └── capital-gains.ts
└── App.tsx             # Main application component
```

## Features In Detail

### Theme Switching
The application supports both light and dark modes with smooth transitions between themes. The theme preference is stored in localStorage for persistence.

### Animations
- **Component Entry**: Fade-in and slide animations for content loading
- **Interactive Elements**: Hover/click effects for buttons and selectable rows
- **Theme Transitions**: Smooth color changes when switching themes
- **Logo Enhancement**: Subtle glow and pulse animations in dark mode

### Mobile Responsiveness
The UI is fully responsive with optimized layouts for:
- Large desktop displays
- Standard laptop screens
- Tablets
- Mobile phones

### Data Management
- Centralized state using Context API
- Persistence with localStorage
- Mock API simulations with realistic delay/errors

## License
MIT
