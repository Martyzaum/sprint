const Contato = () => {
  return (
    <main
      class="container mt-5"
 
    >
      <section id="contato">
        <h2 class="text-center text-primary">Contato</h2>
        <div class="row mt-4">
          <div class="col-md-6">
            <form>
              <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" id="nome" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" />
              </div>
              <div class="form-group">
                <label for="mensagem">Mensagem</label>
                <textarea
                  class="form-control"
                  id="mensagem"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Enviar
              </button>
            </form>
          </div>
          <div class="col-md-6">
            <p>
              Entre em contato conosco para obter mais informações sobre nossos
              serviços ou para fazer sugestões.
            </p>
            <p>
              <strong>Telefone:</strong> (11) 1234-5678
            </p>
            <p>
              <strong>Email:</strong> contato@hospitaldasclinicas.com.br
            </p>
            <p>
              <strong>Endereço:</strong> Av. Principal, 1234 - Cidade, Estado
            </p>
          </div>
        </div>
      </section>

      <section id="localizacao" class="mt-5">
        <h2 class="text-center text-primary">Como Chegar</h2>
        <div class="row mt-4">
          <div class="col-md-6">
            <p>
              O Hospital das Clínicas está localizado em uma área de fácil
              acesso, próximo a várias linhas de transporte público e rodovias
              principais.
            </p>
            <p>
              Para obter instruções detalhadas sobre como chegar ao nosso
              hospital, utilize o mapa interativo abaixo.
            </p>
          </div>
          <div class="col-md-6">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.597981787765!2d-46.628417885019925!3d-23.565827984678552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58887e132c45%3A0x18fda67ba0b19a8c!2sHospital%20das%20Cl%C3%ADnicas!5e0!3m2!1sen!2sbr!4v1611088315796!5m2!1sen!2sbr"
              width="100%"
              height="300"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contato;
