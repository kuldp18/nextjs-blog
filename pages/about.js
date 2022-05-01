import CustomHead from '../components/CustomHead';
import styles from '../styles/About.module.css';
const About = () => {
  return (
    <div className={styles.container}>
      <CustomHead title="About - Hunting Coder" />
      <h1>About Me 😎</h1>
      <p>Nothing here right now.</p>
    </div>
  );
};

export default About;
