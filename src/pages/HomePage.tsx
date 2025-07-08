import styles from './HomePage.module.css'; // Import CSS Module
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion

// Placeholder for HomePage component
export default function HomePage() {
  const heroBgImage = `${process.env.PUBLIC_URL}/childInTherapy1.png`; // Swapped: now childInTherapy.jpg

  const sectionVariants = {
    hidden: { opacity: 0, y: 75, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const welcomeTextVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.95 }, // Slide from left
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  const welcomeImageVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.95 }, // Slide from right
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  // Variant for simple fade-in, can be used for hero section
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className={styles.pageWrapper}> {/* General wrapper for the page content */}
      {/* Hero Section */}
      <motion.section 
        className={styles.heroSection}
        style={{ backgroundImage: `url(${heroBgImage})` }}
        initial="hidden"
        animate="visible" // Animate on initial load
        variants={fadeInVariant} // Using a simple fade-in for the background section itself
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <motion.div 
          className={styles.heroOverlay}
          initial="hidden"
          animate="visible"
          variants={fadeInVariant} // Fade in the overlay box
          transition={{ duration: 0.7, delay: 0.5 }} // Delay slightly after background
        >
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={itemVariants} // Using itemVariants for a slight upward motion + fade
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Speech, Language, Literacy, & Executive Functioning
          </motion.h1> 
          <motion.p
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            At <i> Purposeful Minds</i>, every session is designed with intention—guided by purpose, and driven by goals. 
            We provide specialized support in speech, language, literacy, and executive functioning for children 
            and adolescents. Our process begins with a comprehensive evaluation to understand each child's unique 
            strengths and challenges. From there, we create individualized plans that target specific areas of need, 
            ensuring that every session is meaningful, focused, and aligned with long-term growth.
          </motion.p>
          {/* Optionally, a call to action button can be added here */}
          {/* <button className={`button-style ${styles.heroCtaButton}`}>Learn More</button> */}
        </motion.div>
      </motion.section>

      {/* Feature Section */}
      <motion.section
        className={styles.featureSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }} // Trigger when 10% of the section is visible
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.featureGrid}> {/* Using a grid for easy column layout */}
          <motion.div variants={itemVariants} transition={{ duration: 0.5, delay: 0.2 }} className={styles.featureColumn}>
            <h3>Who We Help</h3>
            <p>Purposeful Minds supports learners at every stage—from early elementary to college. 
              We partner with families to address early speech and language development, strengthen literacy and 
              organizational skills in middle and high school, and guide college students as they tackle more
              complex academic challenges.
            </p> 
          </motion.div>
          <motion.div variants={itemVariants} transition={{ duration: 0.5, delay: 0.4 }} className={styles.featureColumn}>
            <h3>Areas of Focus</h3>
            <p>We specialize in helping students overcome a variety of challenges, including difficulties with executive 
              functioning skills, ADHD, expressive and receptive language and dyslexia. We support clients in organizing thoughts, processing language, managing attention, and building reading and writing skills.</p>
          </motion.div>

          <motion.div variants={itemVariants} transition={{ duration: 0.5, delay: 0.8 }} className={styles.featureColumn}>
            <h3>Where We See Clients</h3> {/* Or keep "Why Work With Us" or similar */}
            <p>At Purposeful Minds, all consultations and comprehensive evaluations are conducted virtually for your convenience. 
              Following the evaluation, we work closely with you to determine the best fit for ongoing 
              services—whether that's continuing virtually or, depending on your location, scheduling, 
              and individual needs, arranging in-home visits on a case-by-case basis.</p> {/* Placeholder */}
          </motion.div>
        </div>
      </motion.section>

      {/* "Welcome" Text & Image Section */}
      <motion.section
        className={styles.welcomeSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }} // Trigger when 10% of the section is visible
        variants={sectionVariants}
        transition={{ duration: 0.6, delay: 0.2 }} // Added a slight delay for this section itself
      >
        <div className={styles.welcomeGrid}> {/* Using a grid for two columns */}
          <motion.div
            className={styles.welcomeTextColumn}
            variants={welcomeTextVariants} // Use new variant
            transition={{ duration: 0.7, delay: 0.3 }}
           >
            <h2>Welcome to Purposeful Minds</h2>
            
            <ol className={styles.stepsList}>
               <li className={styles.stepItem}>
                   <h4>Step 1: Initial Contact &amp; Brief Phone Consultation</h4>
                   <p>Reach out via phone, email, or our website contact form to express interest or ask questions. We'll schedule a brief 15-minute phone call to learn more about your child's needs and answer any initial questions.</p>
               </li>
               <li className={styles.stepItem}>
                   <h4>Step 2: Comprehensive Virtual Evaluation</h4>
                   <p>Before the initial consultation, provide any formal evaluations or standardized assessments. The therapist will carefully review all existing documentation and complete a virtual consultation to identify your child’s strengths and areas of need before beginning treatment.</p>
               </li>
               <li className={styles.stepItem}>
                   <h4>Step 3: Individualized Plan of Care</h4>
                   <p>Receive a personalized plan of care based on the evaluation results and your family's priorities.</p>
               </li>
               <li className={styles.stepItem}>
                   <h4>Step 4: Service Arrangement &amp; Ongoing Sessions</h4>
                   <p>Together, we determine the best format—virtual or in-home—and begin purposeful, goal-driven sessions.</p>
               </li>
               <li className={styles.stepItem}>
                   <h4>Step 5: Progress Review &amp; Annual Reporting</h4>
                   <p>After approximately one year of sessions, we conduct a comprehensive progress review and provide an annual report. This helps assess achievements and sets goals for the next year to ensure continued development.</p>
               </li>
             </ol>
             
             <Link to="/contact" className={`button-style ${styles.welcomeCtaButton}`}>Get Started Today</Link>
          </motion.div>
          <motion.div
            className={styles.welcomeImageColumn}
            variants={welcomeImageVariants} // Use new variant
            transition={{ duration: 0.7, delay: 0.3 }} // Same delay or slightly offset for effect
          >
            <img src={`${process.env.PUBLIC_URL}/brainThoughts.jpeg`} alt="Illustration of a brain with thought bubbles" /> {/* Swapped: now brainThoughts.jpeg and updated alt text */}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      {/*       
      <motion.section
        className={styles.testimonialsSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }} // Trigger when 10% of the section is visible
        variants={sectionVariants}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className={styles.testimonialsTitle}>What Our Families Say</h2>
        <div className={styles.testimonialsGrid}>
          <motion.div variants={itemVariants} transition={{ duration: 0.5, delay: 0.3 }} className={styles.testimonialItem}>
            <p className={styles.testimonialQuote}>"[Testimonial 1 - A brief, impactful quote about the positive experience and outcomes. Keep it concise and genuine.]"</p>
            <cite className={styles.testimonialCite}>- [Person 1 Name/Role, e.g., Parent of a 5th Grader]</cite>
          </motion.div>
          <motion.div variants={itemVariants} transition={{ duration: 0.5, delay: 0.5 }} className={styles.testimonialItem}>
            <p className={styles.testimonialQuote}>"[Testimonial 2 - Another compelling quote highlighting different aspects of the service or the therapist's approach.]"</p>
            <cite className={styles.testimonialCite}>- [Person 2 Name/Role, e.g., High School Student]</cite>
          </motion.div>
        </div>
      </motion.section>
      */}


      {/* Final Call to Action Section */}
      <motion.section
        className={styles.finalCtaSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }} // Trigger when 10% of the section is visible
        variants={sectionVariants}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>Ready to Take the First Step?</h2>
        <p>Contact us to schedule a complimentary 15-minute phone consultation to explore how our services may support your child's needs.</p>
        <Link to="/contact" className={`button-style ${styles.finalCtaButton}`}> 
          Free 15 Minute Consultation
        </Link>
      </motion.section>

      {/* The old comment about re-evaluating sections can be removed as we've addressed them. */}
    </div>
  );
} 