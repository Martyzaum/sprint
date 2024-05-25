const Exames = () => {
  return (
    <main class="container mt-4" style={{
        height: "620px"
        
    }}>
      <h1 class="text-center text-primary">Meus Exames</h1>
      <section id="comicSection" class="mt-5">
        <div class="comic-grid">
          <div class="comic-panel">
            <img src="./images/exam1.png" alt="Painel 1" class="img-fluid" />
            <p>Vamos ver como foi seu exame?</p>
          </div>
          <div class="comic-panel">
            <img src="./images/exam2.png" alt="Painel 2" class="img-fluid" />
            <p>Olha só! Tudo está bem com você!</p>
          </div>
          <div class="comic-panel">
            <img src="./images/exam3.png" alt="Painel 3" class="img-fluid" />
            <p>Não se preocupe, estamos aqui para te ajudar!</p>
          </div>
        </div>
      </section>

      <section id="examList" class="mt-5">
        <h2 class="text-center text-primary">Lista de Exames</h2>
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

export default Exames;
