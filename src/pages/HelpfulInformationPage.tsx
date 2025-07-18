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
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.2, staggerChildren: 0.15, delayChildren: 0.3 }}
      >
        <h2>Frequently Asked Questions (FAQs)</h2>
        
        <motion.h3 variants={itemVariants}>About Our Services</motion.h3>
        <motion.details className={styles.faqItem} variants={itemVariants}>
          <summary className={styles.faqSummary}>What is executive functioning?</summary>
          <div className={styles.faqContent}>
            <p>
              Executive function skills allow us to organize plans, maintain focus, adapt to changes, and manage multiple tasks. These skills are crucial for success in academic, professional, and social settings.
            </p>
          </div>
        </motion.details>
        <motion.details className={styles.faqItem} variants={itemVariants}>
          <summary className={styles.faqSummary}>How does executive functioning impact language? </summary>
          <div className={styles.faqContent}>
          <p>Executive functioning and language skills are deeply interconnected, and challenges in one area can impact the other. Executive functioning involves cognitive processes such as planning, organizing, working memory, self-monitoring, and flexible thinking. Language skills include both understanding (receptive language) and expressing (expressive language) ideas clearly and effectively.</p>
            <p>When a child experiences difficulties with executive functioning, they may struggle to organize their thoughts, follow multi-step directions, or maintain attention during conversations or classroom activities. These challenges can make it harder for them to process and use language efficiently. Conversely, language difficulties can affect executive functions by limiting a child's ability to internally verbalize steps for a task, self-regulate through self-talk, or comprehend instructions, which are all important for effective planning and problem-solving.</p>
            <p>Together, these overlapping difficulties can create a cycle where struggles in language impact executive functioning, and vice versa, potentially leading to challenges in academic performance, social interactions, and daily tasks. Addressing both areas through integrated support helps build stronger communication skills and cognitive strategies, empowering the child to better manage tasks, express themselves, and succeed in multiple settings.
            </p>

          </div>
        </motion.details>
        <motion.details className={styles.faqItem} variants={itemVariants}>
          <summary className={styles.faqSummary}>What is a language disorder?</summary>
          <div className={styles.faqContent}>
            <p>
              Language disorders involve the processing of linguistic information. Challenges may be receptive (understanding language), expressive (expressing language), or a combination of both.
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
        <motion.details className={styles.faqItem} variants={itemVariants}>
          <summary className={styles.faqSummary}>What is dyslexia?</summary>
          <div className={styles.faqContent}>
            <p>
            Dyslexia is a language-based learning disability. Dyslexia refers to a cluster of symptoms, which result in people having difficulties with specific language skills, particularly reading. Students with dyslexia usually experience difficulties with other language skills such as spelling, writing, and pronouncing words. 
            </p>
            <a href="https://dyslexiaida.org/dyslexia-basics/" target="_blank" rel="noopener noreferrer">Learn more about dyslexia</a>
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
        <motion.details className={styles.faqItem} variants={itemVariants}>
          <summary className={styles.faqSummary}>Why a Speech-Language Pathologist? </summary>
          <div className={styles.faqContent}>
            <p>
            While speech-language pathologists (SLPs) are well known for supporting articulation and expressive/receptive language, their expertise extends much further. SLPs also address challenges related to communication, executive functioning, literacy, and social interactions. For example, they may help a child recall key details from a story, organize their writing, or enhance their phonological awareness.
            </p>
          </div>
        </motion.details>
        <motion.details className={styles.faqItem} variants={itemVariants}>
          <summary className={styles.faqSummary}> What is the youngest age you work with?  </summary>
          <div className={styles.faqContent}>
            <p>
            Age 4 - We work with children ages 4 and up, when they’re better able to engage in structured, goal-focused sessions. For children under 3, we recommend early intervention services that specialize in supporting toddlers through play-based, parent-guided approaches. We’re happy to refer families of younger children to trusted early intervention providers who are better equipped to meet their needs at that stage.
            </p>
          </div>
        </motion.details>
        <motion.details className={styles.faqItem} variants={itemVariants}>
          <summary className={styles.faqSummary}> Do you see college students?  </summary>
          <div className={styles.faqContent}>
            <p>
              Yes! At Purposeful Minds, college and graduate students build skills like time management, setting and maintaining priorities, handling intensive reading demands, studying effectively, and improving analytical writing.
            </p>
          </div>
        </motion.details>
        <motion.details className={styles.faqItem} variants={itemVariants}>
          <summary className={styles.faqSummary}> Do you accept insurance? </summary>
          <div className={styles.faqContent}>
            <p>
            No. Purposeful Minds provides services as an out-of-network provider, which means our sessions are paid privately rather than through insurance. This approach gives us the flexibility to offer customized care tailored to your child’s needs without the constraints of insurance requirements. While we don’t submit claims on your behalf, many insurance policies allow clients to seek reimbursement for out-of-network services. We can provide a detailed statement of services, known as a superbill, which you can use to file a claim with your insurance company. Please note that it’s your responsibility to submit the superbill and communicate directly with your insurance provider about coverage, reimbursement, and claim processes. We encourage you to verify your plan’s out-of-network benefits before beginning services.
            </p>
          </div>
        </motion.details>
        {/* Add more dyslexia FAQs as needed, following the same structure */}
        {/* Add more language disorder FAQs as needed, following the same structure */}
      </motion.section>

      {/* <motion.section
        className={`${styles.section} ${styles.twoColumnSection}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
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
        viewport={{ amount: 0.1 }}
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
      </motion.section> */}
    </div>
  );
} 