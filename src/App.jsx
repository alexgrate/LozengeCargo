import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import ShippingQuote from './components/ShippingQuote'
import Testimonials from './components/Testimonials'
import ImpactNumbers from './components/ImpactNumbers'
import Newsletter from './components/Newsletter'
import CallToAction from './components/CallToAction'

import ShipNowForm from './components/ShipNowForm';

import AboutCompany from './components/AboutCompany';
import Stats from './components/Stats';
import CoreValues from './components/CoreValues';
import TeamSection from './components/TeamSection';
import GetStarted from './components/GetStarted';

import CustomerService from './components/CustomerService';

import TrackingPage from './components/TrackingPackage';

import QuoteBanner from './components/QuoteBanner';
import ShippingQuoteCalculator from './components/ShippingQuoteCalculator';
import WhyChooseQuoteSystem from './components/WhyChooseQuoteSystem';

import ClaimSteps from './components/ClaimSteps';

import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';

import Footer from './components/Footer'

import ScrollToTop from './components/ScrolToTop';

const Home = () => (
  <div className='max-w-7xl mx-auto'>
    <HeroSection />
    <WhyChooseUs />
    <Services />
    <HowItWorks />
    <ShippingQuote />
    <Testimonials />
    <ImpactNumbers />
    <Newsletter />
    <CallToAction />
  </div>
);

const ShipNow = () => (
  <div className='max-w-7xl mx-auto'>
    <ShipNowForm />
  </div>
);

const TrackShipment = () => (
  <div className='max-w-7xl mx-auto'>
    <TrackingPage />
  </div>
);


const About = () => (
  <div className='max-w-7xl mx-auto'>
    <AboutCompany />
    <Stats />
    <CoreValues />
    <TeamSection />
    <GetStarted />
  </div>
);

const Support = () => (
  <div className='max-w-7xl mx-auto'>
    <CustomerService />
  </div>
);

const Login = () => (
  <div className='max-w-7xl mx-auto'>
    <LoginForm />
  </div>
);

const SignUp = () => (
  <div className='max-w-7xl mx-auto'>
    <SignUpForm />
  </div>
);

const GetQuote = () => (
  <div className='max-w-7xl mx-auto bg-blue-50'>
    <QuoteBanner />
    <ShippingQuoteCalculator />
    <WhyChooseQuoteSystem />
  </div>
)

const FileClaim = () => (
  <div className='max-w-7xl mx-auto'>
    <ClaimSteps />
  </div>
)

const Privacy_Policy = () => (
  <div className='max-w-7xl mx-auto'>
    <PrivacyPolicy />
  </div>
)

const Terms_Conditions = () => (
  <div className='max-w-7xl mx-auto'>
    <TermsConditions />
  </div>
)

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className='max-w-7xl mx-auto'> 
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ShipNow' element={<ShipNow />} />
          <Route path='/TrackShipment' element={<TrackShipment />} />
          <Route path='/About' element={<About />} />
          <Route path='/Support' element={<Support />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/GetQuote' element={<GetQuote />} />
          <Route path='/FileClaim' element={<FileClaim />} />
          <Route path='/PrivacyPolicy' element={<Privacy_Policy />} />
          <Route path='/Terms&Conditions' element={<Terms_Conditions />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App