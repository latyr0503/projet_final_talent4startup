import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { articles } from './categoryData';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const allArticles = Object.values(articles).flat();
  const article = allArticles.find((a) => a.id === parseInt(id, 10));

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <p className="text-lg font-semibold text-gray-800 mb-4">
          Erreur : Aucun article trouvé pour l'ID {id}
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 text-white bg-cyan-600 hover:bg-cyan-700 rounded-lg"
        >
          Retour au magazine
        </button>
      </div>
    );
  }

  const renderArticleContent = () => {
    const paragraphs = article.content.split('\n');
    
    return paragraphs.map((paragraph, index) => {
      const headingStyles = {
        'La grossesse :': 'text-3xl text-green-700 font-bold mt-8 mb-4',
        'Le premier trimestre': 'text-2xl text-cyan-600 font-semibold mt-6 mb-3',
        'Changements chez la mère': 'text-xl text-blue-500 font-medium mt-4 mb-2',
        'Un point essentiel :': 'text-xl text-orange-600 font-medium mt-4 mb-2',
        'Le deuxième trimestre': 'text-2xl text-cyan-600 font-semibold mt-6 mb-3',
        'Un répit pour la maman': 'text-xl text-blue-500 font-medium mt-4 mb-2',
        'Le troisième trimestre': 'text-2xl text-cyan-600 font-semibold mt-6 mb-3',
        'Les défis de la fin de grossesse': 'text-xl text-blue-500 font-medium mt-4 mb-2',
        'Le positionnement final': 'text-xl text-orange-600 font-medium mt-4 mb-2',
        'Une expérience unique': 'text-2xl text-green-600 font-semibold mt-6 mb-3'
      };

      const headingMatch = Object.keys(headingStyles).find(heading => 
        paragraph.trim().startsWith(heading)
      );

      if (headingMatch) {
        return (
          <h2 
            key={index} 
            className={headingStyles[headingMatch] || 'text-xl font-semibold text-gray-800'}
          >
            {paragraph.trim()}
          </h2>
        );
      }
      
      return paragraph.trim() ? (
        <p 
          key={index} 
          className="mb-4 text-gray-700 leading-relaxed text-base"
        >
          {paragraph}
        </p>
      ) : null;
    }).filter(Boolean); 
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-6 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-green-600 hover:text-cyan-600 mb-4"
        >
          ← Retour au magazine
        </button>
      </div>

      <div className="bg-white rounded-xl mx-6 lg:mx-32 mt-6 shadow-xl overflow-hidden">
        <div className="h-[400px] relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center space-x-6 text-sm font-medium">
              <span>{article.author}</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="prose prose-lg max-w-none">
            {renderArticleContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;