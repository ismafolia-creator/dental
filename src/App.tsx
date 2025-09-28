import React from 'react';
import { Mic, Calendar, Users, Shield, Instagram, Twitter, PlayCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Denta<span className="text-cyan-400">Speak AI</span>
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
                Testimonials
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors">
                Book a Demo
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                AI Voice Assistant for
                <br />
                <span className="text-gray-800">Modern Dental</span>
                <br />
                <span className="text-gray-800">Clinics</span>
              </h1>
              
              <div className="space-y-2 text-lg text-gray-600">
                <p>Streamline Appointments,</p>
                <p>Automate Communication,</p>
                <p>Enhance Patient Experience</p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 text-gray-600">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="text-gray-700 font-medium">Appointment Scheduling & Reminders</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 text-gray-600">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-gray-700 font-medium">Patient FAQs & Support</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 text-gray-600">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-gray-700 font-medium">Secure Data Integration</span>
              </div>
            </div>
          </div>

          {/* Right Content - Gradient Orb */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-yellow-200 via-pink-300 to-blue-400 opacity-90 blur-sm"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-400 via-purple-300 to-pink-200 opacity-80 blur-xs"></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-bl from-cyan-200 via-blue-300 to-indigo-400 opacity-70"></div>
              <div className="absolute inset-12 rounded-full bg-gradient-to-tr from-pink-200 via-yellow-100 to-blue-200 opacity-60"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <div>
            <a href="#privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#terms" className="text-gray-600 hover:text-gray-900 transition-colors">
              Terms of Service
            </a>
            
            <div className="flex space-x-4">
              <a href="#instagram" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#twitter" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#video" className="text-gray-400 hover:text-gray-600 transition-colors">
                <PlayCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;