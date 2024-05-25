const Agendamento = () => {
  return (
    <main
      class="container mt-4"
      style={{
        height: "620px",
      }}
    >
      <h1 class="text-center text-primary">Agendamento Fácil</h1>
      <section id="comicSection" class="mt-5">
        <div class="comic-grid">
          <div class="comic-panel">
            <img
              src="./images/appointment1.png"
              alt="Painel 1"
              class="img-fluid"
            />
            <p>Vamos agendar sua consulta! É super fácil.</p>
          </div>
          <div class="comic-panel">
            <img
              src="./images/appointment2.png"
              alt="Painel 2"
              class="img-fluid"
            />
            <p>Escolha um dia e horário que você preferir!</p>
          </div>
          <div class="comic-panel">
            <img
              src="./images/appointment3.png"
              alt="Painel 3"
              class="img-fluid"
            />
            <p>Pronto! Nos vemos em breve!</p>
          </div>
        </div>
      </section>
      <section id="appointmentForm" class="mt-5">
        <h2 class="text-center text-primary">Formulário de Agendamento</h2>
        <form class="mt-4">
          <div class="form-group">
            <label for="name">Nome:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Seu nome"
            />
          </div>
          <div class="form-group">
            <label for="date">Data:</label>
            <input type="date" class="form-control" id="date" />
          </div>
          <div class="form-group">
            <label for="time">Hora:</label>
            <input type="time" class="form-control" id="time" />
          </div>
          <button type="submit" class="btn btn-primary btn-block">
            Agendar
          </button>
        </form>
      </section>
    </main>
  );
};

export default Agendamento;
