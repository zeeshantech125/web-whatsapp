import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

interface LandingPageProps {
  onStartChat: () => void;
}

const PROFILE = {
  name: "Ikram Malik ❤️",
  subtitle: "WhatsApp Group Invite",
  avatar: "https://images.assettype.com/nationalherald/2019-08/e691a894-705d-4054-b7f3-d3bd9141037f/sundas_and_anjali.jfif",
};

export function LandingPage({ onStartChat }: LandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <img
              src={PROFILE.avatar}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-green-500"
            />
          </div>
          
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            {PROFILE.name}
          </h1>
          <p className="text-gray-600 mb-8">
            {PROFILE.subtitle}
          </p>
          
          <button
            onClick={onStartChat}
            className="bg-[#25D366] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-600 transition-colors"
          >
            Join Chat
          </button>
          
          <div className="mt-12 text-gray-600">
            <p>Don't have WhatsApp yet?</p>
            <a href="#" className="text-[#25D366] hover:underline">
              Download
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}