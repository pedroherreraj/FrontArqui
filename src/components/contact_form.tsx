import { useState } from 'react';
import axios from 'axios';
import { useUser } from '../context/userContext';

interface ContactFormProps {
  onSubmit: (phoneNumber: string) => void;
}

const ContactForm = ({ onSubmit }: ContactFormProps): JSX.Element => {
  const [phone, setPhone] = useState('');
  const { user, setUser } = useUser();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://api.pdesolmi.me/users/sign_up', { phone }, {
        headers: { JwtToken: user?.token },
      });
      console.log(response.data);

      // Update the user object with the new phone number
      const updatedUser = { ...user, phone, token: user?.token || '' };
      setUser(updatedUser);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone-number-input">Contact Number:</label>
        <input
          type="tel"
          id="phone-number-input"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
