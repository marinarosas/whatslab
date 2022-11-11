import {Header} from "./components/Header/Header"
import {Main} from "./components/Main/Main"
import {Footer} from "./components/Footer/Footer"
import { useState } from "react";
import { AppContainer } from "./GlobalStyle";

function App() {

  const [currSender, setCurrSender] = useState("Me")
  const [senders, setSenders] = useState([
    "Me",
    "Fulano",
    "Cicrano",
    "Beltrano",
    "Astrodev"
  ])

  const [messages, setMessages] = useState([
    {
      id: `Fulando-${Math.ceil(Math.random()*100000)}`,
      sender: "Fulano",
      content: "Hello",
      createAt: new Date()
    },
    {
      id: `Me-${Math.ceil(Math.random()*100000)}`,
      sender: "Me",
      content: "Salve",
      createAt: new Date()
    }
  ])

  return (

    <AppContainer>
    <Header
      currSender={currSender}
      senders={senders}
      onChangeSender={(e) => {setCurrSender(e.target.value)}}
    />
    <Main
    messages={messages}

    />
    <Footer/>
    </AppContainer>
  );
}

export default App;
