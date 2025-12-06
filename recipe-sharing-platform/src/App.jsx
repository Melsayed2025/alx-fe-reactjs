import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
// 🌟 استيراد المكون الجديد
import AddRecipeForm from './components/AddRecipeForm'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        
        {/* 🌟 شريط التنقل المحدث 🌟 */}
        <nav className="bg-white p-4 shadow-md flex justify-between items-center">
          
          {/* رابط الصفحة الرئيسية */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition"
          >
            🏠 منصة مشاركة الوصفات
          </Link>
          
          {/* رابط إضافة وصفة جديدة */}
          <Link 
            to="/add-recipe" 
            className="bg-indigo-500 text-white py-2 px-4 rounded-lg font-medium 
                       hover:bg-indigo-600 transition duration-150"
          >
            ➕ أضف وصفتك الآن
          </Link>
        </nav>
        
        {/* تحديد المسارات */}
        <Routes>
          {/* مسار الصفحة الرئيسية */}
          <Route path="/" element={<HomePage />} />
          
          {/* مسار تفاصيل الوصفة */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          
          {/* 🌟 المسار الجديد لنموذج الإضافة 🌟 */}
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;