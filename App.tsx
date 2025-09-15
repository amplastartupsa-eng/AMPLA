import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ShippingCalculator from './components/ShippingCalculator';
import VideoTutorials from './components/VideoTutorials';
import AddressSelection from './components/AddressSelection';
import VehicleSelection from './components/VehicleSelection';
import Payment from './components/Payment';
import Advantages from './components/Advantages';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

export default function App() {
  const [isAdminView, setIsAdminView] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-2xl mx-auto bg-gray-800 shadow-2xl shadow-yellow-500/10">
        <Header />
        
        {isAdminView ? (
          <AdminPanel onExit={() => setIsAdminView(false)} />
        ) : (
          <main>
            <Hero />
            <div className="p-4 md:p-6 space-y-12">
              <HowItWorks />
              <ShippingCalculator />
              <VideoTutorials />
              <AddressSelection />
              <VehicleSelection />
              <Payment />
              <Advantages />
              <CallToAction />
            </div>
          </main>
        )}

        <Footer onAdminClick={() => setIsAdminView(true)} />
      </div>
    </div>
  );
}
