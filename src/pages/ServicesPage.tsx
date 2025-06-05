import styles from './ServicesPage.module.css'; // Import CSS Module
import { Link } from 'react-router-dom'; // For the button
import { motion } from 'framer-motion'; // Import motion

// Placeholder for ServicesPage component
export default function ServicesPage() {

  const sectionVariants = {
    hidden: { opacity: 0, y: 75, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.pageHeader}>
        <h1>Evaluation and Therapy Services</h1> {/* Main page title like screenshot 1 */}
      </header>

      {/* Evaluations Section (Inspired by Screenshot 2) */}
      <motion.section
        className={`${styles.serviceSectionTwoCol} ${styles.textLeftPinkBg}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={styles.columnText}
          variants={slideInLeftVariants}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className={styles.sectionIntro}>Evaluations to Get to the Root of the Issue</p>
          <h2>Evaluations</h2>
          <p>Comprehensive evaluations are crucial to understand an individual's strengths and challenges. We conduct thorough assessments to identify specific areas of need in speech, language, literacy, and executive functioning. This detailed understanding forms the foundation for a personalized and effective therapy plan.</p>
          {/* You can add bullet points here if desired, e.g., what evaluations cover */}
          {/* <ul className={styles.list}> 
            <li className={styles.listItem}>Speech sound production</li>
            <li className={styles.listItem}>Receptive and expressive language</li>
            <li className={styles.listItem}>Reading fluency and comprehension (Dyslexia screening)</li>
            <li className={styles.listItem}>Written expression</li>
            <li className={styles.listItem}>Executive functions (attention, organization)</li>
          </ul> */}
          <p>Our goal is to uncover the underlying factors affecting communication and learning, enabling targeted intervention.</p>
          <Link to="/contact" className={`button-style ${styles.serviceCtaButton}`}> 
            Begin With A Free Consultation
          </Link>
        </motion.div>
        <motion.div
          className={styles.columnImage}
          variants={slideInRightVariants}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={`${process.env.PUBLIC_URL}/woman-reading.png`} alt="Woman reviewing documents, symbolizing evaluation process" />
        </motion.div>
      </motion.section>

      {/* Our Approach to Therapy Section (Inspired by Screenshot 1) */}
      <motion.section
        className={`${styles.serviceSectionTwoCol} ${styles.imageLeftPinkBg}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }} // Stagger section entrance slightly
      >
        <motion.div
          className={styles.columnImage}
          variants={slideInLeftVariants}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={`${process.env.PUBLIC_URL}/children-9628976.png`} alt="Children happily engaged in a play-based activity" />
        </motion.div>
        <motion.div
          className={styles.columnText}
          variants={slideInRightVariants}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className={styles.sectionIntro}>Personalized Therapy from a Passionate Team</p>
          <h2>Our Approach to Therapy</h2>
          <p>We believe in a collaborative and family-centered approach. Our therapy sessions are designed to be engaging, evidence-based, and tailored to the unique needs and goals of each individual. We work closely with families to ensure strategies are practical and can be integrated into daily life.</p>
          
          <h3>Executive Functioning Support</h3>
          <p>We provide targeted support for critical executive functioning skills, including attention, organization, time management, study skills, written organization, and note-taking, empowering students for academic and life success.</p>
          
          <h3>Speech & Language Services</h3>
          <p>Comprehensive therapy is offered for a range of speech and language needs:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong>Receptive Language:</strong> Enhancing understanding of spoken and written language, including reading comprehension and following directions.</li>
            <li className={styles.listItem}><strong>Expressive Language:</strong> Improving the use of language to communicate effectively, covering vocabulary, sentence structure, storytelling, and written expression.</li>
            {/* Add more specific items if needed from your original list */}
          </ul>
        </motion.div>
      </motion.section>

      {/* Our Specialties / Dyslexia Support Section (Inspired by Screenshot 3) */}
      <motion.section
        className={`${styles.serviceSectionTwoCol} ${styles.imageLeftDefaultBg}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }} // Stagger section entrance slightly
      >
        <motion.div
          className={styles.columnImage}
          variants={slideInLeftVariants}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={`${process.env.PUBLIC_URL}/lettersBook.jpg`} alt="Open book with colorful letters, representing literacy and dyslexia support" />
        </motion.div>
        <motion.div
          className={styles.columnText}
          variants={slideInRightVariants}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* <p className={styles.sectionIntro}>Focused Expertise</p> Optional intro line */}
          <h2>Specialized Dyslexia Support</h2>
          <p>Dyslexia is a common learning difference that primarily affects the skills involved in accurate and fluent word reading and spelling. We provide specialized support drawing from Orton-Gillingham (OG) principles to build a strong foundation in literacy.</p>
          <p>Our targeted strategies assist with:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Decoding (sounding out words)</li>
            <li className={styles.listItem}>Phonological awareness</li>
            <li className={styles.listItem}>Spelling and encoding</li>
            <li className={styles.listItem}>Reading fluency and comprehension</li>
          </ul>
          <p>For more information, you can visit the <a href="https://dyslexiaida.org/" target="_blank" rel="noopener noreferrer">International Dyslexia Association (IDA)</a>.</p>
          <p><em>While not fully certified in OG, we utilize its foundational principles to guide our intervention.</em></p> 
        </motion.div>
      </motion.section>

      {/* Add other specialty sections here if needed, following a similar pattern */}

    </div>
  );
} 