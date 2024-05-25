import React from "react";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";

const Home = () => {
  return (
    <main class="container mt-4" style={{
      display: "flex",
      flexDirection: "column",
        height: "620px"
    }}>
      <h1 class="text-center text-primary">Novidades no HC!</h1>
      <div id="carousel" class="slick-carousel mt-4">
        <img class="sImg img-fluid" src={image1} alt="Imagem 1" />
        <img class="sImg img-fluid" src={image2} alt="Imagem 2" />
        <img class="sImg img-fluid" src={image3} alt="Imagem 3" />
      </div>
    </main>
  );
};

export default Home;
