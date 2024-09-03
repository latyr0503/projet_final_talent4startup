import React, { useState } from "react";

export default function FormModal() {
  // États pour les champs du formulaire
  const [motif, setMotif] = useState("");
  const [docteur, setDocteur] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [nomComplet, setNomComplet] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Créer un objet avec les données du formulaire
    const formData = {
      motif,
      docteur,
      date,
      heure,
      nomComplet,
      numero,
      email,
    };

    // Enregistrer les données dans le localStorage
    localStorage.setItem("rendezVous", JSON.stringify(formData));

    // Optionnel: Réinitialiser les champs du formulaire après l'enregistrement
    setMotif("");
    setDocteur("");
    setDate("");
    setHeure("");
    setNomComplet("");
    setNumero("");
    setEmail("");
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
            value={docteur}
            onChange={(e) => setDocteur(e.target.value)}
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
            value={nomComplet}
            onChange={(e) => setNomComplet(e.target.value)}
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
        <button
          type="submit"
          className="bg-blue-700 text-white p-4 rounded-lg uppercase font-bold"
        >
          envoyer
        </button>
      </div>
    </form>
  );
}
