import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArticleCard from './ArticleCard';
import { categories, articles } from './categoryData';

const MagazinePage = () => {
  const location = useLocation();
  const searchQuery = location.state?.searchQuery || '';
  const [activeCategory, setActiveCategory] = useState('');
  const [expandedArticles, setExpandedArticles] = useState({});
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const allArticles = Object.values(articles).flat();
      const filtered = allArticles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.preview.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredArticles(filtered);
      setActiveCategory('');
    } else if (activeCategory) {
      setFilteredArticles(articles[activeCategory] || []);
    } else {
      setFilteredArticles(Object.values(articles).flat());
    }
  }, [searchQuery, activeCategory]);

  const handleToggleExpand = (articleId) => {
    setExpandedArticles(prev => ({
      ...prev,
      [articleId]: !prev[articleId]
    }));
  };

  return (
    <div className="min-h-screen  bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mt-32 mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-800"
          >
            Magazine Médical
          </motion.h1>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCategory(
                  activeCategory === category.id ? '' : category.id
                )}
                className={`flex items-center p-2 rounded-lg text-left transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-cyan-300 text-white transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-cyan-50 hover:scale-105 shadow-sm'
                }`}
              >
                <div className="text-xl mr-2">{category.icon}</div>
                <span className="text-xs font-medium">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
           {filteredArticles.map((article) => (
            <ArticleCard
             key={article.id}
             article={article}
             />
            ))}
          </div>

        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <h3 className="text-xl font-medium text-gray-600">
              Aucun article trouvé pour {searchQuery ? `"${searchQuery}"` : 'cette catégorie'}
            </h3>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MagazinePage;