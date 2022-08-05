import React, { FormEvent } from "react";
import * as s from "./styled-form-completo";
import { Logo } from "../../imagens";

const FormCompleto: React.FC = () => {
  /*function tagPorNome(nomeTag: string, isRadioButton: boolean = false) {
    const tag = document.getElementsByName(nomeTag) as any;

    if (isRadioButton) {
      for (let pos = 0; pos < tag.length; pos++) {
        if (tag[pos].checked) return tag[pos];
      }
    } else return tag[0];
  }*/

  function enviarFormulario(event: FormEvent) {
    event.preventDefault();

    // const mensagem = `${nome}, tem ${idade} anos e atualmente é ${ocupacao}. Se ingressar no mundo do desenvolvimento, tem preferência por atuar como ${areaPreferencia}.
    //
    //          Em sua descrição de perfil consta: "${descricaoPerfil}".
    //
    //          Deseja receber e-mail: ${receberEmail ? "Sim" : "Não"}
    //          Currículo: ${
    //          curriculo ? curriculo.files[0].name : "Não informado"
    //          }
    //          `;
    //alert(mensagem);
  }

  const cancelar = (event: FormEvent) => {
    //Evita o redirecionamento padrão para outra tela e manda um alert
    event.preventDefault();
    alert("Cancelando...");
  };

  return (
    <s.Container>
      <h1>Formulário 2ª Edição</h1>
      <h2>
        Seja bem-vindo(a) ao primeiro desafio da sua jornada de aprendizado!
      </h2>
      <p id="instrucao">
        Preencha corretamente os campos abaixo para ingressar nessa SUPER
        JORNADA com o time Paipe!
      </p>

      <img src={Logo} alt="Imagem Let's Dev" />

      <hr />

      {/* {Itens agrupados em coluna} */}
      <form onSubmit={enviarFormulario}>
        <p id="aviso">
          <strong>ATENÇÃO:</strong> os campos contendo o asterisco (*) são de
          preenchimento obrigatório!
        </p>
        Aqui começam os inputs
        <div className="row">
          <div className="column-input input-text">
            <label>Nome completo: *</label>
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome aqui"
              required
            />
          </div>

          <div className="column-input">
            <label>Idade: *</label>
            <input type="number" name="idade" placeholder="Digite sua idade" />
          </div>
        </div>
        inputs seleção
        <div className="row">
          <div className="column-input select">
            <label>Ocupação:</label>
            <select name="ocupacao">
              <option>Selecione sua ocupação</option>
              <option>Estudante</option>
              <option>Trabalhador CLT</option>
              <option>Trabalhador PJ</option>
              <option>Autônomo</option>
              <option>Outros</option>
            </select>
          </div>
          {/* {inputs seleção - radio button} */}
          <div className="column-input">
            <label>Área de preferência:</label>

            <div className="row" style={{ gap: "25px" }}>
              <div className="row-selectors">
                <input
                  type="radio"
                  id="front"
                  name="area-preferencia"
                  value="Front-end"
                  checked
                />
                <label htmlFor="front">Front-end</label>
              </div>

              <div className="row-selectors">
                <input
                  type="radio"
                  id="back"
                  name="area-preferencia"
                  value="Back-end"
                  checked
                />
                <label htmlFor="front">Back-end</label>
              </div>

              <div className="row-selectors">
                <input
                  type="radio"
                  id="full"
                  name="area-preferencia"
                  value="Full stack"
                  checked
                />
                <label htmlFor="front">Full stack</label>
              </div>
            </div>
          </div>
        </div>
        {/* {botão, textarea e checkbox} */}
        <div className="column-input">
          <label>Anexar currículo:</label>
          <input type="file" name="curriculo" multiple />
        </div>
        <div className="column-input" style={{ marginBottom: "50px" }}>
          <label>Descrição do perfil do candidato:</label>
          <textarea
            name="descricao-perfil"
            placeholder="Nos fale um pouco sobre o seu perfil pessoal e profissional"
          ></textarea>
        </div>
        <div className="column-input" style={{ marginBottom: "115px" }}>
          <div className="row-selectors">
            <input type="checkbox" name="receber-email" id="receber-email" />
            <label htmlFor="receber-email">
              Desejo receber notificações sobre vagas por e-mail
            </label>
          </div>
        </div>
        <div className="row" style={{ justifyContent: "space-between" }}>
          <button onClick={cancelar}>Cancelar</button>
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </s.Container>
  );
};

export default FormCompleto;
