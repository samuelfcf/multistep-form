import { Theme } from "../../components/Theme";
import * as S from "./style";

const FormStep1 = () => {

  const handleNextStep = () => {

  }

  return (
    <Theme>
      <S.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>

        <hr />

        <label>
          Seu nome completo
          <input
            type="text"
            autoFocus
          />
        </label>

        <button onClick={handleNextStep} >Próximo</button>
      </S.Container>
    </Theme>
  );
}

export { FormStep1 }