import { ReactNode } from "react";
import { Header } from "../Header";
import * as S from "./style";

type Props = {
  children: ReactNode
}

const Theme = ({ children }: Props) => {
  return (
    <S.Container>
      <S.Area>
        <Header />

        <S.Steps>
          <S.Sidebar>

          </S.Sidebar>
          <S.Page>
            {children}
          </S.Page>
        </S.Steps>
      </S.Area>
    </S.Container>
  );
}

export { Theme }