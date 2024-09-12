import React, { useState, useEffect } from "react";
import CardDoctor from "../Elements/CardDoctor";
import axios from "axios";

export default function SectionDoctor({ limit}) {
  const [doctors, setDoctors] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "https://prise-de-rv-backend-nestjs.onrender.com/doctors"
        );
        setDoctors(response.data);
      } catch (error) {
        setErrorMessage("Erreur lors de la récupération des docteurs.");
        console.error(error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="text-center mb-4 -mt-4">
      <div className="grid grid-cols-4 gap-5 p-10">
        {doctors.slice(0, limit).length > 0 ? (
          doctors
            .slice(0, limit)
            .map((doctor, index) => <CardDoctor key={index} doctor={doctor} />)
        ) : (
          <p className="p-4">Aucun docteur trouvé</p>
        )}
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}
