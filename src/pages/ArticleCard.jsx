import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight } from 'lucide-react';

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={() => navigate(`/magazine/article/${article.id}`)}
    >
      <div className="relative">
        <div className="h-48 relative overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
          <h3 className="text-lg font-bold mb-1 group-hover:text-cyan-300 transition-colors line-clamp-2">
            {article.title}
          </h3>
          <div className="flex items-center text-xs opacity-90">
            <Clock className="w-3 h-3 mr-1" />
            <span className="mr-3">{article.readTime}</span>
            <User className="w-3 h-3 mr-1" />
            <span>{article.author || 'Dr. Ndiaye'}</span>
          </div>
        </div>
      </div>

      <div className="p-3">
        <p className="text-gray-600 text-sm line-clamp-2">
          {article.preview}
        </p>

        <div className="mt-3 flex justify-end">
          <span className="inline-flex items-center text-cyan-600 text-sm font-medium group-hover:text-cyan-700">
            Lire l'article
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;