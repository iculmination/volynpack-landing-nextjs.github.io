import Process from "components/Process";
import Header from "components/Header";
import Main from "components/Main";
import Services from "components/Services";
import Offer from "components/Offer";
import About from "components/About";
import Reviews from "components/Reviews";
import Form from "components/Form";
import Contacts from "components/Contacts";

export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <Services />
      <Offer />
      <Process />
      <About />
      <Reviews />
      <Form />
      <Contacts />

    </main>
  );
}
