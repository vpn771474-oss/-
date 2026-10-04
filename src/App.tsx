import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingSearchPanel } from './components/BookingSearchPanel';
import { FleetSection } from './components/FleetSection';
import { FeaturedVehicle } from './components/FeaturedVehicle';
import { RentalOptions } from './components/RentalOptions';
import { ExtrasSection } from './components/ExtrasSection';
import { HowItWorks } from './components/HowItWorks';
import { LocationsSection } from './components/LocationsSection';
import { EditorialAutomotive } from './components/EditorialAutomotive';
import { UseCasesSection } from './components/UseCasesSection';
import { WhyMasar } from './components/WhyMasar';
import { RentalRequirements } from './components/RentalRequirements';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { VehicleDetailModal } from './components/VehicleDetailModal';
import { Vehicle } from './data/rentalData';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppContent() {
  const { isRTL } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVehicleForBooking, setSelectedVehicleForBooking] = useState<Vehicle | null>(null);
  const [inspectedVehicle, setInspectedVehicle] = useState<Vehicle | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [searchCriteria, setSearchCriteria] = useState<{
    pickupLocation: string;
    dropoffLocation: string;
    pickupDate: string;
    pickupTime: string;
    dropoffDate: string;
    dropoffTime: string;
  } | null>(null);

  // Handlers
  const handleOpenBooking = () => {
    setSelectedVehicleForBooking(null);
    setIsBookingOpen(true);
  };

  const handleExploreFleet = () => {
    const el = document.getElementById('fleet');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setSelectedVehicleForBooking(vehicle);
    setIsBookingOpen(true);
  };

  const handleViewVehicleDetails = (vehicle: Vehicle) => {
    setInspectedVehicle(vehicle);
  };

  const handleSearch = (criteria: {
    pickupLocation: string;
    dropoffLocation: string;
    pickupDate: string;
    pickupTime: string;
    dropoffDate: string;
    dropoffTime: string;
  }) => {
    setSearchCriteria(criteria);
    const el = document.getElementById('fleet');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleExtra = (extraId: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId) ? prev.filter((id) => id !== extraId) : [...prev, extraId]
    );
  };

  const handleSelectRentalOption = (_optionTitle: string) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectLocation = (locationTitle: string) => {
    if (searchCriteria) {
      setSearchCriteria({ ...searchCriteria, pickupLocation: locationTitle });
    }
    const el = document.getElementById('booking-panel');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromUseCase = (_categoryKeyword: string) => {
    handleExploreFleet();
  };

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#FFFFFF] text-[#090909] antialiased selection:bg-[#DC2626] selection:text-white flex flex-col"
    >
      {/* 01 Floating Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onExploreFleet={handleExploreFleet}
      />

      <main className="flex-1">
        {/* 02 Hero & 03 Automotive Visuals */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onExploreFleet={handleExploreFleet}
        />

        {/* 04 Booking / Rental Search */}
        <BookingSearchPanel onSearch={handleSearch} />

        {/* 05 Fleet */}
        <FleetSection
          onSelectVehicle={handleSelectVehicle}
          onViewDetails={handleViewVehicleDetails}
        />

        {/* 06 Featured Vehicle */}
        <FeaturedVehicle onViewDetails={handleViewVehicleDetails} />

        {/* 07 Rental Options */}
        <RentalOptions onSelectOption={handleSelectRentalOption} />

        {/* 08 Extras */}
        <ExtrasSection
          selectedExtras={selectedExtras}
          onToggleExtra={handleToggleExtra}
          onContinueToBooking={() => setIsBookingOpen(true)}
        />

        {/* 09 How It Works */}
        <HowItWorks />

        {/* 10 Locations */}
        <LocationsSection onSelectLocation={handleSelectLocation} />

        {/* 11 Editorial Automotive Section with Glass Tint Dark */}
        <EditorialAutomotive onExploreFleet={handleExploreFleet} />

        {/* 12 Use Cases */}
        <UseCasesSection onSelectCategory={handleSelectCategoryFromUseCase} />

        {/* 13 Why Masar */}
        <WhyMasar />

        {/* 14 Rental Requirements */}
        <RentalRequirements />

        {/* 15 About */}
        <AboutSection />

        {/* 16 FAQ */}
        <FaqSection />

        {/* 17 Contact */}
        <ContactSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* 18 Footer */}
      <Footer />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialVehicle={selectedVehicleForBooking}
        initialCriteria={searchCriteria}
      />

      <VehicleDetailModal
        vehicle={inspectedVehicle}
        onClose={() => setInspectedVehicle(null)}
        onBookVehicle={handleSelectVehicle}
      />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
