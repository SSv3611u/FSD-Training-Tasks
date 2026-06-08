# College Event Management System

A comprehensive web application for managing college events with user registration, event browsing, and gallery features.

## Features

- **Home Page**: Hero section, event highlights, and featured events preview
- **Events Page**: Browse all events with search and filter functionality
- **Event Registration**: User-friendly registration form for multiple event participation
- **Event Schedule**: Complete timeline of all upcoming events
- **Gallery**: Photo gallery with category-based filtering
- **FAQ Section**: Comprehensive Q&A about events and registration
- **Contact Page**: Contact form and event coordinator details
- **Responsive Design**: Fully responsive layout for all devices

## Bootstrap Components Used

- Navbar with collapsible menu
- Cards and grid system
- Forms and input groups
- Tables with striped and hover effects
- Accordion for FAQ
- Modals for event details
- Alerts and badges
- Progress indicators
- Carousel for testimonials

## Technologies Used

- HTML5
- CSS3 (Custom Styling)
- Bootstrap 5.3
- JavaScript (Vanilla)
- Font Awesome 6.4 Icons

## File Structure

```
college-event-management/
├── index.html
├── events.html
├── registration.html
├── schedule.html
├── gallery.html
├── faq.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── events.js
│   ├── registration.js
│   ├── gallery.js
│   └── contact.js
└── images/
    └── (placeholder images)
```

## Key Features

### 1. Event Management
- Display up to 8+ different events
- Each event includes: date, time, venue, participants, difficulty level
- Event categories: Technical, Cultural, Sports, Workshop

### 2. User Registration
- Multi-event registration support
- Form validation with Bootstrap validation classes
- Success notifications
- Data persistence using localStorage

### 3. Event Schedule
- Responsive table with status badges
- Time-based organization
- Easy to read format

### 4. Gallery
- Image grid layout
- Category-based filtering
- Modal preview for full-size viewing
- Smooth hover animations

### 5. FAQ Section
- Accordion-based layout
- 9+ comprehensive FAQs
- Easy navigation

## Responsive Breakpoints

- **Mobile** (<576px): Single-column layout, collapsible navbar
- **Tablet** (≥768px): Two-column layouts
- **Desktop** (≥992px): Multi-column layouts

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## How to Use

1. Clone or download the project
2. Open `index.html` in a web browser
3. Navigate through different pages using the navbar
4. Register for events using the registration form
5. View event gallery and FAQs

## Forms & Validation

### Registration Form
- Student name (required)
- Roll number (required)
- Email (required, validated)
- Mobile number (required, validated)
- Branch selection (required)
- Multiple event selection (required)
- Experience level
- Team size
- Additional information
- Terms & conditions acceptance (required)

### Contact Form
- Name (required)
- Email (required)
- Subject (required)
- Category selection
- Message (required)
- Contact agreement checkbox

## Customization

All colors, fonts, and layouts can be customized through `css/style.css`. The color scheme uses a gradient from `#667eea` to `#764ba2`.

## Future Enhancements

- Backend API integration
- User authentication system
- Payment gateway for event fees
- Email notifications
- Calendar integration
- Event feedback system
- Analytics dashboard

## Author

Created for FSD Lab Practice - 2024

## License

Open source - Feel free to use and modify
