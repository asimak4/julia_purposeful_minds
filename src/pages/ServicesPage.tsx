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
      {/* <motion.div
          className={styles.logoContainer}
          variants={slideInRightVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img src={`${process.env.PUBLIC_URL}/PurposefulMindsLogo.png`} alt="Purposeful Minds logo" className={styles.logoImage}/>
      </motion.div> */}
      
      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <header className={styles.pageHeader}>
          <h1>Our Services</h1>
        </header>

        {/* Introduction and Consultation Grid */}
        <motion.div
          className={styles.topSectionsGrid}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Introduction Section */}
          <motion.section
            className={styles.introSection}
            variants={slideInLeftVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <motion.div 
              // className={styles.introContent}
              >
              <div className={styles.contentWrapper}>
                <h2>Our Approach & Services</h2>
                <p>At <i>Purposeful Minds</i>, we meet each child where they are academically, emotionally, and with respect to their individual pace of learning. In sessions, we give them practical tools and strategies tailored to their needs, creating a foundation for steady progress and lasting growth. Sessions typically occur twice a week and focus on establishing routines, learning strategies, and building self-awareness.</p>
              </div>
              <p className={styles.pricing}>All 50-minute therapy sessions are billed at $175.</p>
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
            //  className={styles.consultationContent}
            >
              <div className={styles.contentWrapper}>
                <h2>Consultations</h2>
                <p>Before the consultation, we ask that families provide any formal evaluations or standardized assessments they have. We will carefully review all existing documentation and hold a virtual 1 hour consultation to identify your child's strengths and areas of need before beginning treatment. Following the consultation, we create a personalized plan of care that outlines targeted areas for growth and guides our ongoing sessions.</p>
              </div>
              <p className={styles.pricing}>1 hour consultation (including plan of care) is billed at $300</p>
            </motion.div>
          </motion.section>
        </motion.div>

        {/* Services Grid */}
        <motion.section
          className={styles.servicesGrid}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Executive Functioning Card */}
          <motion.div
            className={styles.serviceCard}
            variants={slideInLeftVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 1.0 }}
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
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <div className={styles.cardImage}>
              <img src={`${process.env.PUBLIC_URL}/speak.png`} alt="Scrabble tiles spelling out words, representing language" />
            </div>
            <div className={styles.cardContent}>
              <h3>Speech-Language Services</h3>
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
          </motion.div>

          {/* Dyslexia Support Card */}
          <motion.div
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
              <p>At <i>Purposeful Minds</i>, our sessions are grounded in the Science of Reading, a research-based framework that highlights the skills students need to become confident, capable readers. We use the Orton-Gillingham approach, a structured, multisensory method that is especially effective for building phonics, decoding, and spelling skills. Before beginning instruction, we carefully review any previous evaluations and reports and conduct our own screenings to gain a clearer understanding of each student's strengths and weaknesses. This insight allows us to tailor our instruction to meet their individual needs. </p>
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
      </motion.section>

    </div>
  );
} 