import { useState } from 'react';
import CustomHead from '../components/CustomHead';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const postContactInfo = async (name, email, message) => {
    const res = await fetch(
      'https://hunting-coder.vercel.app/api/postcontact',
      {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      }
    );

    return res.json();
  };

  const clearContactForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleContactForm = async (e) => {
    e.preventDefault();
    try {
      postContactInfo(name, email, message).then((res) => {
        if (!res) {
          setStatus('Your message could not be sent, please try again later.');
          setTimeout(() => {
            setStatus('');
          }, 3000);
        }
        setStatus('Your message has been sent successfully!');
        setTimeout(() => {
          setStatus('');
        }, 3000);
      });
    } catch (error) {
      console.log(error);
    }
    clearContactForm();
  };
  return (
    <div className={styles.container}>
      <CustomHead title="Contact - Hunting Coder" />
      <h1 className={styles.title}>Contact Me 😎</h1>
      {status && <div className={styles.messageStatus}>{status}</div>}
      <form className={styles.formStyles} onSubmit={handleContactForm}>
        <input
          type="text"
          id="contact-name"
          className={styles.formInput}
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          id="contact-email"
          className={styles.formInput}
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="contact-desc"
          id="contact-desc"
          cols="10"
          rows="14"
          className={styles.styled}
          required
          placeholder="Write your message here...."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
