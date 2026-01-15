# SEN ASSIGNMENT - Lozenge Cargo Logistics System

**Name:** Aigbodion Dominion Eromosele 
**Matric Number:** 25/17970
**GitHub Repository:** https://github.com/alexgrate/LozengeCargo  
**Live Demo:** https://lozenge-cargo.vercel.app/

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Software Development Life Cycle (SDLC)](#software-development-life-cycle-sdlc)
3. [Technology Stack](#technology-stack)
4. [Features](#features)
5. [Installation & Setup](#installation--setup)
6. [Project Structure](#project-structure)

---

## Project Overview

Lozenge Cargo is a modern logistics web application designed to streamline cargo management, shipment tracking, and delivery services. The platform provides an intuitive interface for customers to book shipments, track packages, and manage their logistics needs efficiently.

**Project Type:** Web Application  
**Current Status:** Frontend Implementation (React.js)  
**Deployment Platform:** Vercel

---

## Software Development Life Cycle (SDLC)

This project follows the **Agile SDLC Model** with iterative development phases.

### 1. Planning Phase

**Objective:** Define the scope and requirements of the Lozenge Cargo system.

**Activities:**
- Identified target users: logistics companies, customers, and administrators
- Defined core business problem: Need for a modern, user-friendly cargo management system
- Established project goals: Create an accessible web platform for cargo booking and tracking
- Determined project scope: Initial focus on frontend with plans for backend integration
- Resource planning: Technology selection (React.js, modern UI libraries)

**Deliverables:**
- Project charter
- Feasibility study
- Resource allocation plan
- Timeline and milestones

**Key Decisions:**
- Platform: Web-based application for maximum accessibility
- Development approach: Frontend-first, with backend integration in future phases
- Deployment strategy: Cloud-based hosting (Vercel)

---

### 2. Requirements Analysis Phase

**Functional Requirements:**
- **User Registration/Login:** Users can create accounts and authenticate
- **Shipment Booking:** Interface for booking new cargo shipments
- **Package Tracking:** Real-time tracking of shipment status
- **Dashboard:** User dashboard displaying shipment history and status
- **Rate Calculator:** Tool to estimate shipping costs
- **Contact System:** Customer support and inquiry features
- **Responsive Design:** Mobile and desktop compatibility

**Non-Functional Requirements:**
- **Performance:** Page load time < 3 seconds
- **Usability:** Intuitive navigation and clean UI/UX
- **Scalability:** Architecture that supports future backend integration
- **Security:** Secure data handling practices
- **Accessibility:** WCAG 2.1 compliance for inclusive design
- **Browser Compatibility:** Support for modern browsers (Chrome, Firefox, Safari, Edge)

**User Stories:**
1. As a customer, I want to book a shipment online so that I can save time
2. As a customer, I want to track my package in real-time so that I know when it will arrive
3. As a customer, I want to calculate shipping costs before booking
4. As an admin, I want to manage shipment data efficiently

**Requirements Documentation:**
- Use case diagrams
- User flow charts
- Functional specifications document
- UI/UX requirements

---

### 3. Design Phase

#### 3.1 System Architecture

**Architecture Pattern:** Multi-Page Application (MPA)

**Application Structure:**
```
Frontend (React.js)
├── Multiple HTML Pages (Server-Side Rendered or Static)
├── Page-Specific Components
├── Shared Components (Header, Footer, etc.)
├── Routing (Traditional page navigation)
└── Static Assets (Images, CSS, JS)
```

**Page Architecture:**
- Each route corresponds to a separate page/view
- Traditional browser navigation between pages
- Independent page loads with shared components
- SEO-friendly structure with multiple HTML pages

**Future Architecture (Full Stack):**
```
Frontend (React MPA) ←→ Backend API (Node.js/Python) ←→ Database (PostgreSQL/MongoDB)
                ↓
        Static Site Generation / SSR
```

**Key Architectural Decisions:**
- **Multi-Page Approach:** Better SEO, faster initial load per page
- **Shared Components:** Header, Footer, Navigation reused across pages
- **Independent Pages:** Each page can load independently
- **Traditional Routing:** Browser-native navigation between pages


#### 3.2 UI/UX Design

**Design Principles:**
- Clean and modern interface
- Logistics-themed color scheme
- Intuitive navigation structure
- Mobile-first responsive design
- Consistent branding elements

**Key Pages Designed:**
- Homepage/Landing page
- Shipment booking form
- Tracking page
- User dashboard
- Services page
- Contact page
- About page

**Design Tools Used:**
- Figma for wireframes
- React component libraries for UI elements

#### 3.3 Database Design (Planned for Backend Phase)

**Entities:**
- Users
- Shipments
- Tracking_Events
- Addresses
- Payments

**Entity Relationship:**
```
Users (1) -----> (M) Shipments
Shipments (1) -----> (M) Tracking_Events
Shipments (M) -----> (1) Addresses (Origin)
Shipments (M) -----> (1) Addresses (Destination)
```

#### 3.4 Technical Design Decisions

**Frontend Framework:** React.js
- Reason: Component-based architecture, large ecosystem, excellent performance

**Styling Approach:** CSS Modules / Styled Components / Tailwind CSS
- Reason: Modular styling, maintainability

**State Management:** React Hooks (useState, useContext) / Redux (if needed)
- Reason: Appropriate for current scope

**Routing:** React Router
- Reason: Standard for SPA navigation

**Deployment:** Vercel
- Reason: Seamless React deployment, CDN, automatic HTTPS

---

### 4. Implementation/Development Phase

**Development Environment Setup:**
- Node.js and npm installed
- React application initialized using Create React App / Vite
- Version control with Git and GitHub
- Code editor: VS Code

**Component Development:**

**Key Components Implemented:**
1. **NavigationBar Component**
   - Responsive navigation menu
   - Logo and branding
   - Mobile hamburger menu

2. **HomePage Component**
   - Hero section with call-to-action
   - Service highlights
   - Customer testimonials

3. **BookingForm Component**
   - Multi-step form for shipment details
   - Form validation
   - User input handling

4. **TrackingComponent**
   - Package tracking interface
   - Status display
   - Timeline visualization

5. **Dashboard Component**
   - User shipment overview
   - Statistics display
   - Quick actions

6. **Footer Component**
   - Links to pages
   - Contact information
   - Social media links

**Naming Conventions Used:**
- Components: PascalCase (e.g., `BookingForm`, `TrackingComponent`)
- Files: camelCase or kebab-case (e.g., `bookingForm.jsx`, `booking-form.jsx`)
- CSS Classes: kebab-case (e.g., `nav-bar`, `hero-section`)
- Functions: camelCase (e.g., `handleSubmit`, `fetchTrackingData`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)

**Code Structure:**
```
src/
├── components/
│   ├── NavigationBar/
│   │   ├── NavigationBar.jsx
│   │   └── NavigationBar.css
│   ├── BookingForm/
│   │   ├── BookingForm.jsx
│   │   └── BookingForm.css
│   ├── TrackingComponent/
│   └── Dashboard/
├── pages/
│   ├── HomePage.jsx
│   ├── TrackingPage.jsx
│   └── ContactPage.jsx
├── utils/
│   └── helpers.js
├── App.jsx
└── index.js
```

**Version Control:**
- Repository initialized with Git
- Regular commits with descriptive messages
- Branching strategy: main/development branches
- Code pushed to GitHub

**Development Practices:**
- Component-based development
- Reusable code principles
- Clean code standards
- Commented code where necessary

---

### 5. Testing Phase

**Testing Strategy:**

**Unit Testing:**
- Individual component testing
- Function logic testing
- Props validation

**Integration Testing:**
- Component interaction testing
- Router navigation testing
- State management flow

**User Interface Testing:**
- Visual regression testing
- Responsive design testing across devices
- Browser compatibility testing

**User Acceptance Testing (UAT):**
- User feedback collection
- Usability testing sessions
- A/B testing for UI improvements

**Testing Tools:**
- Jest (unit testing)
- React Testing Library
- Browser DevTools
- Manual testing across devices

**Test Cases:**
1. Navigation between pages works correctly
2. Forms validate user input properly
3. Responsive design adapts to screen sizes
4. Buttons and links function as expected
5. Page load performance meets requirements

**Bug Tracking:**
- Issues logged in GitHub Issues
- Prioritization: Critical, High, Medium, Low
- Bug fixing and retesting

---

### 6. Deployment Phase

**Deployment Platform:** Vercel

**Deployment Process:**
1. Code pushed to GitHub repository
2. Vercel connected to GitHub repo
3. Automatic deployment on push to main branch
4. Build process executed
5. Application deployed to production URL

**Deployment Configuration:**
- Build command: `npm run build`
- Output directory: `build` or `dist`
- Environment variables configured (if needed)
- Custom domain setup (optional)

**Production URL:** https://lozenge-cargo.vercel.app/

**Continuous Deployment:**
- Automatic deployments on git push
- Preview deployments for pull requests
- Rollback capability

---

### 7. Maintenance Phase

**Ongoing Activities:**

**Monitoring:**
- Performance monitoring
- User analytics tracking
- Error logging and monitoring

**Updates:**
- Bug fixes based on user reports
- Feature enhancements
- Security updates
- Dependency updates

**Future Development Plans:**
1. **Backend Integration:**
   - REST API development
   - Database implementation
   - Authentication system
   - Payment gateway integration

2. **Feature Additions:**
   - Real-time tracking with GPS
   - Email notifications
   - SMS alerts
   - Admin panel
   - Reporting and analytics

3. **Performance Optimization:**
   - Code splitting
   - Lazy loading
   - Image optimization
   - Caching strategies

**Maintenance Schedule:**
- Weekly: Dependency updates check
- Monthly: Performance review
- Quarterly: Feature planning and implementation
- Ongoing: Bug fixes and user support

---

## Technology Stack

### Frontend
- **Framework:** React.js
- **Language:** JavaScript (ES6+)
- **Styling:** CSS3 / Tailwind CSS / Styled Components
- **Routing:** React Router
- **State Management:** React Hooks / Context API
- **Build Tool:** Vite / Create React App
- **Package Manager:** npm / yarn

### Deployment & Hosting
- **Hosting:** Vercel
- **Version Control:** Git & GitHub
- **CI/CD:** Vercel automatic deployments

### Future Technologies (Backend Phase)
- **Backend:** Python + Django
- **Database:** PostgreSQL
- **Authentication:** JWT 
- **API:** RESTful API 

---

## Features

### Current Features (Frontend)
- ✅ Responsive landing page
- ✅ Service information pages
- ✅ Shipment booking interface
- ✅ Package tracking interface
- ✅ User dashboard layout
- ✅ Contact form
- ✅ About page
- ✅ Mobile-friendly design
- ✅ Modern UI/UX

### Planned Features (Backend Integration)
- ⏳ User authentication and authorization
- ⏳ Real-time package tracking
- ⏳ Payment processing
- ⏳ Email notifications
- ⏳ Admin dashboard
- ⏳ Analytics and reporting
- ⏳ API integration

---

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/lozenge-cargo.git
cd lozenge-cargo
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm start
# or
yarn start
```

4. **Open in browser**
```
http://localhost:3000
```

### Build for Production
```bash
npm run build
# or
yarn build
```

---

## Project Structure
```
lozenge-cargo/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── NavigationBar/
│   │   ├── BookingForm/
│   │   ├── TrackingComponent/
│   │   └── Dashboard/
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── TrackingPage.jsx
│   │   └── ContactPage.jsx
│   ├── utils/
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── .gitignore
```

---

## Screenshots

[Add screenshots of your application here showing:]
- Homepage
- Booking form
- Tracking interface
- Dashboard
- Mobile responsive views

---

## Contributing

This is an academic project. For suggestions or improvements, please open an issue or submit a pull request.

---

## License

This project is created for educational purposes as part of SEN course requirements.

---

## Contact

**Developer:** Aigbodion Dominion Eromosele
**Email:** alexgrate606@gmail.com 
**GitHub:** [@yourusername](https://github.com/alexgrate)

---

## Acknowledgments

- SEN 201 Course Instructors
- React.js Documentation
- Vercel for hosting services
