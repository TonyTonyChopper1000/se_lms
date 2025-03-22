import React, { useState } from 'react';
import { 
  Bell, 
  Send, 
  Plus, 
  Trash2, 
  Edit, 
  Calendar, 
  Users, 
  Book, 
  AlertCircle,
  Info,
  CheckCircle,
  X,
  ChevronDown,
  Filter,
  Search,
  Eye
} from 'lucide-react';

const NotificationsManagement = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreatingNotification, setIsCreatingNotification] = useState(false);
  
  // New notification form state
  const [newNotification, setNewNotification] = useState({
    title: '',
    message: '',
    type: 'info',
    audience: 'all',
    scheduledDate: '',
    scheduledTime: ''
  });

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: 'Platform Maintenance',
      message: 'Our platform will be undergoing scheduled maintenance on Saturday, March 30th from 2-4 AM EST. During this time, some features may be unavailable.',
      type: 'warning',
      audience: 'all',
      sent: true,
      scheduled: false,
      date: '2025-03-22T10:30:00',
      readCount: 342,
      totalRecipients: 1245
    },
    {
      id: 2,
      title: 'New Course Launch',
      message: 'We are excited to announce the launch of our new "Advanced Data Science" course. Early bird registrations are now open with a 20% discount.',
      type: 'announcement',
      audience: 'students',
      sent: true,
      scheduled: false,
      date: '2025-03-20T14:15:00',
      readCount: 512,
      totalRecipients: 980
    },
    {
      id: 3,
      title: 'End of Month Reports',
      message: 'Instructors, please ensure you submit your end of month reports by March 31st. This is important for timely processing of payments.',
      type: 'info',
      audience: 'instructors',
      sent: true,
      scheduled: false,
      date: '2025-03-18T09:45:00',
      readCount: 98,
      totalRecipients: 124
    },
    {
      id: 4,
      title: 'Important: Account Security',
      message: 'We\'ve noticed some unusual login attempts across our platform. Please ensure your account has a strong password and enable two-factor authentication if available.',
      type: 'alert',
      audience: 'all',
      sent: true,
      scheduled: false,
      date: '2025-03-15T16:20:00',
      readCount: 876,
      totalRecipients: 2346
    },
    {
      id: 5,
      title: 'Summer Courses Preview',
      message: 'Get a sneak peek at our upcoming summer courses. Register your interest now to be notified when registrations open.',
      type: 'announcement',
      audience: 'students',
      sent: false,
      scheduled: true,
      date: '2025-04-05T10:00:00',
      readCount: 0,
      totalRecipients: 0
    },
    {
      id: 6,
      title: 'Dashboard Redesign',
      message: 'We\'ve updated our dashboard with new features and improved user interface. Check out the changes and let us know your feedback!',
      type: 'info',
      audience: 'all',
      sent: true,
      scheduled: false,
      date: '2025-03-10T11:30:00',
      readCount: 1024,
      totalRecipients: 2346
    },
    {
      id: 7,
      title: 'Instructor Workshop',
      message: 'Join our virtual workshop on "Effective Online Teaching Strategies" on April 10th. Registration is free for all platform instructors.',
      type: 'announcement',
      audience: 'instructors',
      sent: false,
      scheduled: true,
      date: '2025-04-01T08:00:00',
      readCount: 0,
      totalRecipients: 0
    }
  ];

  // Filter notifications based on selected tab and search term
  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = 
      notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = 
      selectedTab === 'all' ||
      (selectedTab === 'sent' && notification.sent) ||
      (selectedTab === 'scheduled' && notification.scheduled);
    
    return matchesSearch && matchesTab;
  });

  // Get notification icon based on type
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'info':
        return <Info className="h-5 w-5 text-blue-500" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-amber-500" />;
      case 'alert':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'announcement':
        return <Bell className="h-5 w-5 text-purple-500" />;
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  // Get audience icon
  const getAudienceIcon = (audience) => {
    switch (audience) {
      case 'students':
        return <Users className="h-5 w-5 text-blue-500" />;
      case 'instructors':
        return <Book className="h-5 w-5 text-orange-500" />;
      case 'all':
      default:
        return <Users className="h-5 w-5 text-green-500" />;
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Handle creating a new notification
  const handleCreateNotification = () => {
    setIsCreatingNotification(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNotification(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('New notification:', newNotification);
    
    // Reset form and close modal
    setNewNotification({
      title: '',
      message: '',
      type: 'info',
      audience: 'all',
      scheduledDate: '',
      scheduledTime: ''
    });
    setIsCreatingNotification(false);
  };

  return (
    <div>
      {/* Top Action Bar */}
      <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search notifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
        
        <button 
          onClick={handleCreateNotification}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Create Notification
        </button>
      </div>

      {/* Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setSelectedTab('all')}
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              selectedTab === 'all'
                ? 'border-orange-500 text-orange-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            All Notifications
          </button>
          <button
            onClick={() => setSelectedTab('sent')}
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              selectedTab === 'sent'
                ? 'border-orange-500 text-orange-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Sent
          </button>
          <button
            onClick={() => setSelectedTab('scheduled')}
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              selectedTab === 'scheduled'
                ? 'border-orange-500 text-orange-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Scheduled
          </button>
        </nav>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map(notification => (
          <div 
            key={notification.id} 
            className={`bg-white rounded-xl shadow-sm overflow-hidden border-l-4 ${
              notification.type === 'info' 
                ? 'border-blue-500' 
                : notification.type === 'warning'
                  ? 'border-amber-500'
                  : notification.type === 'alert'
                    ? 'border-red-500'
                    : 'border-purple-500'
            }`}
          >
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-full ${
                    notification.type === 'info' 
                      ? 'bg-blue-100' 
                      : notification.type === 'warning'
                        ? 'bg-amber-100'
                        : notification.type === 'alert'
                          ? 'bg-red-100'
                          : 'bg-purple-100'
                  }`}>
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{notification.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    
                    <div className="flex items-center mt-3 space-x-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{formatDate(notification.date)}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        {getAudienceIcon(notification.audience)}
                        <span className="ml-1 capitalize">{notification.audience}</span>
                      </div>
                      {notification.sent && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Eye className="h-4 w-4 mr-1" />
                          <span>{notification.readCount} / {notification.totalRecipients} read</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <button className="p-1.5 text-gray-500 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-100">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button className="p-1.5 text-gray-500 hover:text-red-600 transition-colors rounded-full hover:bg-gray-100">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3 flex justify-between items-center">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                notification.sent 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {notification.sent ? 'Sent' : 'Scheduled'}
              </span>
              <button className="text-sm text-gray-500 hover:text-gray-700">
                View Details
              </button>
            </div>
          </div>
        ))}
        
        {/* Empty state */}
        {filteredNotifications.length === 0 && (
          <div className="bg-white rounded-xl p-12 text-center">
            <div className="mx-auto h-12 w-12 text-gray-400">
              <Bell className="h-12 w-12" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No notifications found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {selectedTab === 'all' 
                ? "You haven't created any notifications yet."
                : selectedTab === 'sent'
                  ? "You haven't sent any notifications yet."
                  : "You don't have any scheduled notifications."}
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={handleCreateNotification}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                <Plus className="h-5 w-5 mr-2" />
                Create Notification
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Create Notification Modal */}
      {isCreatingNotification && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Create New Notification</h3>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          value={newNotification.title}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                          required
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          value={newNotification.message}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                          required
                        ></textarea>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                            Type
                          </label>
                          <select
                            id="type"
                            name="type"
                            value={newNotification.type}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                          >
                            <option value="info">Information</option>
                            <option value="warning">Warning</option>
                            <option value="alert">Alert</option>
                            <option value="announcement">Announcement</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="audience" className="block text-sm font-medium text-gray-700 mb-1">
                            Audience
                          </label>
                          <select
                            id="audience"
                            name="audience"
                            value={newNotification.audience}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                          >
                            <option value="all">All Users</option>
                            <option value="students">Students Only</option>
                            <option value="instructors">Instructors Only</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center">
                          <input
                            id="schedule"
                            name="schedule"
                            type="checkbox"
                            className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                          />
                          <label htmlFor="schedule" className="ml-2 block text-sm text-gray-900">
                            Schedule for later
                          </label>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="scheduledDate" className="block text-sm font-medium text-gray-700 mb-1">
                            Date
                          </label>
                          <input
                            type="date"
                            id="scheduledDate"
                            name="scheduledDate"
                            value={newNotification.scheduledDate}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="scheduledTime" className="block text-sm font-medium text-gray-700 mb-1">
                            Time
                          </label>
                          <input
                            type="time"
                            id="scheduledTime"
                            name="scheduledTime"
                            value={newNotification.scheduledTime}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-600 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Send Now
                </button>
                <button
                  type="button"
                  onClick={() => setIsCreatingNotification(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsManagement;