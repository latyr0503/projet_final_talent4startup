import axios from "axios";
import React, { useState } from "react";

export default function FormModal() {
  // États pour chaque champ du formulaire
  const [motif, setMotif] = useState("");
  const [doctor, setDoctor] = useState("");
  const [patient, setPatient] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Nouvel état pour le loader

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Envoyer les données du formulaire à l'API
      await axios.post(
        "https://prise-de-rv-backend-nestjs.onrender.com/rendezvous",
        {
          motif,
          doctor,
          patient,
          date,
          heure,
          email,
          numero,
        },
        setIsLoading(true) // Démarre le loader
      );
      setMotif("");
      setDoctor("");
      setPatient("");
      setDate("");
      setHeure("");
      setEmail("");
      setNumero("");
      setIsLoading(false); // Arrête le loader une fois la requête réussie
      alert("Rendez-vous ajouté avec succès!");
    } catch (error) {
      console.error("Erreur lors de l'ajout du rendez-vous", error);
      alert("Erreur lors de l'ajout du rendez-vous");
      setIsLoading(false); // Arrête le loader une fois la requête réussie
    }
  };

  return (
    <form className="grid grid-cols-2 gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-col justify-between gap-5">
        <div>
          <label className="text-sm text-slate-800">Motif du rendez-vous</label>
          <input
            type="text"
            className="w-full rounded-lg bg-white text-slate-800 border border-slate-800 p-3"
            placeholder="Motif du Rendez-vous"
            value={motif}
            onChange={(e) => setMotif(e.target.value)}
          />
        </div>
        <label className="form-control w-full">
          <div>
            <span className="text-sm text-slate-800">
              Selectionner un docteur
            </span>
          </div>
          <select
            className="rounded-lg bg-white text-slate-800 border border-slate-800 p-3"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          >
            <option disabled value="">
              Selectionner un docteur
            </option>
            <option value="Star Wars">Star Wars</option>
            <option value="Harry Potter">Harry Potter</option>
            <option value="Lord of the Rings">Lord of the Rings</option>
            <option value="Planet of the Apes">Planet of the Apes</option>
            <option value="Star Trek">Star Trek</option>
          </select>
        </label>
        <div>
          <label className="text-sm text-slate-800">Date du rendez-vous</label>
          <input
            type="date"
            className="w-full rounded-lg bg-white text-slate-800 border border-slate-800 p-3"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm text-slate-800">Heure du rendez-vous</label>
          <input
            type="time"
            className="w-full rounded-lg bg-white text-slate-800 border border-slate-800 p-3"
            value={heure}
            onChange={(e) => setHeure(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-5">
        <div>
          <label className="text-sm text-slate-800">
            Nom Complet du patient
          </label>
          <input
            type="text"
            className="w-full rounded-lg bg-white text-slate-800 border border-slate-800 p-3"
            placeholder="Nom Complet du patient"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm text-slate-800">Numero du patient</label>
          <input
            type="text"
            className="w-full rounded-lg bg-white text-slate-800 border border-slate-800 p-3"
            placeholder="Numero du patient"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm text-slate-800">Email du patient</label>
          <input
            type="email"
            className="w-full rounded-lg bg-white text-slate-800 border border-slate-800 p-3"
            placeholder="Email du patient"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {isLoading ? (
          <div className="flex flex-row justify-center gap-2">
            <div className="w-4 h-4 rounded-full bg-sky-500 animate-bounce [animation-delay:.7s]"></div>
            <div className="w-4 h-4 rounded-full bg-sky-500 animate-bounce [animation-delay:.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-sky-500 animate-bounce [animation-delay:.7s]"></div>
          </div>
        ) : (
          <button
            type="submit"
            className="w-full py-3 text-white duration-150 bg-sky-500 rounded-lg hover:bg-sky-700 active:shadow-lg my-5"
          >
            Enregistrer
          </button>
        )}
      </div>
    </form>
  );
}
