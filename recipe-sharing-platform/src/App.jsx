import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    // يجب تغليف التطبيق بالـ Router
    <Router>
      <div className="min-h-screen bg-gray-50">
        
        {/* يمكن إضافة شريط تنقل بسيط هنا */}
        <nav className="bg-white p-4 shadow-md">
          <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition">
            🏠 عودة للصفحة الرئيسية
          </Link>
        </nav>
        
        {/* تحديد المسارات */}
        <Routes>
          {/* مسار الصفحة الرئيسية */}
          <Route path="/" element={<HomePage />} />
          
          {/* مسار تفاصيل الوصفة: يتم تمرير الـ ID كمعامل */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;