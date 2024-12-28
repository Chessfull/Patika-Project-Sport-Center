# Patika PowerFull Fitness Training Website 🏋️‍♂️

A modern, responsive website for a fitness training center featuring class schedules, trainer profiles, BMI calculator, and appointment booking functionality.

## 📋 Overview

PowerFull is a comprehensive fitness website that provides information about various fitness classes, trainer profiles, equipment purchases, and allows users to calculate their BMI and book appointments. The website features a clean, modern design with smooth animations and responsive layout.

## 🚀 Features

- **Responsive Navigation Bar**: Transparent to solid background transition on scroll
- **Dynamic Class Information**: Interactive class selection with schedule display
- **BMI Calculator**: Real-time BMI calculation with visual indicator
- **Trainer Profiles**: Interactive trainer cards with hover effects
- **Equipment Shop**: Product showcase with shopping cart functionality
- **Contact Form**: Appointment booking system with form validation
- **Google Maps Integration**: Location display with custom styling
- **Mobile Responsive**: Optimized for devices down to 576px width

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: 
  - Flexbox and Grid layouts
  - Custom properties (variables)
  - Media queries for responsiveness
  - Transitions and animations
- **JavaScript**: 
  - DOM manipulation
  - Event handling
  - Dynamic content loading
  - Form validation
- **Google Maps API**: Location services integration


## 🏃‍♂️ Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Chessfull/patika-project-sport-center.git
```

2. Navigate to the project directory:
```bash
cd ...
```

3. Open `index.html` in your web browser to view the website.


## 📐 Project Structure

```
Patika Project Powerfull Sport Center/
│
├── index.html
├── style.css
├── script.js
│
└── images/
    ├── logo.png
    ├── hero-man.jpg
    ├── trainer1.jpg
    ├── trainer2.jpg
    └── ...
```

## 🔧 Configuration

To use the Google Maps functionality, you need to:
1. Replace the API key in `script.js`:
```javascript
script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
```
