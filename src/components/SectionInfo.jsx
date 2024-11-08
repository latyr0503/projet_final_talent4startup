// eslint-disable-next-line no-unused-vars
import React from "react";
import doc1 from "../assets/Online-Doctor-rafiki.png";

export default function SectionInfo() {
  return (
    <div className="flex items-center justify-center lg:-mt-20 sm:flex-col">
      <div className="lg:w-1/2 flex items-center justify-center">
        <img src={doc1} alt="doc !" width={"600px"} />
      </div>
      <div className="lg:w-1/2 lg:p-14 p-7 text-slate-800">
        <h2 className="text-3xl font-bold">
          Lorem ipsum dolor sit amet 
        </h2>
        <p className="mt-5 text-justify font-light">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          incidunt et nulla praesentium voluptatibus excepturi! Illo molestias
          eligendi minus iure nobis, aut id quidem blanditiis officia quis sequi
          eveniet velit excepturi quaerat sunt repellendus ducimus debitis,
          nostrum rem praesentium? Ullam delectus nesciunt aspernatur iste ad
          voluptatem, ducimus quis perspiciatis molestias nobis libero nam
          accusantium deleniti ipsam temporibus unde repellat, debitis
          asperiores? Doloremque corrupti, veniam quam minima accusamus hic
          fugit. Praesentium sit maxime ab soluta maiores autem eveniet rem
          ipsam? Quos, minima ex perferendis asperiores voluptas tenetur et
          vitae magni ut, modi dolor eaque architecto soluta at sed, velit quia
          nihil.
        </p>
      </div>
    </div>
  );
}
