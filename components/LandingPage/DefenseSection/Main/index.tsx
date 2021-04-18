import { Check, MonetizationOn, SecurityRounded } from "@material-ui/icons";
import React from "react";
import FadeAnimation from "../../../Util/FadeAnimation";
import DefenseCard, { DefenseCardProps } from "../DefenseCard";
import DefenseSectionLayoutContainer, {
  DefenseSectionChildrenWrapper,
} from "./styles";

interface Props {}

const DefenseSection = (props: Props) => {
  const defenseCards: DefenseCardProps[] = [
    {
      icon: Check,
      text:
        "Quer investir com tranquilidade enquanto analisa o mercado financeiro? Concretizar seu projeto empresarial ou pessoal de imediato? Temos a solução para você!",
      title: "Flexibilidade",
    },
    {
      icon: MonetizationOn,
      text:
        "O valor total do crédito é disponibilizado para você. Use-o a seu favor para negociar melhores condições pagando à vista o seu bem desejado.",
      title: "Poder de compra",
    },
    {
      icon: SecurityRounded,
      text:
        "Trabalhamos com as mais respeitadas administradoras do mercado nacional. Todas regulamentadas e fiscalizadas pela ABAC e Banco Central do Brasil.",
      title: "Segurança",
    },
  ];

  return (
    <DefenseSectionLayoutContainer>
      {defenseCards.map((value, index) => {
        return (
          <DefenseSectionChildrenWrapper key={index}>
            <FadeAnimation >
              <DefenseCard
                icon={value.icon}
                text={value.text}
                title={value.title}
              ></DefenseCard>
            </FadeAnimation>
          </DefenseSectionChildrenWrapper>
        );
      })}
    </DefenseSectionLayoutContainer>
  );
};

export default DefenseSection;
