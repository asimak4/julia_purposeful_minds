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
        <h1>Our Services</h1>
      </header>

      {/* Introduction and Consultation Grid */}
      <motion.div
        className={styles.topSectionsGrid}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Introduction Section */}
        <motion.section
          className={styles.introSection}
          variants={slideInLeftVariants}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.div className={styles.introContent}>
            <h2>Our Approach & Services</h2>
            <p>At <i>Purposeful Minds</i>, we meet each child where they are—academically, emotionally, and with respect to their individual pace of learning. Along the way, we equip them with practical tools and strategies tailored to their needs, creating a foundation for steady progress and lasting growth. Initial sessions typically occur twice a week and focus on building confidence, self-awareness, and academic independence.</p>
            <p className={styles.pricing}>All 50-minute therapy sessions start at $175.</p>
          </motion.div>
        </motion.section>

        {/* Consultation Section */}
        <motion.section
          className={styles.consultationSection}
          variants={slideInRightVariants}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.div className={styles.consultationContent}>
            <h2>Consultations</h2>
            <p>Before the consultation, we ask that families provide any formal evaluations or standardized assessments they have. We will carefully review all existing documentation and hold a virtual 1 hour consultation to identify your child's strengths and areas of need before beginning treatment. Following the consultation, we create a personalized plan of care that outlines targeted areas for growth and guides our ongoing sessions.</p>
            <p className={styles.pricing}>1 hour consultations are billed at $300.</p>
          </motion.div>
        </motion.section>
      </motion.div>

      {/* Services Grid */}
      <motion.section
        className={styles.servicesGrid}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Executive Functioning Card */}
        <motion.div
          className={styles.serviceCard}
          variants={slideInLeftVariants}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className={styles.cardImage}>
            <img src={`${process.env.PUBLIC_URL}/todolist.png`} alt="Children happily engaged in a play-based activity" />
          </div>
          <div className={styles.cardContent}>
            <h3>Executive Functioning Coaching</h3>
            <p>At <i>Purposeful Minds</i>, we help students who struggle with Attention Deficit Hyperactivity Disorder (ADHD), Executive Functioning, language processing, and learning. Our strategies focus on:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Effective time management and meeting deadlines</li>
              <li className={styles.listItem}>Organizing and tracking materials, assignments, and personal belongings</li>
              <li className={styles.listItem}>Setting achievable goals and planning steps to reach them</li>
              <li className={styles.listItem}>Retaining and retrieving information efficiently</li>
              <li className={styles.listItem}>Taking clear, systematic notes</li>
              <li className={styles.listItem}>Overcoming procrastination and maintaining motivation</li>
              <li className={styles.listItem}>Following multi-step instructions and transitions</li>
            </ul>
          </div>
        </motion.div>

        {/* Speech-Language Services Card */}
        <motion.div
          className={styles.serviceCard}
          variants={slideInRightVariants}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className={styles.cardImage}>
            <img src={`${process.env.PUBLIC_URL}/speak.png`} alt="Scrabble tiles spelling out words, representing language" />
          </div>
          <div className={styles.cardContent}>
            <h3>Speech-Language Services</h3>
            <p><i>Purposeful Minds</i> offers speech and language services that target the following:</p>
            
            <h4>Receptive Language</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>Understanding spoken and written language</li>
              <li className={styles.listItem}>Following directions and instructions</li>
              <li className={styles.listItem}>Comprehending questions and responding appropriately</li>
              <li className={styles.listItem}>Processing and interpreting vocabulary and grammar</li>
               { /* <li className={styles.listItem}>Grasping the meaning of stories or conversations</li>
              <li className={styles.listItem}>Recognizing nonverbal cues like tone, facial expressions, and body language</li>
              <li className={styles.listItem}>Making inferences and understanding implied information</li>
              <li className={styles.listItem}>Remembering and recalling heard information</li>
              <li className={styles.listItem}>Understanding multiple-step or complex commands</li> */}
            </ul>

            <div className={styles.languageGrid}>
              <div>
                <h4>Expressive Language</h4>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Forming words and sentences to communicate thoughts and ideas</li>
                  <li className={styles.listItem}>Using appropriate vocabulary and grammar</li>
                  <li className={styles.listItem}>Organizing thoughts logically when speaking or writing</li>
                  <li className={styles.listItem}>Telling stories or describing events clearly and coherently</li>
                  {/* <li className={styles.listItem}>Initiating and maintaining conversations</li>
                  <li className={styles.listItem}>Adjusting language based on the listener or social context</li>
                  <li className={styles.listItem}>Using language to solve problems or explain reasoning</li> */}
                </ul>

                <h4>Written Language</h4>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Organizing ideas logically and coherently</li>
                  <li className={styles.listItem}>Using proper grammar, punctuation, and spelling</li>
                  <li className={styles.listItem}>Structuring sentences and paragraphs effectively</li>
                  <li className={styles.listItem}>Developing clear introductions, bodies, and conclusions</li>
                  {/* <li className={styles.listItem}>Applying appropriate vocabulary and tone for the audience</li>
                  <li className={styles.listItem}>Using transition words to connect ideas smoothly</li>
                  <li className={styles.listItem}>Editing and revising for clarity and correctness</li>
                  <li className={styles.listItem}>Expressing thoughts, arguments, or narratives effectively in writing</li>
                  <li className={styles.listItem}>Following writing conventions</li> */}
                </ul>
              </div>
              <div className={styles.highlightedList}>
                <h4>Additional Areas of Speech and Language Support</h4>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Articulation</li>
                  <li className={styles.listItem}>Phonology</li>
                  <li className={styles.listItem}>Fluency</li>
                  <li className={styles.listItem}>Pragmatics</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dyslexia Support Card */}
        <motion.div
          className={styles.serviceCard}
          variants={slideInLeftVariants}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className={styles.cardImage}>
            <img src={`${process.env.PUBLIC_URL}/openbook.png`} alt="Open book with colorful letters, representing literacy and dyslexia support" />
          </div>
          <div className={styles.cardContent}>
            <h3>Specialized Dyslexia Support</h3>
            <p>At <i>Purposeful Minds</i>, our sessions are grounded in the Science of Reading—a research-based framework that highlights the skills students need to become confident, capable readers. We use the Orton-Gillingham approach, a structured, multisensory method that is especially effective for building phonics, decoding, and spelling skills. Before beginning instruction, we carefully review any previous evaluations and reports and conduct our own screenings to gain a clearer understanding of each student's strengths and weaknesses. This insight allows us to tailor our instruction to meet their individual needs. By combining data-informed decisions with evidence-based methods, we provide personalized support that builds strong, lasting literacy skills.</p>
            <p><strong>Five Pillars of Literacy:</strong></p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Phonological Awareness</li>
              <li className={styles.listItem}>Phonics</li>
              <li className={styles.listItem}>Fluency</li>
              <li className={styles.listItem}>Vocabulary</li>
              <li className={styles.listItem}>Comprehension</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

    </div>
  );
} 