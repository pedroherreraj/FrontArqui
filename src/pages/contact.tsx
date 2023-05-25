import ContactForm from '../components/contact_form';
import {useState, useEffect} from "react";
import {useUser} from "../context/userContext";

const ContactPage = () => {
  const handleContactSubmit = (phoneNumber: string) => {
    // handle the contact form submission here
    console.log('phone number?' + phoneNumber)
  };

  const { user } = useUser();

  const [datos, setDatos] = useState('no hay datos');

  const clickHandler = () => {
    if (user === null) {
      setDatos('user null');
    }
    else
    {
      setDatos(user.token);
    }
  }

  useEffect(() => {

  }, [user])


  return (
      <div>
        <h1>Contact Page</h1>
        <ContactForm onSubmit={handleContactSubmit} />
        <button onClick={clickHandler}>Ver si tenemos acceso datos</button>
        <>{datos}</>
      </div>
  );
};

export default ContactPage;
