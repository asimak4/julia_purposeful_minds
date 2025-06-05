import styles from './HelpfulInformationPage.module.css'; // Import CSS Module
import { motion } from 'framer-motion'; // Import motion

// Placeholder for HelpfulInformationPage component
export default function HelpfulInformationPage() {

  const sectionVariants = {
    hidden: { opacity: 0, y: 75, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
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
    <div className={styles.pageContainer}>
      {/* <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Helpful Information & FAQs</h1>
      </motion.section> */}

      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2, staggerChildren: 0.15, delayChildren: 0.3 }}
      >
        <h2>Frequently Asked Questions (FAQs)</h2>
        
        <motion.h3 variants={itemVariants}>About Dyslexia</motion.h3>
        <motion.details className={styles.faqItem} variants={itemVariants}>
          <summary className={styles.faqSummary}>What is dyslexia?</summary>
          <div className={styles.faqContent}>
            <p>
              Dyslexia is a specific learning disability that is neurobiological in origin. It is characterized by difficulties with accurate and/or fluent word recognition and by poor spelling and decoding abilities. These difficulties typically result from a deficit in the phonological component of language that is often unexpected in relation to other cognitive abilities and the provision of effective classroom instruction. (Source: International Dyslexia Association)
            </p>
          </div>
        </motion.details>
        <motion.details className={styles.faqItem} variants={itemVariants}>
          <summary className={styles.faqSummary}>What are common signs of dyslexia?</summary>
          <div className={styles.faqContent}>
            <p>Common signs of dyslexia can vary by age but may include:</p>
            <ul>
              <li>Difficulty learning the alphabet and letter sounds.</li>
              <li>Trouble with rhyming or recognizing rhyming patterns.</li>
              <li>Persistent difficulty sounding out words (decoding).</li>
              <li>Reading slowly and with a lot of effort.</li>
              <li>Frequent spelling errors, even with common words.</li>
              <li>Mispronouncing familiar words or transposing sounds or letters.</li>
              <li>Difficulty retrieving words (word finding).</li>
              <li>Family history of dyslexia or reading difficulties.</li>
            </ul>
          </div>
        </motion.details>
        {/* Add more dyslexia FAQs as needed, following the same structure */}

        <motion.h3 variants={itemVariants} transition={{delay: 0.3}}>About Language Disorders</motion.h3>
        <motion.details className={styles.faqItem} variants={itemVariants}>
          <summary className={styles.faqSummary}>What is a language disorder?</summary>
          <div className={styles.faqContent}>
            <p>
              A language disorder is an impairment in the ability to understand and/or use words in context, both verbally and nonverbally. It can involve the form of language (phonology, morphology, syntax), the content of language (semantics), and/or the function of language in communication (pragmatics) in any combination.
            </p>
          </div>
        </motion.details>
        <motion.details className={styles.faqItem} variants={itemVariants}>
          <summary className={styles.faqSummary}>What are the differences between receptive and expressive language disorders?</summary>
          <div className={styles.faqContent}>
            <p>
              A receptive language disorder involves difficulty understanding language (e.g., following directions, understanding questions). An expressive language disorder involves difficulty communicating thoughts and ideas (e.g., limited vocabulary, incorrect grammar, difficulty forming sentences).
            </p>
          </div>
        </motion.details>
        {/* Add more language disorder FAQs as needed, following the same structure */}
      </motion.section>

      <motion.section
        className={`${styles.section} ${styles.twoColumnSection}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2>Why Choose a Speech-Language Pathologist (SLP)?</h2>
        <div className={styles.twoColumnGrid}>
          <motion.div className={styles.textColumn} variants={slideInLeftVariants} transition={{ duration: 0.7, delay: 0.2 }}>
            <p>
              Speech-Language Pathologists (SLPs) are experts in communication. We are trained to evaluate, diagnose, and treat a wide range of speech, language, cognitive-communication, and swallowing disorders in individuals of all ages. SLPs use evidence-based practices to help individuals improve their communication skills, build confidence, and achieve their academic and personal goals.
            </p>
          </motion.div>
          <motion.div className={styles.iconColumn} variants={slideInRightVariants} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className={styles.iconPlaceholder}>
              <img src={`${process.env.PUBLIC_URL}/books.jpg`} alt="Stack of colorful books" className={styles.infoImageActual} />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={`${styles.section} ${styles.twoColumnSection}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2>How We Target Spelling</h2>
        <div className={`${styles.twoColumnGrid} ${styles.imageLeft}`}>
          <motion.div className={styles.iconColumn} variants={slideInLeftVariants} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className={styles.iconPlaceholder}>
              <img src={`${process.env.PUBLIC_URL}/scrabble.jpg`} alt="Scrabble tiles spelling out words" className={styles.infoImageActual} />
            </div>
          </motion.div>
          <motion.div className={styles.textColumn} variants={slideInRightVariants} transition={{ duration: 0.7, delay: 0.2 }}>
            <p>
              Effective spelling instruction involves understanding the relationships between sounds and letters (phonics), learning common spelling patterns, and understanding word structure (morphology). We incorporate multisensory approaches to make learning spelling rules engaging and memorable. For students with dyslexia, we often draw upon Orton-Gillingham based principles, focusing on systematic, explicit instruction in phonological awareness, phonics, and word study.
            </p>
            <p>
              <em>As mentioned in our services, while not fully certified in Orton-Gillingham, we utilize its foundational, evidence-based principles to guide our spelling and decoding interventions.</em>
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 