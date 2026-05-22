import styles from './ServicesPage.module.css'; // Import CSS Module
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
      <section className={styles.section}>
        <header className={styles.pageHeader}>
          <h1>Services</h1>
        </header>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Introduction and Consultation Grid */}
          <div className={styles.topSectionsGrid}>
            {/* Introduction Section */}
            <motion.section
              className={styles.introSection}
              variants={slideInLeftVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <motion.div className={styles.pricingCardContent}>
                <div className={styles.contentWrapper}>
                  <h2>Approach</h2>
                  <p>At <i>Purposeful Minds</i>, Julia meets each client where they are academically, emotionally, and with respect to their individual pace of learning. In sessions, she gives them practical tools and strategies tailored to their needs, creating a foundation for steady progress and lasting growth. Clients are encouraged to participate in sessions twice weekly to support consistent progress.</p>
                </div>
                <p className={styles.pricing}> 50-minute therapy sessions are billed at $175. We offer a 6-month discount to clients who attend sessions twice a week at a rate of $160/session.</p>
              </motion.div>
            </motion.section>

            {/* Consultation Section */}
            <motion.section
              className={styles.consultationSection}
              variants={slideInRightVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <motion.div 
                className={styles.pricingCardContent}
              >
                <div className={styles.contentWrapper}>
                  <h2>Consultations</h2>
                  <p> Families are asked to provide formal evaluations, standardized assessments, IEP/504 plans, or other relevant documentation at least 48 hours prior to the scheduled consultation. Julia will carefully review all existing documentation and hold a one hour consultation to identify strengths and areas of need before beginning sessions. Following the consultation, she will develop a personalized treatment plan that identifies targeted areas for growth and informs subsequent sessions. </p>
                </div>
                <p className={styles.pricing}>1 hour consultation (including treatment plan) is billed at $300</p>
              </motion.div>
            </motion.section>
          </div>

          {/* Services Grid */}
          <div className={styles.servicesGrid}>
            {/* Executive Functioning Card */}
            <section className={styles.serviceCard}>
            <div className={styles.cardImage}>
              <img src={`${process.env.PUBLIC_URL}/todolist.png`} alt="Children happily engaged in a play-based activity" />
            </div>
            <div className={styles.cardContent}>
              <h3>Executive Functioning Coaching</h3>
              <p>At <i>Purposeful Minds</i>, Julia helps students who struggle with Attention Deficit Hyperactivity Disorder (ADHD), executive functioning, language processing, and learning. Her strategies focus on: </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Effective time management and meeting deadlines</li>
                <li className={styles.listItem}>Organizing and tracking materials, assignments, and personal belongings</li>
                <li className={styles.listItem}>Setting achievable goals and planning steps to reach them</li>
                <li className={styles.listItem}>Retaining and retrieving information efficiently</li>
                <li className={styles.listItem}>Taking clear, systematic notes</li>
                <li className={styles.listItem}>Overcoming procrastination and maintaining motivation</li>
                <li className={styles.listItem}>Following multi-step instructions and transitions</li>
                <li className={styles.listItem}>Strengthening self-monitoring and error detection during tasks</li>
                <li className={styles.listItem}>Improving cognitive flexibility (shifting between tasks, adapting to changes in plans)</li>
                <li className={styles.listItem}>Enhancing working memory for multi-step tasks and mental manipulation of information</li>
                <li className={styles.listItem}>Improving attention control and sustained focus in academic and daily activities</li>
                <li className={styles.listItem}>Strengthening prioritization skills (identifying what is most important or urgent)</li>
                <li className={styles.listItem}>Developing study skills and test preparation strategies (e.g., planning study schedules, review techniques)</li>
                <li className={styles.listItem}>Improving time estimation accuracy and awareness of task duration</li>
                <li className={styles.listItem}>Enhancing follow-through and completion of long-term projects</li>
              </ul>
            </div>
            </section>

            {/* Speech-Language Services Card */}
            <section className={styles.serviceCard}>
            <div className={styles.cardImage}>
              <img src={`${process.env.PUBLIC_URL}/speak.png`} alt="Scrabble tiles spelling out words, representing language" />
            </div>
            <div className={styles.cardContent}>
              <h3>Speech &amp; Language Services</h3>
              <p><i>Purposeful Minds</i> offers comprehensive speech and language services focusing on communication development and language processing skills.</p>
              
              <div className={styles.serviceAreas}>
                <div className={styles.serviceArea}>
                  <h4>Receptive Language</h4>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>Understanding spoken and written language</li>
                    <li className={styles.listItem}>Following directions and instructions</li>
                    <li className={styles.listItem}>Processing vocabulary and grammar</li>
                  </ul>
                </div>
                
                <div className={styles.serviceArea}>
                  <h4>Expressive Language</h4>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>Forming clear sentences and thoughts</li>
                    <li className={styles.listItem}>Using appropriate vocabulary and grammar</li>
                    <li className={styles.listItem}>Organizing ideas logically</li>
                  </ul>
                </div>
                
                <div className={styles.serviceArea}>
                  <h4>Written Language & Additional Support</h4>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>Grammar, punctuation, and spelling</li>
                    <li className={styles.listItem}>Structuring paragraphs effectively</li>
                    <li className={styles.listItem}>Articulation, phonology, fluency, and pragmatics</li>
                  </ul>
                </div>
              </div>
            </div>
            </section>

          {/* Dyslexia Support Card */}
          {/* <motion.div
            className={styles.serviceCard}
            variants={slideInLeftVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 1.4 }}
          >
            <div className={styles.cardImage}>
              <img src={`${process.env.PUBLIC_URL}/openbook.png`} alt="Open book with colorful letters, representing literacy and dyslexia support" />
            </div>
            <div className={styles.cardContent}>
              <h3>Specialized Dyslexia Support</h3>
              <p>At <i>Purposeful Minds</i>, our sessions are grounded in the Science of Reading, a research-based framework that highlights the skills students need to become confident, capable readers. We use the Orton-Gillingham philosophy, a structured, multisensory method that is especially effective for building phonics, decoding, and spelling skills. Before beginning instruction, we carefully review any previous evaluations and reports and conduct our own screenings to gain a clearer understanding of each student's strengths and weaknesses. This insight allows us to tailor our instruction to meet their individual needs. </p>
              <p><strong>Five Pillars of Literacy:</strong></p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Phonological Awareness</li>
                <li className={styles.listItem}>Phonics</li>
                <li className={styles.listItem}>Fluency</li>
                <li className={styles.listItem}>Vocabulary</li>
                <li className={styles.listItem}>Comprehension</li>
              </ul>
            </div>
          </motion.div> */}
          </div>
        </motion.div>
      </section>

    </div>
  );
} 