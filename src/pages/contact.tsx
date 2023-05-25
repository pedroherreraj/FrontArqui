import ContactForm from '../components/contact_form';

const ContactPage = () => {
  const handleContactSubmit = (phoneNumber: string) => {
    // handle the contact form submission here
    console.log('phone number?' + phoneNumber)
  };

  return (
      <div>
        <h1>Contact Page</h1>
        <ContactForm onSubmit={handleContactSubmit} />
      </div>
  );
};

export default ContactPage;
