import styled from "styled-components";
import ChatBot from "react-simple-chatbot";
import { script } from "./Questions";
import { stepifyScript } from "./utils";
import { ThemeProvider } from 'styled-components';

const Main = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const theme = {
  background: "#fff",
  fontFamily: 'Helvetica Neue',
  headerBgColor: 'rgb(1, 203, 153)',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: 'rgb(1, 203, 153)',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const Chatbot = () => {
  return (
    <Main>
    <ThemeProvider theme={theme}>
    <ChatBot
      headerTitle={"First Aid Bot"}
      floating={true}
      bubbleOptionStyle={{ backgroundColor: "white", color: "rgb(105, 110, 147)" }}
      steps={stepifyScript(script)}
    />
    </ThemeProvider>
  </Main>
  )
}

export default Chatbot