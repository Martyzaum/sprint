const Resultado = () => {
  return (
    <main
      class="container mt-4"
      style={{
        height: "620px",
      }}
    >
      <h1 class="text-center text-primary">Resultados dos Exames</h1>
      <section id="comicSection" class="mt-5">
        <div class="comic-grid">
          <div class="comic-panel">
            <img src="./images/result1.png" alt="Painel 1" class="img-fluid" />
            <p>Veja como você está saudável!</p>
          </div>
          <div class="comic-panel">
            <img
              src="./images
              /result2.png"
              alt="Painel 2"
              class="img-fluid"
            />
            <p>Seu sorriso é o nosso maior resultado!</p>
          </div>
          <div class="comic-panel">
            <img src="./images/result3.png" alt="Painel 3" class="img-fluid" />
            <p>Estamos orgulhosos de você!</p>
          </div>
        </div>
      </section>

      <section id="resultList" class="mt-5">
        <h2 class="text-center text-primary">Lista de Resultados</h2>
        <ul class="list-group mt-4">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Exame de Sangue
            <span class="badge badge-primary badge-pill">Ver</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Raio-X
            <span class="badge badge-primary badge-pill">Ver</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Ultrassom
            <span class="badge badge-primary badge-pill">Ver</span>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Resultado;
