import React from "react";
import doc1 from "../assets/Doctors-bro.png";
// import doc2 from "../assets/Doctors-pana.png";
// import doc3 from "../assets/Medicine-cuate.png";
// import doc4 from "../assets/Online Doctor-rafiki.png";

export default function SectionInfo() {
//   const images = [doc1, doc2, doc3, doc4];

  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2 flex items-center justify-center">
        {/* <div className="carousel carousel-center rounded-box">
          {images.map((src, index) => (
            <div key={index} className="carousel-item">
              <img src={src} alt={`Slide ${index + 1}`} width={"500px"}/>
            </div>
          ))}
        </div> */}
        <img src={doc1} alt="doc !"  width={"600px"}/>
      </div>
      <div className="w-1/2 p-14 text-slate-800">
        <h2 className="text-4xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h2>
        <p className="mt-5 text-justify">
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
