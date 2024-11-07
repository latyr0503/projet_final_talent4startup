import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaPills, FaQuestionCircle, FaNewspaper, FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const Med = () => {
  const [activePage, setActivePage] = useState('Médecin');
  const [searchQuery, setSearchQuery] = useState('');
  const [isHovered, setIsHovered] = useState(null);

  const handlePageChange = (page) => {
    setActivePage(page);
    setSearchQuery('');
  };

  const getPlaceholder = () => {
    switch (activePage) {
      case 'Médecin':
        return 'Rechercher un professionnel de santé...';
      case 'Pharmacie':
        return 'Trouver une pharmacie...';
      case 'Questions':
        return 'Posez vos questions de santé...';
      case 'Magazine':
        return 'Explorer nos articles santé...';
      default:
        return '';
    }
  };

  const navigationItems = [
    { id: 'Médecin', icon: <FaUserMd size={25} />, color: '#4CAF50' },
    { id: 'Pharmacie', icon: <FaPills size={25} />, color: '#2196F3' },
    { id: 'Questions', icon: <FaQuestionCircle size={25} />, color: '#FF9800' },
    { id: 'Magazine', icon: <FaNewspaper size={25} />, color: '#9C27B0' },
  ];

  const localities = [
    "Dakar", "Pikine", "Guédiawaye", "Rufisque", "Thiès",
    "Saint-Louis", "Kaolack", "Ziguinchor", "Touba", "Diourbel"
  ];

  const specialties = [
    "Médecin Généraliste", "Cardiologue", "Pédiatre", "Dermatologue",
    "Gynécologue", "Dentiste", "Ophtalmologue", "ORL", "Psychiatre", "Neurologue"
  ];

  return (
    <div className="min-h-100 bg-white p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-6xl mx-auto bg-blue-50 rounded-2xl shadow-xl "
      >
        <div className="p-6 md:p-8">
          <div className="flex justify-around mb-8 gap-4">
            {navigationItems.map(({ id, icon, color }) => (
              <motion.button
                key={id}
                onClick={() => handlePageChange(id)}
                onHoverStart={() => setIsHovered(id)}
                onHoverEnd={() => setIsHovered(null)}
                className={`relative flex flex-col items-center p-4 rounded-xl transition-all duration-300
                  ${activePage === id 
                    ? 'bg-white shadow-lg transform -translate-y-1'
                    : 'hover:bg-white hover:shadow-md'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`p-3 rounded-full mb-2 transition-colors duration-300`}
                  style={{ 
                    color: activePage === id ? color : '#666',
                    background: activePage === id ? `${color}15` : 'transparent'
                  }}
                >
                  {icon}
                </div>
                <span
                  className={`text-sm font-medium transition-colors duration-300
                    ${activePage === id ? 'text-gray-900' : 'text-gray-600'}`}
                >
                  {id}
                </span>
                {activePage === id && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-12 h-1 rounded-full"
                    style={{ background: color }}
                    layoutId="activeIndicator"
                  />
                )}
              </motion.button>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5">
                <div className="relative">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder={getPlaceholder()}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      transition-all duration-300"
                  />
                </div>
              </div>

              {(activePage === 'Médecin' || activePage === 'Pharmacie') && (
                <>
                  {activePage === 'Médecin' && (
                    <div className="md:col-span-3">
                      <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        transition-all duration-300 appearance-none">
                        <option value="">Spécialité</option>
                        {specialties.map((specialty) => (
                          <option key={specialty} value={specialty.toLowerCase()}>
                            {specialty}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="md:col-span-2">
                    <div className="relative">
                      <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        transition-all duration-300 appearance-none">
                        <option value="">Localité</option>
                        {localities.map((locality) => (
                          <option key={locality} value={locality.toLowerCase()}>
                            {locality}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              )}

              <div className="md:col-span-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500
                    text-white font-medium rounded-xl shadow-lg hover:shadow-xl
                    transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  RECHERCHER
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Med;