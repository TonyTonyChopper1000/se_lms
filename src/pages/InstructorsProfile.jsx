import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Users,
  FileText,
  MessageSquare,
  BarChart2,
  Calendar,
  Settings,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  ArrowLeft
} from 'lucide-react';

const InstructorsProfile = () => {
  // Sample instructor data
  const instructor = {
    name: "Prof. Sarah Johnson",
    title: "Data Science Instructor",
    image: "/api/placeholder/200/200",
    email: "sarah.johnson@learninghub.com",
    phone: "+1 (555) 123-4567",
    address: "123 University Avenue, San Francisco, CA 94107",
    bio: "Data science professional with over 10 years of industry experience. Specializing in machine learning, statistical analysis, and data visualization. Passionate about making complex concepts accessible to students of all backgrounds.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnsondata",
      facebook: "https://facebook.com/sarahjohnson",
      youtube: "https://youtube.com/c/sarahjohnson"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/instructor/dashboard" className="flex items-center text-gray-500 hover:text-gray-700">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Dashboard
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-2 rounded-full">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <h2 className="ml-2 text-xl font-bold text-gray-800">LearningHub</h2>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Profile Content */}
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-16">
            <div className="flex flex-col items-center">
              <img 
                src={instructor.image} 
                alt={instructor.name} 
                className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg" 
              />
              <h1 className="mt-4 text-3xl font-bold text-white">{instructor.name}</h1>
              <p className="text-orange-100">{instructor.title}</p>
            </div>
          </div>

          {/* Profile Information */}
          <div className="p-6">
            <div className="md:flex md:space-x-8">
              {/* Left Column - Bio */}
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-xl font-bold text-gray-800 mb-4">About</h2>
                <p className="text-gray-600">{instructor.bio}</p>
              </div>

              {/* Right Column - Contact Info */}
              <div className="md:w-1/3">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Contact Information</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Mail className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">Email</p>
                        <a href={`mailto:${instructor.email}`} className="text-gray-800 hover:text-orange-500">
                          {instructor.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Phone className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">Phone</p>
                        <a href={`tel:${instructor.phone}`} className="text-gray-800 hover:text-orange-500">
                          {instructor.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">Address</p>
                        <p className="text-gray-800">{instructor.address}</p>
                      </div>
                    </li>
                  </ul>

                  <h2 className="text-lg font-bold text-gray-800 mt-8 mb-4">Social Profiles</h2>
                  <div className="flex space-x-3">
                    {instructor.socialLinks.linkedin && (
                      <a 
                        href={instructor.socialLinks.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-200 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {instructor.socialLinks.twitter && (
                      <a 
                        href={instructor.socialLinks.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-200 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {instructor.socialLinks.facebook && (
                      <a 
                        href={instructor.socialLinks.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-200 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    )}
                    {instructor.socialLinks.youtube && (
                      <a 
                        href={instructor.socialLinks.youtube} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-200 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white transition-colors"
                      >
                        <Youtube className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InstructorsProfile;