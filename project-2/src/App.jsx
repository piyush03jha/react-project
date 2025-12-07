import "./App.css";
import Navigation from "./components/navigation/navigation";
import ContactHeader from "./components/contactHeader/contactHeader";
import ContactForm from "./components/contactForm/ContactForm";

function App() {
  return(
    <div>
    <Navigation></Navigation>
    <main className="main_container">
    <ContactHeader></ContactHeader>
    <ContactForm></ContactForm>
    </main>
  </div>
  );
}
export default App;