import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaFilter, FaPhone, FaDirections, FaClock, FaSearch, FaTimes, FaHospitalAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const PharmaPage = () => {
  const location = useLocation();
  const { location: locationQuery } = location.state || { location: '' };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);

  const handlePharmacyClick = (pharmacy) => {
    setSelectedPharmacy(pharmacy);
    setIsModalOpen(true);
  };

  const pharmacies = [
    {
      id: 1,
      name: "Pharmacie Centrale",
      location: "Dakar",
      address: "123 Avenue Leopold Sedar Senghor, Dakar",
      phone: "+221 77 123 45 67",
      hours: {
        weekday: "8h-23h",
        weekend: "9h-22h"
      },
      services: ["Livraison à domicile", "Tests rapides", "Conseil pharmaceutique"],
      garde: false,
      payment: ["Espèces", "Carte bancaire", "Mobile Money"]
    },
    {
      id: 2,
      name: "Pharmacie du Point E",
      location: "Dakar",
      address: "45 Rue du Point E, Dakar",
      phone: "+221 77 234 56 78",
      hours: {
        weekday: "7h-23h",
        weekend: "8h-22h"
      },
      services: ["Conseil pharmaceutique", "Orthopédie", "Parapharmacie"],
      garde: true,
      payment: ["Espèces", "Carte bancaire"]
    },
    {
      id: 3,
      name: "Grande Pharmacie de Thiès",
      location: "Thiès",
      address: "78 Avenue principale, Thiès",
      phone: "+221 77 345 67 89",
      hours: {
        weekday: "8h-22h",
        weekend: "9h-21h"
      },
      services: ["Homéopathie", "Conseil pharmaceutique", "Vaccination"],
      garde: false,
      payment: ["Espèces", "Mobile Money"]
    },
    {
      id: 4,
      name: "Pharmacie Centrale",
      location: "Dakar",
      address: "123 Avenue Leopold Sedar Senghor, Dakar",
      phone: "+221 77 123 45 67",
      hours: {
        weekday: "8h-23h",
        weekend: "9h-22h"
      },
      services: ["Livraison à domicile", "Tests rapides", "Conseil pharmaceutique"],
      garde: true,
      payment: ["Espèces", "Carte bancaire", "Mobile Money"]
    },
  ];

  const [filters, setFilters] = useState({
    name: '',
    location: locationQuery,
    garde: false,
    service: ''
  });

  const filteredPharmacies = pharmacies.filter(pharmacy => {
    return (
      pharmacy.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      (filters.name === '' || pharmacy.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (!filters.garde || pharmacy.garde)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-emerald-900 flex items-center gap-3">
            <FaHospitalAlt className="text-emerald-600" />
            Pharmacies {locationQuery && `à ${locationQuery}`}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Recherche rapide" 
                className="pl-10 pr-4 py-2 rounded-full bg-emerald-100 border border-emerald-300 focus:ring-2 focus:ring-emerald-500"
              />
              <FaSearch className="absolute left-3 top-3 text-emerald-600" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-6 sticky top-4">
              <h2 className="text-xl font-semibold flex items-center gap-2 text-emerald-600">
                <FaFilter />
                Filtres avancés
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom de la pharmacie
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-green-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Rechercher..."
                    value={filters.name}
                    onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Localisation
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-green-100 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Ville..."
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="garde"
                    checked={filters.garde}
                    onChange={(e) => setFilters({ ...filters, garde: e.target.checked })}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-100 rounded"
                  />
                  <label htmlFor="garde" className="ml-2 text-sm text-green-700">
                    Pharmacie de garde
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9">
            {filteredPharmacies.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <FaTimes className="mx-auto text-5xl text-red-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Aucune pharmacie trouvée
                </h3>
                <p className="text-gray-600">
                  Essayez de modifier vos filtres de recherche
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPharmacies.map((pharmacy) => (
                  <div
                    key={pharmacy.id}
                    className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-2xl hover:scale-105 group cursor-pointer"
                    onClick={() => handlePharmacyClick(pharmacy)}
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-emerald-800 group-hover:text-emerald-900">
                          {pharmacy.name}
                        </h3>
                        {pharmacy.garde && (
                          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">
                            De garde
                          </span>
                        )}
                      </div>
                      
                      <div className="space-y-2 text-gray-600">
                        <p className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-emerald-600" />
                          {pharmacy.address}
                        </p>
                        <p className="flex items-center gap-2">
                          <FaPhone className="text-emerald-600" />
                          {pharmacy.phone}
                        </p>
                        <p className="flex items-center gap-2">
                          <FaClock className="text-emerald-600" />
                          {pharmacy.hours.weekday}
                        </p>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                        <button
                          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(pharmacy.address)}`, '_blank');
                          }}
                        >
                          <FaDirections />
                          Itinéraire
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && selectedPharmacy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedPharmacy.name}</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Informations</h3>
                    <p className="flex items-center gap-2 text-gray-600">
                      <FaMapMarkerAlt className="text-green-600" />
                      {selectedPharmacy.address}
                    </p>
                    <p className="flex items-center gap-2 text-gray-600 mt-2">
                      <FaPhone className="text-green-600" />
                      {selectedPharmacy.phone}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Horaires</h3>
                    <p className="text-gray-600">Semaine: {selectedPharmacy.hours.weekday}</p>
                    <p className="text-gray-600">Weekend: {selectedPharmacy.hours.weekend}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPharmacy.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Moyens de paiement</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPharmacy.payment.map((method, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PharmaPage;