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
        <h1>Our Services</h1> {/* Main page title like screenshot 1 */}
      </header>

      {/* Evaluations Section (Inspired by Screenshot 2) */}
      <motion.section
        className={`${styles.serviceSectionTwoCol} ${styles.textLeftPinkBg}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={styles.columnText}
          variants={slideInLeftVariants}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2>Evaluations</h2>
          <p>Our comprehensive evaluation process is designed to build a full picture of your child's needs, strengths, and goals. It begins with a 15-minute consultation to gather initial information and determine fit. We then conduct an in-depth review of relevant reports, evaluations, and other documentation provided by the family. The process concludes with a 50-minute virtual conference that explores family observations, daily routines, academic concerns, and overall goals. Following the evaluation, we create a personalized plan of care that outlines targeted areas for growth and guides our ongoing sessions. This plan ensures that the support we provide is intentional, individualized, and aligned with your child's unique needs.</p>
          {/* You can add bullet points here if desired, e.g., what evaluations cover */}
          {/* <ul className={styles.list}> 
            <li className={styles.listItem}>Speech sound production</li>
            <li className={styles.listItem}>Receptive and expressive language</li>
            <li className={styles.listItem}>Reading fluency and comprehension (Dyslexia screening)</li>
            <li className={styles.listItem}>Written expression</li>
            <li className={styles.listItem}>Executive functions (attention, organization)</li>
          </ul> */}
          <Link to="/contact" className={`button-style ${styles.serviceCtaButton}`}> 
            Begin With a Free 15 Minute Consultation
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
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.2 }} // Stagger section entrance slightly
      >
        <motion.div
          className={styles.columnImage}
          variants={slideInLeftVariants}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={`${process.env.PUBLIC_URL}/children-9628976.png`} alt="Children happily engaged in a play-based activity" />
        </motion.div>

        <div className={styles.columnTextContainer}>
          <motion.div
            className={styles.columnText}
            variants={slideInRightVariants}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2>Our Approach & Services</h2>
            <p>At <i>Purposeful Minds</i>, we meet each child where they are—academically, emotionally, and with respect to their individual pace of learning. We take the time to understand their current abilities, personal strengths, and unique challenges, then build support around their individual starting point. Along the way, we equip them with practical tools and strategies tailored to their needs, creating a foundation for steady progress and lasting growth. Students receive individualized support and learn practical strategies tailored to their needs. Initial sessions typically occur twice a week and focus on building confidence, self-awareness, and academic independence. Over time, students develop stronger learning habits and gain the tools to advocate for themselves and take ownership of their success.</p>
          </motion.div>
          
          <motion.div
            className={`${styles.columnText} ${styles.columnText2}`}
            variants={slideInRightVariants}
            transition={{ duration: 0.7, delay: 0.3 }} // Stagger entrance
          >
            <h3>Executive Functioning</h3>
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
          </motion.div>

          <motion.div
            className={styles.columnText}
            variants={slideInRightVariants}
            transition={{ duration: 0.7, delay: 0.4 }} // Stagger entrance
          >
            <h3>How Executive Functioning Impacts Language</h3>
            <p>Executive functioning and language skills are deeply interconnected, and challenges in one area can impact the other. Executive functioning involves cognitive processes such as planning, organizing, working memory, self-monitoring, and flexible thinking—skills that are essential for managing tasks and navigating daily life. Language skills include both understanding (receptive language) and expressing (expressive language) ideas clearly and effectively.</p>
            <p>When a child experiences difficulties with executive functioning, they may struggle to organize their thoughts, follow multi-step directions, or maintain attention during conversations or classroom activities. These challenges can make it harder for them to process and use language efficiently. Conversely, language difficulties can affect executive functions by limiting a child's ability to internally verbalize steps for a task, self-regulate through self-talk, or comprehend instructions, which are all important for effective planning and problem-solving.</p>
            <p>Together, these overlapping difficulties can create a cycle where struggles in language impact executive functioning, and vice versa, potentially leading to challenges in academic performance, social interactions, and daily tasks. Addressing both areas through integrated support helps build stronger communication skills and cognitive strategies, empowering the child to better manage tasks, express themselves, and succeed in multiple settings.
            </p>

          </motion.div>
        </div>
      </motion.section>

      {/* NEW Speech-Language Services Section */}
      <motion.section
        className={`${styles.serviceSectionTwoCol} ${styles.textLeftPinkBg}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className={styles.columnText}
          variants={slideInLeftVariants}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2>Speech-Language Services</h2>
          <p><i>Purposeful Minds</i> offers speech and language services that target the following:</p>
          
          <h3>Receptive Language</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Understanding spoken and written language</li>
            <li className={styles.listItem}>Following directions and instructions</li>
            <li className={styles.listItem}>Comprehending questions and responding appropriately</li>
            <li className={styles.listItem}>Processing and interpreting vocabulary and grammar</li>
            <li className={styles.listItem}>Grasping the meaning of stories or conversations</li>
            <li className={styles.listItem}>Recognizing nonverbal cues like tone, facial expressions, and body language</li>
            <li className={styles.listItem}>Making inferences and understanding implied information</li>
            <li className={styles.listItem}>Remembering and recalling heard information</li>
            <li className={styles.listItem}>Understanding multiple-step or complex commands</li>
          </ul>

          <div className={styles.multiColumnListContainer}>
            <div>
              <h3>Expressive Language</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>Forming words and sentences to communicate thoughts and ideas</li>
                <li className={styles.listItem}>Using appropriate vocabulary and grammar</li>
                <li className={styles.listItem}>Organizing thoughts logically when speaking or writing</li>
                <li className={styles.listItem}>Telling stories or describing events clearly and coherently</li>
                <li className={styles.listItem}>Initiating and maintaining conversations</li>
                <li className={styles.listItem}>Adjusting language based on the listener or social context</li>
                <li className={styles.listItem}>Using language to solve problems or explain reasoning</li>
              </ul>

              <h3>Written language</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>Organizing ideas logically and coherently</li>
                <li className={styles.listItem}>Using proper grammar, punctuation, and spelling</li>
                <li className={styles.listItem}>Structuring sentences and paragraphs effectively</li>
                <li className={styles.listItem}>Developing clear introductions, bodies, and conclusions</li>
                <li className={styles.listItem}>Applying appropriate vocabulary and tone for the audience</li>
                <li className={styles.listItem}>Using transition words to connect ideas smoothly</li>
                <li className={styles.listItem}>Editing and revising for clarity and correctness</li>
                <li className={styles.listItem}>Expressing thoughts, arguments, or narratives effectively in writing</li>
                <li className={styles.listItem}>Following writing conventions</li>
              </ul>
            </div>
            <div className={styles.highlightedList}>
              <h3>Additional Areas of Speech and Language Support</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>Articulation</li>
                <li className={styles.listItem}>Phonology</li>
                <li className={styles.listItem}>Fluency</li>
                <li className={styles.listItem}>Pragmatics</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.columnImage}
          variants={slideInRightVariants}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={`${process.env.PUBLIC_URL}/scrabble.jpg`} alt="Scrabble tiles spelling out words, representing language" />
        </motion.div>
      </motion.section>

      {/* Our Specialties / Dyslexia Support Section (Inspired by Screenshot 3) */}
      <motion.section
        className={`${styles.serviceSectionTwoCol} ${styles.imageLeftPinkBg}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
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
          <p>At <i>Purposeful Minds</i>, our sessions are grounded in the Science of Reading—a research-based framework that highlights the skills students need to become confident, capable readers. We use the Orton-Gillingham approach, a structured, multisensory method that is especially effective for building phonics, decoding, and spelling skills. Before beginning instruction, we carefully review any previous evaluations and reports and conduct our own screenings to gain a clearer understanding of each student's strengths and weaknesses. This insight allows us to tailor our instruction to meet their individual needs. By combining data-informed decisions with evidence-based methods, we provide personalized support that builds strong, lasting literacy skills.</p>
          <p>Five Pillars of Literacy:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Phonological Awareness</li>
            <li className={styles.listItem}>Phonics</li>
            <li className={styles.listItem}>Fluency</li>
            <li className={styles.listItem}>Vocabulary</li>
            <li className={styles.listItem}>Comprehension</li>
          </ul>
        </motion.div>
      </motion.section>

      {/* Add other specialty sections here if needed, following a similar pattern */}

    </div>
  );
} 