import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaFilter, FaLanguage, FaCalendarCheck, FaQuestionCircle, FaUserMd, FaPills, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const ResultsPage = () => {
  const location = useLocation();
  const { specialty, location: locationQuery } = location.state || { specialty: '', location: '' };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const doctors = [
    {
      id: 1,
      name: "Dr. Amadou Sy",
      specialty: "Cardiologue",
      location: "Dakar",
      image: "https://i.pinimg.com/236x/73/2e/e2/732ee28df4c2225d4341fc70976d1320.jpg",
      address: "123 Rue de Dakar",
      phone: "+221 77 123 45 67",
      email: "amadou.sy@example.com",
      experience: "10 ans d'expérience",
      languages: ["Français", "Wolof"],
      specializations: ["Cardiologie interventionnelle", "Électrophysiologie"],
      availability: "Lun-Ven: 8h-18h",
      insurance: ["CNA", "Allianz"]
    },
    {
      id: 2,
      name: "Dr. Aissatou Ndiaye",
      specialty: "Cardiologue",
      location: "Thiès",
      image: "https://i.pinimg.com/736x/87/04/c0/8704c0f4fe229d9884d0dea2e0a64391.jpg",
      address: "456 Rue de Thiès",
      phone: "+221 77 234 56 78",
      email: "aissatou.ndiaye@example.com",
      experience: "8 ans d'expérience",
      languages: ["Français", "Anglais"],
      specializations: ["Cardiopathie", "Chirurgie cardiaque"],
      availability: "Lun-Ven: 9h-17h",
      insurance: ["Sunu Assurances"]
    },
    {
      id: 3,
      name: "Dr. Amy Ndoye",
      specialty: "Dermatologue",
      location: "Pikine",
      image: "https://i.pinimg.com/236x/99/e0/34/99e0344437fb164dff4f3b9ffa6504e8.jpg",
      address: "456 Rue",
      phone: "+221 77 234 56 78",
      email: "aissatou.ndiaye@example.com",
      experience: "8 ans d'expérience",
      languages: ["Français", "Anglais"],
      specializations: ["Cardiopathie", "Chirurgie cardiaque"],
      availability: "Lun-Ven: 9h-17h",
      insurance: ["Sunu Assurances"]
    },
    {
      id: 4,
      name: "Dr. Astou gaye",
      specialty: "Cardiologue",
      location: "Thiès",
      image: "https://i.pinimg.com/236x/aa/e0/0f/aae00f05814d1fc1a27ea4b70d62a118.jpg",
      address: "456 Rue de Thiès",
      phone: "+221 77 234 56 78",
      email: "aissatou.ndiaye@example.com",
      experience: "8 ans d'expérience",
      languages: ["Français", "Anglais"],
      specializations: ["Cardiopathie", "Chirurgie cardiaque"],
      availability: "Lun-Ven: 9h-17h",
      insurance: ["Sunu Assurances"]
    },
  ];

  const [filters, setFilters] = useState({
    name: '',
    location: locationQuery,
    gender: '',
    language: '',
  });

  const filteredDoctors = doctors.filter(doctor => {
    return (
      doctor.specialty.toLowerCase().includes(specialty.toLowerCase()) &&
      doctor.location.toLowerCase().includes(locationQuery.toLowerCase()) &&
      (filters.name === '' || doctor.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.gender === '' || doctor.gender?.toLowerCase() === filters.gender.toLowerCase()) &&
      (filters.language === '' || doctor.languages?.some(lang => lang.toLowerCase() === filters.language.toLowerCase()))
    );
  });

  const consultationReasons = [
    "Consultation de routine",
    "Urgence cardiaque",
    "Suivi post-opératoire",
    "Deuxième avis médical"
  ];
  const medicalQuestions = [
    "Hypertension artérielle",
    "Insuffisance cardiaque",
    "Arythmie cardiaque",
    "Cardiopathie"
  ];

  const medicalActs = [
    "Électrocardiogramme (ECG)",
    "Échographie cardiaque",
    "Test d'effort",
    "Holter tensionnel"
  ];

  const diseases = [
    "Maladie coronarienne",
    "Insuffisance cardiaque",
    "Fibrillation auriculaire",
    "Valvulopathie"
  ];
  useEffect(() => {
    setFilters(prevFilters => ({
      ...prevFilters,
      location: locationQuery || prevFilters.location,
    }));
  }, [locationQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-xl shadow-xl p-6 flex items-center space-x-6 transition-transform hover:scale-105">
          <img
            src={`https://i.pinimg.com/736x/dd/f2/e2/ddf2e28d01e9260ecdf666ac31c8b21f.jpg`}
            alt={specialty}
            className="w-32 h-32 rounded-lg object-cover shadow-lg"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{specialty}</h1>
            <p className="text-gray-600 mt-2">
              Trouvez les meilleurs spécialistes en {specialty.toLowerCase()} à {locationQuery}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-xl p-6 space-y-6 transition-transform hover:scale-105">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-blue-600">
              <FaFilter className="text-blue-600" />
              Filtres
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom du professionnel de santé...
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border bg-blue-100 focus:ring-2 focus:ring-blue-500"
                  placeholder="Rechercher par nom..."
                  value={filters.name}
                  onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium bg-blue-10 text-gray-700 mb-1">
                  Genre
                </label>
                <select
                  className="w-full px-4 py-2 bg-blue-100 rounded-lg border focus:ring-2 focus:ring-blue-500"
                  value={filters.gender}
                  onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
                >
                  <option value="">Tous</option>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium bg-blue-10 text-gray-700 mb-1">
                  Langue parlée
                </label>
                <select
                  className="w-full px-4 py-2 bg-blue-100 rounded-lg border focus:ring-2 focus:ring-blue-500"
                  value={filters.language}
                  onChange={(e) => setFilters({ ...filters, language: e.target.value })}
                >
                  <option value="">Toutes les langues</option>
                  <option value="Français">Français</option>
                  <option value="Wolof">Wolof</option>
                  <option value="Anglais">Anglais</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      <div className="lg:col-span-5">
      <div className=" p-6 space-y-6">
        {filteredDoctors.map(doctor => (
          <div
            key={doctor.id}
            className="flex items-center bg-white space-x-8 p-4 hover:bg-gray-100 rounded-lg transition-transform transform hover:scale-105 border-b last:border-b-0 mb-4"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-24 h-24 rounded-lg object-cover shadow-lg"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{doctor.name}</h2>
              <p className="text-gray-600">{doctor.specialty} à {doctor.location}</p>
            </div>
            <button
              onClick={() => handleDoctorClick(doctor)}
              className="mt-3 px-6 py-2  bg-cyan-500 text-white rounded-lg hover:bg-cyan-700 transition-colors duration-300 transform hover:scale-105"
            >
               fiche
            </button>
          </div>
        ))}
      </div>
    </div>
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-xl shadow-xl p-6 transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
              <FaQuestionCircle className="text-blue-600" />
              Questions médicales
            </h3>
            <ul className="mt-4 space-y-2">
              {medicalQuestions.map((question, index) => (
                <li key={index} className="text-gray-700">{question}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-6 transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
              <FaUserMd className="text-blue-600" />
              Actes médicaux
            </h3>
            <ul className="mt-4 space-y-2">
              {medicalActs.map((act, index) => (
                <li key={index} className="text-gray-700">{act}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-6 transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
              <FaPills className="text-blue-600" />
              Maladies traitées
            </h3>
            <ul className="mt-4 space-y-2">
              {diseases.map((disease, index) => (
                <li key={index} className="text-gray-700">{disease}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {isModalOpen && selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✖
            </button>
            
            <div className="p-6">
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="w-32 h-32 rounded-lg object-cover shadow-lg"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedDoctor.name}</h2>
                  <p className="text-lg text-blue-600">{selectedDoctor.specialty}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-gray-900">Contact</h3>
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-600" />
                    {selectedDoctor.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaPhone className="text-blue-600" />
                    {selectedDoctor.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaEnvelope className="text-blue-600" />
                    {selectedDoctor.email}
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-gray-900">Langues parlées</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedDoctor.languages.map((lang, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-gray-900">Spécialisations</h3>
                  <ul className="list-disc list-inside">
                    {selectedDoctor.specializations.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 md:col-span-2">
                  <h3 className="font-semibold text-lg text-gray-900">Horaires</h3>
                  <p>Disponibilité: {selectedDoctor.availability}</p>
                  <div>
                    <h4 className="font-medium">Assurances acceptées:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedDoctor.insurance.map((ins, index) => (
                        <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                          {ins}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
                  Prendre rendez-vous
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsPage;