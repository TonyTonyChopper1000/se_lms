import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen,
  Users,
  FileText,
  MessageSquare,
  BarChart2,
  Clock,
  Calendar,
  Settings,
  PlusCircle,
  Bell,
  HelpCircle,
  ChevronDown,
  Search,
  Edit,
  Trash2,
  MoreVertical,
  ThumbsUp,
  Eye,
  DollarSign,
  UserPlus,
  Award,
  AlertTriangle,
  CheckCircle,
  Video,
  Star,
  X
} from 'lucide-react';

// Sidebar component
const Sidebar = ({ activeItem }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart2 className="h-5 w-5" />, link: '/instructor/dashboard' },
    { id: 'courses', label: 'My Courses', icon: <BookOpen className="h-5 w-5" />, link: '/instructor/courses' },
    { id: 'students', label: 'Students', icon: <Users className="h-5 w-5" />, link: '/instructor/students' },
    { id: 'assignments', label: 'Assignments', icon: <FileText className="h-5 w-5" />, link: '/instructor/assignments' },
    { id: 'discussions', label: 'Discussions', icon: <MessageSquare className="h-5 w-5" />, link: '/instructor/discussions' },
    { id: 'schedule', label: 'Schedule', icon: <Calendar className="h-5 w-5" />, link: '/instructor/schedule' },
    { id: 'earnings', label: 'Earnings', icon: <DollarSign className="h-5 w-5" />, link: '/instructor/earnings' },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" />, link: '/instructor/settings' },
  ];

  return (
    <div className="bg-gray-900 text-white w-64 flex-shrink-0 hidden md:block">
      <div className="p-6">
        <Link to="/instructor/dashboard" className="flex items-center">
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-2 rounded-md mr-3">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">LearningHub</h2>
            <p className="text-xs text-gray-400">Instructor Portal</p>
          </div>
        </Link>
      </div>
      
      <nav className="mt-2">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className={`flex items-center px-6 py-3 text-sm ${
                  activeItem === item.id
                    ? 'bg-orange-500 text-white font-medium'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="px-6 py-4 mt-auto">
        <Link
          to="/instructor/support"
          className="flex items-center text-sm text-gray-400 hover:text-white"
        >
          <HelpCircle className="h-5 w-5 mr-2" />
          Help & Support
        </Link>
      </div>
    </div>
  );
};

// Header component
const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm px-6 py-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {/* Mobile sidebar toggle */}
          <button
            onClick={toggleSidebar}
            className="mr-4 text-gray-500 md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Search bar */}
          <div className="relative md:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Create new course button */}
          <Link
            to="/instructor/courses/create"
            className="hidden sm:flex items-center text-sm bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Create Course
          </Link>
          
          {/* Notifications */}
          <button className="relative text-gray-500 hover:text-gray-700">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center transform translate-x-1 -translate-y-1">
              3
            </span>
          </button>
          
          {/* User menu */}
          <div className="relative">
            <button className="flex items-center">
              <img
                src="/api/placeholder/40/40"
                alt="User profile"
                className="h-8 w-8 rounded-full object-cover border-2 border-orange-200"
              />
              <div className="ml-2 hidden sm:block text-left" >
                <p className="text-sm font-medium text-gray-700">Prof. Sarah Johnson</p>
                <p className="text-xs text-gray-500">Data Science Instructor</p>
              </div>
              <ChevronDown className="h-4 w-4 ml-2 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Stats Card component
const StatsCard = ({ icon, label, value, change, changeType }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-lg mr-4 ${
          label.includes('Revenue') ? 'bg-green-100 text-green-600' :
          label.includes('Students') ? 'bg-blue-100 text-blue-600' :
          label.includes('Courses') ? 'bg-orange-100 text-orange-600' :
          label.includes('Rating') ? 'bg-yellow-100 text-yellow-600' :
          'bg-purple-100 text-purple-600'
        }`}>
          {icon}
        </div>
        <div>
          <p className="text-gray-500 text-sm">{label}</p>
          <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        </div>
      </div>
      <div className={`text-sm flex items-center ${
        changeType === 'positive' ? 'text-green-600' :
        changeType === 'negative' ? 'text-red-600' :
        'text-gray-600'
      }`}>
        {changeType === 'positive' && <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>}
        {changeType === 'negative' && <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>}
        <span>{change} from last month</span>
      </div>
    </div>
  );
};

// Course Card component
const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 object-cover"
        />
        <div className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded ${
          course.status === 'Published' ? 'bg-green-500 text-white' : 
          course.status === 'Draft' ? 'bg-gray-500 text-white' : 
          'bg-orange-500 text-white'
        }`}>
          {course.status}
        </div>
      </div>
      <div className="p-5 flex-grow">
        <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2">
          {course.title}
        </h3>
        <div className="flex items-center mb-3 text-sm">
          <div className="flex items-center text-yellow-400 mr-2">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-gray-700">{course.rating}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Users className="h-4 w-4 mr-1" />
            <span>{course.students} students</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {course.description}
        </p>
      </div>
      <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
        <div className="text-gray-600 text-sm">
          {course.lessons} lessons • {course.duration}
        </div>
        <div className="flex space-x-2">
          <Link
            to={`/instructor/courses/${course.id}/edit`}
            className="p-1.5 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <Edit className="h-4 w-4" />
          </Link>
          <button
            className="p-1.5 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Assignment Row component
const AssignmentRow = ({ assignment }) => {
  const dueDateObj = new Date(assignment.dueDate);
  const today = new Date();
  const isOverdue = dueDateObj < today && assignment.status !== 'Graded';
  const isDueSoon = dueDateObj > today && dueDateObj - today < 3 * 24 * 60 * 60 * 1000; // 3 days
  
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="py-3 px-4">
        <div className="flex items-center">
          <FileText className="h-5 w-5 text-gray-400 mr-3" />
          <div>
            <p className="font-medium text-gray-800">{assignment.title}</p>
            <p className="text-xs text-gray-500">{assignment.course}</p>
          </div>
        </div>
      </td>
      <td className="py-3 px-4 text-sm">
        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          isOverdue ? 'bg-red-100 text-red-800' :
          isDueSoon ? 'bg-yellow-100 text-yellow-800' :
          'bg-blue-100 text-blue-800'
        }`}>
          {isOverdue ? 'Overdue' :
           isDueSoon ? 'Due soon' :
           assignment.status}
        </div>
      </td>
      <td className="py-3 px-4 text-sm text-gray-500">
        {dueDateObj.toLocaleDateString()}
      </td>
      <td className="py-3 px-4 text-sm text-gray-500">
        {assignment.submissions} / {assignment.totalStudents}
      </td>
      <td className="py-3 px-4 text-right">
        <Link
          to={`/instructor/assignments/${assignment.id}`}
          className="text-orange-500 hover:text-orange-600 font-medium text-sm"
        >
          Review
        </Link>
      </td>
    </tr>
  );
};

// Message Row component
const MessageRow = ({ message }) => {
  return (
    <div className="border-b border-gray-200 py-4 last:border-0">
      <div className="flex">
        <img
          src={message.avatar}
          alt={message.name}
          className="h-10 w-10 rounded-full object-cover mr-4"
        />
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-gray-800">{message.name}</h4>
              <p className="text-xs text-gray-500">
                {message.course} • {message.time}
              </p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-2">{message.content}</p>
          <div className="flex mt-3 space-x-3">
            <button className="text-orange-500 hover:text-orange-600 text-sm flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              Reply
            </button>
            <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center">
              <ThumbsUp className="h-4 w-4 mr-1" />
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Alert component
const Alert = ({ type, message }) => {
  return (
    <div className={`mb-6 p-4 rounded-lg flex items-start ${
      type === 'warning' ? 'bg-amber-50 text-amber-800' :
      type === 'info' ? 'bg-blue-50 text-blue-800' :
      type === 'success' ? 'bg-green-50 text-green-800' :
      'bg-red-50 text-red-800'
    }`}>
      <div className="flex-shrink-0 mr-3">
        {type === 'warning' && <AlertTriangle className="h-5 w-5" />}
        {type === 'info' && <Bell className="h-5 w-5" />}
        {type === 'success' && <CheckCircle className="h-5 w-5" />}
        {type === 'error' && <AlertTriangle className="h-5 w-5" />}
      </div>
      <div className="flex-grow text-sm">{message}</div>
    </div>
  );
};

// Event Card component
const EventCard = ({ event }) => {
  return (
    <div className="flex items-start p-3 rounded-lg hover:bg-gray-50">
      <div className={`flex-shrink-0 p-2 rounded-lg mr-3 text-white ${
        event.type === 'live' ? 'bg-red-500' :
        event.type === 'deadline' ? 'bg-amber-500' :
        'bg-blue-500'
      }`}>
        {event.type === 'live' && <Video className="h-5 w-5" />}
        {event.type === 'deadline' && <Clock className="h-5 w-5" />}
        {event.type === 'meeting' && <Users className="h-5 w-5" />}
      </div>
      <div className="flex-grow">
        <p className="font-medium text-gray-800">{event.title}</p>
        <p className="text-xs text-gray-500">{event.time}</p>
        <div className="mt-2 flex items-center">
          <Calendar className="h-4 w-4 text-gray-400 mr-1" />
          <span className="text-xs text-gray-500">{event.course}</span>
        </div>
      </div>
    </div>
  );
};

// Top Student Card component
const TopStudentCard = ({ student }) => {
  return (
    <div className="flex items-center p-3 rounded-lg hover:bg-gray-50">
      <img
        src={student.avatar}
        alt={student.name}
        className="h-10 w-10 rounded-full object-cover mr-3"
      />
      <div className="flex-grow">
        <p className="font-medium text-gray-800">{student.name}</p>
        <p className="text-xs text-gray-500">{student.email}</p>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex items-center text-yellow-400">
          <Star className="h-4 w-4 fill-current" />
          <span className="ml-1 text-gray-700 text-sm">{student.rating}</span>
        </div>
        <p className="text-xs text-gray-500">{student.courses} courses</p>
      </div>
    </div>
  );
};

// Mobile Sidebar component
const MobileSidebar = ({ isOpen, toggleSidebar, activeItem }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart2 className="h-5 w-5" />, link: '/instructor/dashboard' },
    { id: 'courses', label: 'My Courses', icon: <BookOpen className="h-5 w-5" />, link: '/instructor/courses' },
    { id: 'students', label: 'Students', icon: <Users className="h-5 w-5" />, link: '/instructor/students' },
    { id: 'assignments', label: 'Assignments', icon: <FileText className="h-5 w-5" />, link: '/instructor/assignments' },
    { id: 'discussions', label: 'Discussions', icon: <MessageSquare className="h-5 w-5" />, link: '/instructor/discussions' },
    { id: 'schedule', label: 'Schedule', icon: <Calendar className="h-5 w-5" />, link: '/instructor/schedule' },
    { id: 'earnings', label: 'Earnings', icon: <DollarSign className="h-5 w-5" />, link: '/instructor/earnings' },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" />, link: '/instructor/settings' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex md:hidden">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75" onClick={toggleSidebar}></div>
      <div className="relative flex flex-col w-80 max-w-sm bg-gray-900 h-full">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <Link to="/instructor/dashboard" className="flex items-center">
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-2 rounded-md mr-3">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">LearningHub</h2>
                <p className="text-xs text-gray-400">Instructor Portal</p>
              </div>
            </Link>
            <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <nav className="flex-grow overflow-y-auto">
          <ul className="py-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className={`flex items-center px-6 py-3 text-sm ${
                    activeItem === item.id
                      ? 'bg-orange-500 text-white font-medium'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                  onClick={toggleSidebar}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-6 border-t border-gray-800">
          <Link
            to="/instructor/support"
            className="flex items-center text-sm text-gray-400 hover:text-white"
            onClick={toggleSidebar}
          >
            <HelpCircle className="h-5 w-5 mr-2" />
            Help & Support
          </Link>
        </div>
      </div>
    </div>
  );
};

const InstructorsDashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const activeItem = 'dashboard'; // This would be determined by the current route

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sample data for the dashboard
  const stats = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      label: 'Total Revenue',
      value: '$12,845',
      change: '+15%',
      changeType: 'positive'
    },
    {
      icon: <Users className="h-6 w-6" />,
      label: 'Total Students',
      value: '1,248',
      change: '+8%',
      changeType: 'positive'
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      label: 'Active Courses',
      value: '12',
      change: '+2',
      changeType: 'positive'
    },
    {
      icon: <Star className="h-6 w-6" />,
      label: 'Avg. Rating',
      value: '4.8',
      change: '+0.2',
      changeType: 'positive'
    }
  ];

  const courses = [
    {
      id: 1,
      title: 'Python for Data Science and Machine Learning Bootcamp',
      description: 'Learn how to use Python for data science, machine learning, and data visualization. This course covers NumPy, Pandas, Matplotlib, Seaborn, and machine learning libraries.',
      image: '/api/placeholder/300/200',
      rating: 4.9,
      students: 1453,
      lessons: 36,
      duration: '28h 45m',
      status: 'Published'
    },
    {
      id: 2,
      title: 'Advanced SQL for Data Analysis',
      description: 'Master complex SQL queries, window functions, CTEs, and advanced data analysis techniques. Learn to optimize database performance and solve real-world problems.',
      image: '/api/placeholder/300/200',
      rating: 4.7,
      students: 856,
      lessons: 24,
      duration: '18h 20m',
      status: 'Published'
    },
    {
      id: 3,
      title: 'Deep Learning with TensorFlow 2.0',
      description: 'Build neural networks and deep learning models with TensorFlow 2.0. Cover CNNs, RNNs, GANs, and implement projects like image classification and natural language processing.',
      image: '/api/placeholder/300/200',
      rating: 4.8,
      students: 972,
      lessons: 42,
      duration: '32h 10m',
      status: 'Draft'
    },
    {
      id: 4,
      title: 'Statistical Methods for Data Analysis',
      description: 'Learn essential statistical methods for data analysis including hypothesis testing, regression analysis, ANOVA, and more. Apply these techniques to real datasets.',
      image: '/api/placeholder/300/200',
      rating: 4.6,
      students: 728,
      lessons: 28,
      duration: '21h 30m',
      status: 'Under Review'
    }
  ];

  const assignments = [
    {
      id: 1,
      title: 'Final Project: Predictive Modeling',
      course: 'Python for Data Science',
      status: 'Active',
      dueDate: '2025-03-28T23:59:59',
      submissions: 34,
      totalStudents: 48
    },
    {
      id: 2,
      title: 'Database Optimization Challenge',
      course: 'Advanced SQL',
      status: 'Active',
      dueDate: '2025-03-24T23:59:59',
      submissions: 12,
      totalStudents: 30
    },
    {
      id: 3,
      title: 'Neural Network Architecture Design',
      course: 'Deep Learning with TensorFlow',
      status: 'Graded',
      dueDate: '2025-03-15T23:59:59',
      submissions: 41,
      totalStudents: 42
    },
    {
      id: 4,
      title: 'Statistical Analysis Report',
      course: 'Statistical Methods',
      status: 'Active',
      dueDate: '2025-04-05T23:59:59',
      submissions: 8,
      totalStudents: 36
    }
  ];

  const messages = [
    {
      id: 1,
      name: 'Michael Chen',
      avatar: '/api/placeholder/100/100',
      course: 'Python for Data Science',
      time: '2 hours ago',
      content: 'Im having trouble with the final project. Can you provide some guidance on how to approach the time series forecasting component?'
    },
    {
      id: 2,
      name: 'Emily Rodriguez',
      avatar: '/api/placeholder/100/100',
      course: 'Advanced SQL',
      time: '1 day ago',
      content: 'Thank you for the detailed feedback on my assignment. Ive implemented your suggestions and the query performance has improved significantly!'
    },
    {
      id: 3,
      name: 'David Kim',
      avatar: '/api/placeholder/100/100',
      course: 'Deep Learning with TensorFlow',
      time: '2 days ago',
      content: 'Is there a recommended approach for handling imbalanced datasets in the image classification project? Im seeing some bias in my model predictions.'
    }
  ];

  const events = [
    {
      id: 1,
      type: 'live',
      title: 'Live Q&A Session',
      time: 'Today, 3:00 PM - 4:00 PM',
      course: 'Python for Data Science'
    },
    {
      id: 2,
      type: 'deadline',
      title: 'Assignment Deadline',
      time: 'Mar 24, 11:59 PM',
      course: 'Advanced SQL'
    },
    {
      id: 3,
      type: 'meeting',
      title: 'Office Hours',
      time: 'Tomorrow, 1:00 PM - 3:00 PM',
      course: 'All Courses'
    }
  ];

  const topStudents = [
    {
      id: 1,
      name: 'Jessica Wang',
      email: 'jessica@example.com',
      avatar: '/api/placeholder/100/100',
      rating: 4.9,
      courses: 3
    },
    {
      id: 2,
      name: 'Robert Johnson',
      email: 'robert@example.com',
      avatar: '/api/placeholder/100/100',
      rating: 4.8,
      courses: 2
    },
    {
      id: 3,
      name: 'Sophia Martinez',
      email: 'sophia@example.com',
      avatar: '/api/placeholder/100/100',
      rating: 4.7,
      courses: 4
    }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <Sidebar activeItem={activeItem} />
      
      {/* Mobile Sidebar */}
      <MobileSidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        activeItem={activeItem} 
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto py-8 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800">Instructor Dashboard</h1>
              <p className="text-gray-600">Welcome back, Prof. Sarah Johnson! Here's an overview of your teaching activities.</p>
            </div>
            
            {/* Alert Message */}
            <Alert 
              type="info" 
              message="Schedule update: Upcoming platform maintenance on Saturday, March 30th from 2-4 AM EST. Please plan your activities accordingly."
            />
            
            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <StatsCard 
                  key={index}
                  icon={stat.icon}
                  label={stat.label}
                  value={stat.value}
                  change={stat.change}
                  changeType={stat.changeType}
                />
              ))}
            </div>
            
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content - 2/3 width */}
              <div className="lg:col-span-2 space-y-8">
                {/* Recent Courses */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Your Courses</h2>
                    <Link 
                      to="/instructor/courses" 
                      className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                    >
                      View All Courses
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </div>
                
                {/* Pending Assignments */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Pending Assignments</h2>
                    <Link 
                      to="/instructor/assignments" 
                      className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                    >
                      View All Assignments
                    </Link>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Assignment
                            </th>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Due Date
                            </th>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Submissions
                            </th>
                            <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {assignments.map((assignment) => (
                            <AssignmentRow key={assignment.id} assignment={assignment} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                
                {/* Recent Messages */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Recent Discussion Messages</h2>
                    <Link 
                      to="/instructor/discussions" 
                      className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                    >
                      View All Discussions
                    </Link>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
                    {messages.map((message) => (
                      <MessageRow key={message.id} message={message} />
                    ))}
                    
                    {messages.length === 0 && (
                      <div className="text-center py-8">
                        <MessageSquare className="h-10 w-10 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500">No messages yet</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Sidebar - 1/3 width */}
              <div className="space-y-8">
                {/* Upcoming Schedule */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Upcoming Schedule</h2>
                    <Link 
                      to="/instructor/schedule" 
                      className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                    >
                      View Calendar
                    </Link>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
                    <div className="space-y-1">
                      {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </div>
                    
                    {events.length === 0 && (
                      <div className="text-center py-8">
                        <Calendar className="h-10 w-10 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500">No upcoming events</p>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Top Performing Students */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Top Students</h2>
                    <Link 
                      to="/instructor/students" 
                      className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                    >
                      View All Students
                    </Link>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
                    <div className="space-y-2">
                      {topStudents.map((student) => (
                        <TopStudentCard key={student.id} student={student} />
                      ))}
                    </div>
                    
                    {topStudents.length === 0 && (
                      <div className="text-center py-8">
                        <Users className="h-10 w-10 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500">No students yet</p>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Quick Actions */}
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
                  
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        to="/instructor/courses/create"
                        className="bg-orange-50 text-orange-600 hover:bg-orange-100 rounded-lg p-4 text-center transition-colors"
                      >
                        <PlusCircle className="h-6 w-6 mx-auto mb-2" />
                        <span className="text-sm font-medium">New Course</span>
                      </Link>
                      
                      <Link
                        to="/instructor/assignments/create"
                        className="bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg p-4 text-center transition-colors"
                      >
                        <FileText className="h-6 w-6 mx-auto mb-2" />
                        <span className="text-sm font-medium">New Assignment</span>
                      </Link>
                      
                      <Link
                        to="/instructor/announcements/create"
                        className="bg-purple-50 text-purple-600 hover:bg-purple-100 rounded-lg p-4 text-center transition-colors"
                      >
                        <Bell className="h-6 w-6 mx-auto mb-2" />
                        <span className="text-sm font-medium">Announcement</span>
                      </Link>
                      
                      <Link
                        to="/instructor/live-sessions/create"
                        className="bg-green-50 text-green-600 hover:bg-green-100 rounded-lg p-4 text-center transition-colors"
                      >
                        <Video className="h-6 w-6 mx-auto mb-2" />
                        <span className="text-sm font-medium">Live Session</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InstructorsDashboardPage;