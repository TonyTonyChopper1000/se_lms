import React, { useState } from 'react';
import { 
  Bell, 
  Book, 
  Calendar, 
  CheckCircle, 
  Clock, 
  MessageCircle, 
  Settings, 
  Star,
  Award,
  File,
  AlertTriangle,
  RefreshCw,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Individual notification component
const NotificationItem = ({ notification, onMarkAsRead, onDelete }) => {
  const icons = {
    course: <Book className="h-5 w-5" />,
    deadline: <Clock className="h-5 w-5" />,
    announcement: <Bell className="h-5 w-5" />,
    discussion: <MessageCircle className="h-5 w-5" />,
    achievement: <Award className="h-5 w-5" />,
    certificate: <File className="h-5 w-5" />,
    warning: <AlertTriangle className="h-5 w-5" />,
    update: <RefreshCw className="h-5 w-5" />,
    grade: <Star className="h-5 w-5" />,
  };

  return (
    <div className={`border-b border-gray-100 p-4 hover:bg-gray-50 transition-colors ${
      notification.isRead ? 'opacity-70' : ''
    }`}>
      <div className="flex items-start">
        {/* Icon */}
        <div className={`mr-4 p-2.5 rounded-full flex-shrink-0 ${
          notification.isRead 
            ? 'bg-gray-100 text-gray-500' 
            : `${getNotificationColor(notification.type)} text-white`
        }`}>
          {icons[notification.type] || <Bell className="h-5 w-5" />}
        </div>

        {/* Content */}
        <div className="flex-grow">
          <p className={`text-sm ${notification.isRead ? 'text-gray-500' : 'text-gray-800 font-medium'}`}>
            {notification.message}
          </p>
          
          {notification.actionLink && (
            <Link 
              to={notification.actionLink} 
              className="text-orange-500 hover:text-orange-600 text-sm mt-1 inline-block"
            >
              {notification.actionText}
            </Link>
          )}
          
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-gray-500">{notification.time}</p>
            
            <div className="flex space-x-2">
              {!notification.isRead && (
                <button 
                  onClick={() => onMarkAsRead(notification.id)}
                  className="text-gray-500 hover:text-orange-500 text-xs flex items-center"
                >
                  <CheckCircle className="h-3.5 w-3.5 mr-1" />
                  Mark as read
                </button>
              )}
              <button 
                onClick={() => onDelete(notification.id)}
                className="text-gray-500 hover:text-red-500 text-xs flex items-center"
              >
                <X className="h-3.5 w-3.5 mr-1" />
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Unread indicator */}
        {!notification.isRead && (
          <div className="ml-2 h-2.5 w-2.5 rounded-full bg-orange-500 flex-shrink-0"></div>
        )}
      </div>
    </div>
  );
};

// Helper to get notification color based on type
const getNotificationColor = (type) => {
  switch (type) {
    case 'course':
      return 'bg-blue-500';
    case 'deadline':
      return 'bg-red-500';
    case 'announcement':
      return 'bg-orange-500';
    case 'discussion':
      return 'bg-green-500';
    case 'achievement':
      return 'bg-purple-500';
    case 'certificate':
      return 'bg-teal-500';
    case 'warning':
      return 'bg-amber-500';
    case 'update':
      return 'bg-indigo-500';
    case 'grade':
      return 'bg-pink-500';
    default:
      return 'bg-gray-500';
  }
};

// Filter tabs component
const FilterTabs = ({ activeFilter, setActiveFilter, filters, unreadCounts }) => {
  return (
    <div className="flex overflow-x-auto pb-2 mb-4">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => setActiveFilter(filter.value)}
          className={`flex items-center px-4 py-2 mr-2 rounded-full whitespace-nowrap ${
            activeFilter === filter.value
              ? 'bg-orange-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          } transition-colors`}
        >
          {filter.icon}
          <span className="ml-2">{filter.label}</span>
          {unreadCounts[filter.value] > 0 && (
            <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
              activeFilter === filter.value
                ? 'bg-white text-orange-500'
                : 'bg-orange-100 text-orange-600'
            }`}>
              {unreadCounts[filter.value]}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

// Empty state component
const EmptyState = ({ filter }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="bg-orange-100 p-4 rounded-full mb-4">
        <Bell className="h-8 w-8 text-orange-500" />
      </div>
      <h3 className="text-lg font-medium text-gray-800 mb-2">No notifications</h3>
      <p className="text-gray-600 text-center max-w-sm">
        {filter === 'all' 
          ? "You don't have any notifications right now. Check back later!" 
          : `You don't have any ${filter} notifications at the moment.`}
      </p>
    </div>
  );
};

const NotificationPage = () => {
  // Dummy notifications data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'course',
      message: 'New lecture "Advanced JavaScript Concepts" has been added to your course "JavaScript Mastery".',
      time: '2 hours ago',
      isRead: false,
      actionLink: '/courses/1/lectures/12',
      actionText: 'View Lecture'
    },
    {
      id: 2,
      type: 'deadline',
      message: 'Reminder: Assignment "Data Visualization Project" is due tomorrow at 11:59 PM.',
      time: '5 hours ago',
      isRead: false,
      actionLink: '/courses/2/assignments/5',
      actionText: 'View Assignment'
    },
    {
      id: 3,
      type: 'discussion',
      message: 'Sarah replied to your question in the discussion forum.',
      time: '1 day ago',
      isRead: true,
      actionLink: '/courses/1/discussions/8',
      actionText: 'View Discussion'
    },
    {
      id: 4,
      type: 'announcement',
      message: 'Important announcement from your instructor in "UI/UX Design Principles" course.',
      time: '1 day ago',
      isRead: false,
      actionLink: '/courses/3/announcements',
      actionText: 'Read Announcement'
    },
    {
      id: 5,
      type: 'achievement',
      message: 'Congratulations! ',
      time: '2 days ago',
      isRead: true,
      actionLink: '/profile/achievements',
      actionText: 'View Achievements'
    },
    {
      id: 6,
      type: 'grade',
      message: 'Your assignment "Database Design" has been graded. You received 92%.',
      time: '3 days ago',
      isRead: false,
      actionLink: '/courses/4/grades',
      actionText: 'View Grade'
    },
    {
      id: 7,
      type: 'update',
      message: 'The platform will be undergoing maintenance on Saturday from 2-4 AM EST.',
      time: '3 days ago',
      isRead: true
    },
    {
      id: 8,
      type: 'certificate',
      message: 'Your certificate for "Python Data Science" course is ready to download.',
      time: '5 days ago',
      isRead: true,
      actionLink: '/certificates',
      actionText: 'Download Certificate'
    },
    {
      id: 9,
      type: 'warning',
      message: 'Your subscription will expire in 5 days. Renew now to avoid interruption.',
      time: '5 days ago',
      isRead: false,
      actionLink: '/subscription',
      actionText: 'Renew Subscription'
    },
    {
      id: 10,
      type: 'course',
      message: 'New course recommendation based on your interests: "Blockchain Development Fundamentals"',
      time: '1 week ago',
      isRead: true,
      actionLink: '/courses/15',
      actionText: 'View Course'
    }
  ]);

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter definitions
  const filters = [
    { label: 'All Notifications', value: 'all', icon: <Bell className="h-4 w-4" /> },
    { label: 'Courses', value: 'course', icon: <Book className="h-4 w-4" /> },
    { label: 'Deadlines', value: 'deadline', icon: <Calendar className="h-4 w-4" /> },
    { label: 'Discussions', value: 'discussion', icon: <MessageCircle className="h-4 w-4" /> },
    { label: 'Achievements', value: 'achievement', icon: <Award className="h-4 w-4" /> }
  ];

  // Calculate unread counts for each filter
  const calculateUnreadCounts = () => {
    const counts = { all: 0 };
    
    filters.forEach(filter => {
      if (filter.value !== 'all') {
        counts[filter.value] = notifications.filter(
          n => n.type === filter.value && !n.isRead
        ).length;
      }
    });
    
    counts.all = notifications.filter(n => !n.isRead).length;
    
    return counts;
  };

  const unreadCounts = calculateUnreadCounts();

  // Filter notifications based on active filter and search query
  const getFilteredNotifications = () => {
    return notifications.filter(notification => {
      // Filter by type
      const typeMatch = activeFilter === 'all' || notification.type === activeFilter;
      
      // Filter by search query
      const searchMatch = !searchQuery || 
        notification.message.toLowerCase().includes(searchQuery.toLowerCase());
      
      return typeMatch && searchMatch;
    });
  };

  const filteredNotifications = getFilteredNotifications();

  // Mark notification as read
  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id 
        ? { ...notification, isRead: true } 
        : notification
    ));
  };

  // Delete notification
  const handleDelete = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  // Mark all as read
  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, isRead: true })));
  };

  // Delete all read notifications
  const handleDeleteAllRead = () => {
    setNotifications(notifications.filter(notification => !notification.isRead));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Notifications</h1>
          <p className="text-orange-100 max-w-2xl mx-auto">
            Stay updated with your course progress, announcements, and activities.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Notification Header with Search and Actions */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative md:w-1/3">
                <input
                  type="text"
                  placeholder="Search notifications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button 
                  onClick={handleMarkAllAsRead}
                  disabled={!notifications.some(n => !n.isRead)}
                  className={`flex items-center text-sm px-3 py-1.5 rounded-lg ${
                    !notifications.some(n => !n.isRead)
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Mark all as read
                </button>
                
                <button 
                  onClick={handleDeleteAllRead}
                  disabled={!notifications.some(n => n.isRead)}
                  className={`flex items-center text-sm px-3 py-1.5 rounded-lg ${
                    !notifications.some(n => n.isRead)
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-red-50 text-red-600 hover:bg-red-100'
                  }`}
                >
                  <X className="h-4 w-4 mr-1" />
                  Delete read notifications
                </button>
                
                <Link 
                  to="/notification-settings" 
                  className="flex items-center text-sm px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  <Settings className="h-4 w-4 mr-1" />
                  Settings
                </Link>
              </div>
            </div>
            
            {/* Filter Tabs */}
            <div className="mt-6">
              <FilterTabs 
                activeFilter={activeFilter} 
                setActiveFilter={setActiveFilter}
                filters={filters}
                unreadCounts={unreadCounts}
              />
            </div>
          </div>
          
          {/* Notification List */}
          <div className="divide-y divide-gray-100">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map(notification => (
                <NotificationItem 
                  key={notification.id} 
                  notification={notification}
                  onMarkAsRead={handleMarkAsRead}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <EmptyState filter={activeFilter} />
            )}
          </div>
          
          {/* Load More Button - Could be replaced with pagination */}
          {filteredNotifications.length > 0 && (
            <div className="p-6 text-center">
              <button className="text-orange-500 hover:text-orange-600 font-medium">
                Load More Notifications
              </button>
            </div>
          )}
        </div>
        
        {/* Notification Preferences Card */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Notification Preferences</h2>
          <p className="text-gray-600 mb-6">
            Customize how and when you receive notifications to stay updated on what matters most to you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-full mr-3">
                  <Bell className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Email Notifications</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Receive important updates via email based on your preferences.
                  </p>
                  <Link 
                    to="/notification-settings/email" 
                    className="text-sm text-orange-500 hover:text-orange-600"
                  >
                    Configure Email Preferences
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-full mr-3">
                  <MessageCircle className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Push Notifications</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Get instant alerts for activities that require your attention.
                  </p>
                  <Link 
                    to="/notification-settings/push" 
                    className="text-sm text-orange-500 hover:text-orange-600"
                  >
                    Configure Push Notifications
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotificationPage;