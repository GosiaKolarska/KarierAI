import React from 'react';
import BoxTitle from "../../components/BoxTitle/BoxTitle";
import { AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledAccordion } from './Help.styles';


const Help = () => {
    const faqData = [
        {
          question: "Jak mogę założyć konto?",
          answer: "Kliknij przycisk 'Zarejestruj się' na górnej belce strony i postępuj zgodnie z instrukcjami."
        },
        {
          question: "Czy rejestracja jest darmowa?",
          answer: "Tak, rejestracja na naszej platformie jest całkowicie darmowa."
        },
        {
          question: "Zapomniałem/am hasła. Co teraz?",
          answer: "Kliknij 'Zapomniałem/am hasła' pod polem logowania i postępuj zgodnie z instrukcjami, aby zresetować swoje hasło."
        },
        {
          question: "Jak mogę zmienić swój adres e-mail?",
          answer: "Po zalogowaniu się do swojego konta przejdź do zakładki 'Ustawienia' i tam będziesz mógł/mogła zmienić swój adres e-mail."
        },
        {
          question: "Czy mogę skonsultować się z mentorem?",
          answer: "Tak, oferujemy możliwość konsultacji z mentorami. Aby to zrobić, przejdź do zakładki 'Mentorzy' i wybierz osobę, z którą chciałbyś/chciałabyś się skontaktować."
        },
        {
          question: "Czy moje dane są bezpieczne?",
          answer: "Tak, dbamy o bezpieczeństwo naszych użytkowników i ich danych. Więcej informacji znajdziesz w naszej polityce prywatności."
        }
      ];

    return (
        <div>
            <BoxTitle title="Pomoc" />
                {faqData.map((faq, index) => (
                    <StyledAccordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography variant="body2">{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </StyledAccordion>
                ))}
        </div>
    )
}

export default Help;
