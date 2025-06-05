import styles from './AboutPage.module.css'; // Import CSS Module
import { motion } from 'framer-motion'; // Import motion

// Placeholder for AboutPage component
export default function AboutPage() {

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

  const itemVariants = { // For list items or other general items
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <div className={styles.pageContainer}>
      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Meet Your Therapist</h1>
        
        <div className={styles.profileContainer}>
          <motion.div
            className={styles.profileText}
            variants={slideInLeftVariants}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className={styles.therapistName}>Julia Simak, MS, CCC-SLP</h2>
            <p className={styles.bioIntro}>
              This will be a much more in-depth bio. Here you can talk about your education and experience.
            </p>
            <p>
              At mei quis eius quas, mei ea lucilius qualisque explicari. Ne mel choro option. Ne per altera iriure concludaturque. Affert alterum repudiare at vis, apeirian gubergren an quo, soleat possit id his. Et nec vero modus vulputate, qui ex exerci nullam utamur, iuvaret invenire interesset et pro. Te sit everti euismod docendi, at per solum posse.
            </p>
            <p>
              Lorem ridens alterum pro te, vis te mucius corpora adversarium. Mazim verear virtute nec ne, luptatum recteque ei mel. Ex omnium docendi liberavisse sed, mel id doctus audiam regione, virtute mediocritatem sed ut. Vix accusam vivendum in. In has tritani epicuri eloquentiam, vix sumo iudico eripuit no.
            </p>
            <p>
              Per ea ubique adipisci gubergren. Vis cu mazim dictas, per congue civibus cu. Dico labitur lobortis duo at, id ius movet doctus. His ea lorem dolorum delicata, ne consul atomorum liberavisse sed, at purto unum his.
            </p>
            <div className={styles.licensingInfo}>
              <h3>Licensing Information</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.profileImagePlaceholder}
            variants={slideInRightVariants}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img src={`${process.env.PUBLIC_URL}/JuliaPhoto.jpg`} alt="Julia Simak" className={styles.profileImage} />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.3 }} // Slight delay for the second section
      >
        <h2>Experience</h2>
        <p>Previously worked with esteemed organizations including:</p>
        <motion.ul className={styles.experienceList} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} transition={{ staggerChildren: 0.2, delayChildren: 0.4 }}>
          <motion.li className={styles.experienceItemContainer} variants={itemVariants}>
            <span className={styles.experienceItemHeader}>LMB</span>
            <motion.div className={styles.experienceItemSubContent} variants={itemVariants} transition={{delay: 0.1}}>
              <p>Spearheaded innovative therapy programs for early intervention, focusing on phonological awareness and articulation. Collaborated with a multidisciplinary team to develop individualized education plans (IEPs) for a diverse caseload of students. Average caseload: 40-50 students, Pre-K to 2nd Grade. Duration: August 2018 - June 2020.</p>
              <p>Key achievements included a 25% improvement in standardized language scores for participating students and successfully mentoring two junior therapists.</p>
            </motion.div>
          </motion.li>
          <motion.li className={styles.experienceItemContainer} variants={itemVariants}>
            <span className={styles.experienceItemHeader}>TO</span>
            <motion.div className={styles.experienceItemSubContent} variants={itemVariants} transition={{delay: 0.1}}>
              <p>Provided comprehensive speech and language services in a K-8 school setting. Specialized in addressing language-based learning disabilities, including dyslexia and expressive/receptive language disorders. Conducted thorough evaluations and delivered evidence-based interventions. Duration: July 2020 - May 2022.</p>
              <p>Implemented a school-wide literacy initiative that increased reading fluency scores by an average of 15% among struggling readers. Received positive feedback for parent training workshops.</p>
            </motion.div>
          </motion.li>
          <motion.li className={styles.experienceItemContainer} variants={itemVariants}>
            <span className={styles.experienceItemHeader}>MCPS</span>
            <motion.div className={styles.experienceItemSubContent} variants={itemVariants} transition={{delay: 0.1}}>
              <p>Contracted SLP for Montgomery County Public Schools, working with middle and high school students. Focused on executive functioning skills, social communication (pragmatics), and augmentative and alternative communication (AAC) needs. Maintained detailed progress notes and participated in IEP meetings. Duration: August 2022 - Present.</p>
              <p>Successfully integrated new AAC technologies for several non-verbal students, significantly improving their ability to communicate and participate in classroom activities.</p>
            </motion.div>
          </motion.li>
          {/* Add more as needed */}
        </motion.ul>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.3 }} // Adjust delay if needed for flow
      >
        <h2>My Approach to Therapy</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
        </p>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
        </p>
        {/* You can add more paragraphs or bullet points here */}
      </motion.section>

    </div>
  );
} 