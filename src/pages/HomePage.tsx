import styles from './HomePage.module.css'; // Import CSS Module
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion

// Placeholder for HomePage component
export default function HomePage() {
  const heroBgImage = `${process.env.PUBLIC_URL}/childInTherapy.jpg`; // Swapped: now childInTherapy.jpg

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
            Speech, Language, & Executive Functioning Support for All Ages
          </motion.h1> 
          <motion.p
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Take a minute to write an introduction that is short, sweet, and to the point. Per ea
            ubique adipisci gubergren. Vis cu mazim dictas, per congue civibus cu. Dico labitur
            lobortis duo at, id ius movet doctus.
          </motion.p>
          {/* Optionally, a call to action button can be added here */}
          {/* <button className={`button-style ${styles.heroCtaButton}`}>Learn More</button> */}
        </motion.div>
      </motion.section>

      {/* Three-Column Feature Section */}
      <motion.section
        className={styles.featureSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }} // Trigger when 20% of the section is visible
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.featureGrid}> {/* Using a grid for easy column layout */}
          <motion.div variants={itemVariants} transition={{ duration: 0.5, delay: 0.2 }} className={styles.featureColumn}>
            <h3>Who We Help</h3>
            <p>We specialize in supporting elementary, middle, high school, and college students.</p> {/* Placeholder, can be expanded or listified */}
          </motion.div>
          <motion.div variants={itemVariants} transition={{ duration: 0.5, delay: 0.4 }} className={styles.featureColumn}>
            <h3>Areas of Focus</h3>
            <p>Addressing challenges in expressive/receptive language, dyslexia, ADHD, and executive functions.</p> {/* Placeholder */}
          </motion.div>
          <motion.div variants={itemVariants} transition={{ duration: 0.5, delay: 0.6 }} className={styles.featureColumn}>
            <h3>Our Approach</h3> {/* Or keep "Why Work With Us" or similar */}
            <p>Providing individualized, evidence-based strategies in a supportive environment to build confidence and skills.</p> {/* Placeholder */}
          </motion.div>
        </div>
      </motion.section>

      {/* "Welcome" Text & Image Section */}
      <motion.section
        className={styles.welcomeSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={sectionVariants}
        transition={{ duration: 0.6, delay: 0.2 }} // Added a slight delay for this section itself
      >
        <div className={styles.welcomeGrid}> {/* Using a grid for two columns */}
          <motion.div
            className={styles.welcomeTextColumn}
            variants={welcomeTextVariants} // Use new variant
            transition={{ duration: 0.7, delay: 0.3 }}
           >
            <p className={styles.welcomeIntro}>Introduce Your Company</p>
            <h2>Welcome to Purposeful Minds, Where Everything We Do is Personalized to You</h2>
            <p>Talk about what you do and why you do it. Summarize your business. Build a connection with your audience so they want to continue scrolling to see what you offer.</p>
            <p>This is a short and sweet section, but a powerful section. By keeping it concise, the content will have a bigger impact.</p>
            <p>Per ea ubique adipisci gubergren. Vis cu mazim dictas, per congue civibus cu. Dico labitur lobortis duo at, id ius movet doctus.</p>
            <button className={`button-style ${styles.welcomeCtaButton}`}>Get Started Today</button>
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
      <motion.section
        className={styles.testimonialsSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={sectionVariants}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className={styles.testimonialsTitle}>What Our Families Say</h2>
        <div className={styles.testimonialsGrid}> {/* Grid for multiple testimonials */}
          <motion.div variants={itemVariants} transition={{ duration: 0.5, delay: 0.3 }} className={styles.testimonialItem}>
            <p className={styles.testimonialQuote}>"[Testimonial 1 - A brief, impactful quote about the positive experience and outcomes. Keep it concise and genuine.]"</p>
            <cite className={styles.testimonialCite}>- [Person 1 Name/Role, e.g., Parent of a 5th Grader]</cite>
          </motion.div>
          <motion.div variants={itemVariants} transition={{ duration: 0.5, delay: 0.5 }} className={styles.testimonialItem}>
            <p className={styles.testimonialQuote}>"[Testimonial 2 - Another compelling quote highlighting different aspects of the service or the therapist's approach.]"</p>
            <cite className={styles.testimonialCite}>- [Person 2 Name/Role, e.g., High School Student]</cite>
          </motion.div>
          {/* Add more testimonial items as needed */}
        </div>
      </motion.section>

      {/* Final Call to Action Section */}
      <motion.section
        className={styles.finalCtaSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={sectionVariants}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>Ready to Take the Next Step?</h2>
        <p>Contact us today for a free consultation and let us help your child find their voice and build essential skills for success.</p>
        <Link to="/contact" className={`button-style ${styles.finalCtaButton}`}> 
          Schedule Your Free Consultation
        </Link>
      </motion.section>

      {/* The old comment about re-evaluating sections can be removed as we've addressed them. */}
    </div>
  );
} 