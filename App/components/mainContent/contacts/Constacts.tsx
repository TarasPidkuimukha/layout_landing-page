import { ContactInfo } from './ConactInfo';
import { ContactForm } from './ContactForm';

export const Contacts = () => {
  return (
    <section className="contact" id="contacts">
      <h2 className="section-title">Contact us</h2>
      <div className="contacts">
        <ContactForm />

        <ContactInfo />
      </div>
    </section>
  );
};
