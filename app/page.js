import Header from "../components/Header";
import Main from "../components/Main";
import Services from "../components/Services";
import Offer from "../components/Offer";
import Process from "../components/Process";
import Reviews from "../components/Reviews";
import About from "../components/About";
import Form from "../components/Form";
import Contacts from "../components/Contacts";

export default function Home() {

  

  return (
    <main>
      <Header />
      <Main />
      <About />
      <Services />
      <Offer />
      <Process />
      {/* <Reviews /> */}
      <Form />
      <Contacts />
    </main>
  );
}
