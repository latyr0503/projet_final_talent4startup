import React from "react";
import FormModal from "../Elements/FormModal";
import { X } from "lucide-react";

export default function GetAppointement() {
  return (
    <div className="bg-blue-700 p-14 text-white flex-col md:flex-row flex items-center justify-center gap-5">
      <p className="md:text-2xl text-center">
        Contactez-nous pour plus d'informations ou prenez rendez-vous.
      </p>
      <button
        className="btn btn-outline text-white hover:bg-white hover:text-blue-700"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Prendre un Rendez-vous
      </button>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box text-blue-700 bg-white w-11/12 max-w-5xl p-10">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <X />
            </button>
          </form>
          <h3 className="font-bold text-3xl mb-10">
            Remplire le formulaire pour prendre un rendez-vous!
          </h3>
          <FormModal />
        </div>
      </dialog>
    </div>
  );
}
