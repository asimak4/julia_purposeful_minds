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
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Our Story</h1>
        
        <div className={styles.profileContainer}>
          <motion.div
            className={styles.profileText}
            variants={slideInLeftVariants}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className={styles.bioIntro}>
              <i>Purposeful Minds LLC</i> was founded by Julia Simak, M.S., CCC-SLP, out of a deep passion for helping students who were falling through the cracks—not due to a lack of potential, but because of challenges with organization, executive functioning, and language.
            </p>
            <p>
              In her work as a Speech-Language Pathologist, Julia saw firsthand how many bright, capable students were overwhelmed by disorganization. Misplaced assignments, missed deadlines, and chaotic study habits often led to frustration, academic struggles, and a loss of confidence. Over time, she recognized a pattern: difficulties with executive functioning weren't isolated—they created a ripple effect, impacting every part of a student's life.
            </p>
            <p>
            But she also saw the transformation that could happen when students were given the right systems and strategies. With structured routines, visual tools, and personalized approaches, those same students began to experience clarity, consistency, and a renewed sense of control. The pieces started to fall into place—improved academics, better emotional regulation, and most importantly, growing self-confidence.
            </p>
            <p>
              Language plays a central role in this journey. Many students who struggle with executive functioning also face challenges in organizing their thoughts, writing clearly, or making sense of what they read. These difficulties are deeply rooted in language processing. At <i>Purposeful Minds</i>, Julia bridges the gap between executive functioning and language, supporting students in building the skills to comprehend, express, and succeed.
            </p>
            <p>
              What began as a desire to support individual students has grown into a broader mission: to help learners thrive through purposeful, individualized support that empowers them to reach their goals—academically, emotionally, and beyond.
            </p>

            <div className={styles.founderSection}>
              <h2>Founder of Purposeful Minds</h2>
              <p>
                Julia Simak, M.S., CCC-SLP, began her career as a Speech-Language Pathologist in public elementary schools, where she provided speech and language therapy to students with diverse communication needs. Early on, she collaborated closely with reading specialists, which sparked her interest in literacy development, dyslexia, and structured spelling interventions such as the Orton-Gillingham approach.
              </p>
              <p>
                During this time, Julia also gained valuable experience at Lindamood-Bell Learning Processes, where she provided intensive one-on-one intervention using programs such as <i>Visualizing and Verbalizing</i> (V&V) for reading comprehension and <i>Seeing Stars</i> for phonemic awareness and decoding. This work deepened her understanding of the connection between language processing and reading success, especially for students with dyslexia, ADHD, and other language-based learning differences.
              </p>
              <p>
                As she continued her work with students, Julia became increasingly aware of how executive functioning challenges—such as disorganization, time management, and difficulty initiating tasks—often coexisted with language and literacy difficulties. These needs were often underserved, yet they had a significant impact on students' academic performance and emotional well-being.
              </p>
              <p>
                Motivated to support this underserved population, Julia joined Thinking Organized, a private practice in the D.C. area specializing in executive functioning support. There, she worked with students from elementary through college, integrating speech-language therapy, reading intervention, and executive functioning strategies tailored to each student's strengths and needs.
              </p>
              <p>
                Through this journey, Julia also discovered the importance of partnering with families and schools to create supportive routines and consistent expectations at home and in the classroom. Recognizing the need for a practice that blends clinical expertise with personalized, practical support, she founded Purposeful Minds—a private practice dedicated to helping students build confidence, independence, and lasting academic and life skills through targeted support in executive functioning, literacy, and language.
              </p>
            </div>

            <div className={styles.licensingInfo}>
              <h3>Licensing Information</h3>
              <p>
                <b>Julia holds active licensure in Maryland, Washington, D.C., and Virginia, and is certified by the American Speech-Language-Hearing Association (ASHA).</b>
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
{/* 
      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.3 }} // Slight delay for the second section
      >
        <h2>Experience</h2>
        <p>Previously worked with esteemed organizations including:</p>
        <motion.ul className={styles.experienceList} initial="hidden" whileInView="visible" viewport={{ amount: 0.1 }} transition={{ staggerChildren: 0.2, delayChildren: 0.4 }}>
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
        </motion.ul>
      </motion.section> */}

{/* 
      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.3 }} // Adjust delay if needed for flow
      >
        <h2>My Approach to Therapy</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
        </p>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
        </p>
      </motion.section>
*/}
    </div>
  );
} 