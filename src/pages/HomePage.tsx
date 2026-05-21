import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './HomePage.module.css'; // Import CSS Module
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion
import testimonials from '../data/testimonials.json';

// Placeholder for HomePage component
export default function HomePage() {
  const heroBgImage = `${process.env.PUBLIC_URL}/childInTherapy1.png`; // Swapped: now childInTherapy.jpg
  const testimonialRailRef = useRef<HTMLDivElement | null>(null);
  const testimonialRefs = useRef<(HTMLElement | null)[]>([]);
  const programmaticScrollTimeoutRef = useRef<number | null>(null);
  const resumeRotationTimeoutRef = useRef<number | null>(null);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);

  const scrollToTestimonial = useCallback((index: number) => {
    const rail = testimonialRailRef.current;
    const testimonial = testimonialRefs.current[index];

    if (!rail || !testimonial) {
      return;
    }

    if (programmaticScrollTimeoutRef.current) {
      window.clearTimeout(programmaticScrollTimeoutRef.current);
    }

    programmaticScrollTimeoutRef.current = window.setTimeout(() => {
      programmaticScrollTimeoutRef.current = null;
    }, 700);

    rail.scrollTo({
      left: testimonial.offsetLeft + testimonial.offsetWidth / 2 - rail.clientWidth / 2,
      behavior: 'smooth',
    });
  }, []);

  const pauseTestimonialRotation = useCallback((resumeAfterMs = 8000) => {
    setIsTestimonialPaused(true);

    if (resumeRotationTimeoutRef.current) {
      window.clearTimeout(resumeRotationTimeoutRef.current);
    }

    resumeRotationTimeoutRef.current = window.setTimeout(() => {
      setIsTestimonialPaused(false);
      resumeRotationTimeoutRef.current = null;
    }, resumeAfterMs);
  }, []);

  const goToTestimonial = (index: number) => {
    pauseTestimonialRotation();
    setActiveTestimonialIndex(index);
    scrollToTestimonial(index);
  };

  const handleTestimonialScroll = () => {
    const rail = testimonialRailRef.current;

    if (!rail || programmaticScrollTimeoutRef.current) {
      return;
    }

    pauseTestimonialRotation();

    const closestIndex = testimonialRefs.current.reduce((closest, testimonial, index) => {
      if (!testimonial) {
        return closest;
      }

      const testimonialCenter = testimonial.offsetLeft + testimonial.offsetWidth / 2 - rail.clientWidth / 2;
      const currentDistance = Math.abs(rail.scrollLeft - testimonialCenter);
      const closestTestimonial = testimonialRefs.current[closest];
      const closestDistance = closestTestimonial
        ? Math.abs(rail.scrollLeft - (closestTestimonial.offsetLeft + closestTestimonial.offsetWidth / 2 - rail.clientWidth / 2))
        : Number.POSITIVE_INFINITY;

      return currentDistance < closestDistance ? index : closest;
    }, 0);

    setActiveTestimonialIndex(closestIndex);
  };

  useEffect(() => {
    if (isTestimonialPaused || testimonials.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveTestimonialIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % testimonials.length;
        scrollToTestimonial(nextIndex);
        return nextIndex;
      });
    }, 6000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isTestimonialPaused, scrollToTestimonial]);

  useEffect(() => {
    return () => {
      if (programmaticScrollTimeoutRef.current) {
        window.clearTimeout(programmaticScrollTimeoutRef.current);
      }
      if (resumeRotationTimeoutRef.current) {
        window.clearTimeout(resumeRotationTimeoutRef.current);
      }
    };
  }, []);

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
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={itemVariants} // Using itemVariants for a slight upward motion + fade
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Executive Functioning & Speech and Language
          </motion.h2> 
          <motion.p
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            At <i> Purposeful Minds</i>, our sessions are driven by goals created to serve you or your child’s unique needs. After gathering information during a one hour consultation, Julia creates an individualized plan targeting you or your child’s specific areas of need. Then, she provides specialized support for you or your child in the areas of executive functioning and/or speech and language. 
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
            <h3>Clients</h3>
            <p>Julia supports clients at every stage, from late elementary to college and beyond. She addresses speech and language development, strengthens organizational skills in middle and high school, and supports college students as they tackle more complex academic challenges.
            </p> 
          </motion.div>
          <motion.div variants={itemVariants} transition={{ duration: 0.5, delay: 0.4 }} className={styles.featureColumn}>
            <h3>Areas of Focus</h3>
            <p>Julia specializes in helping students overcome challenges with executive functioning, ADHD, and speech and language disorders. She supports clients in organizing thoughts, processing language, managing attention, and building reading and writing skills.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} transition={{ duration: 0.5, delay: 0.8 }} className={styles.featureColumn}>
            <h3>Location</h3> {/* Or keep "Why Work With Us" or similar */}
            <p>Sessions are conducted either virtually via a HIPAA-compliant Zoom platform or in person at 4800 Hampden Lane #200, Bethesda, MD 20814. Clients may select the format that best fits their needs and availability.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        className={styles.testimonialSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={styles.testimonialContent}
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            className={styles.testimonialRail}
            aria-label="Testimonials"
            onMouseEnter={() => {
              if (resumeRotationTimeoutRef.current) {
                window.clearTimeout(resumeRotationTimeoutRef.current);
                resumeRotationTimeoutRef.current = null;
              }
              setIsTestimonialPaused(true);
            }}
            onMouseLeave={() => setIsTestimonialPaused(false)}
            onFocus={() => setIsTestimonialPaused(true)}
            onBlur={() => setIsTestimonialPaused(false)}
            onTouchStart={() => pauseTestimonialRotation()}
            onScroll={handleTestimonialScroll}
            ref={testimonialRailRef}
          >
            {testimonials.map((testimonial, index) => (
              <article
                aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
                className={styles.testimonialSlide}
                key={`${testimonial.author}-${testimonial.quote}-${index}`}
                ref={(element) => {
                  testimonialRefs.current[index] = element;
                }}
                tabIndex={0}
              >
                <p className={styles.testimonialQuote}>
                  <span className={styles.quoteMark}>"</span>
                  {testimonial.quote}
                  <span className={styles.quoteMark}>"</span>
                </p>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.testimonialName}>{testimonial.author}</span>
                </div>
              </article>
            ))}
          </div>
          {/* {testimonials.length > 1 && (
            <div className={styles.testimonialControls} aria-label="Testimonial controls">
              <button
                aria-label="Previous testimonial"
                className={styles.testimonialArrow}
                onClick={() => goToTestimonial((activeTestimonialIndex - 1 + testimonials.length) % testimonials.length)}
                type="button"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                aria-label="Next testimonial"
                className={styles.testimonialArrow}
                onClick={() => goToTestimonial((activeTestimonialIndex + 1) % testimonials.length)}
                type="button"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          )} */}
        </motion.div>
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
            <h2>Getting Started</h2>
            
            <ol className={styles.stepsList}>
               <li className={styles.stepItem}>
                   <h4>Step 1: Initial Contact &amp; Brief Phone Call</h4>
                   <p>Reach out via phone, email, or the website contact form to express interest or ask questions. We’ll schedule a free 15-minute phone call to learn more about you or your child’s needs and answer any initial questions.</p>
               </li>
               <li className={styles.stepItem}>
                   <h4>Step 2: Comprehensive Virtual Consultation</h4>
                   <p>Please provide any formal evaluations or standardized assessments at least 48 hours prior to the scheduled consultation. Julia will carefully review all existing documentation and complete a consultation with you to identify strengths and areas of need before beginning sessions.</p>
               </li>
               <li className={styles.stepItem}>
                   <h4>Step 3: Individualized Treatment Plan</h4>
                   <p>Receive a personalized treatment plan based on the evaluation results and your family's priorities.</p>
               </li>
               <li className={styles.stepItem}>
                   <h4>Step 4: Service Arrangement &amp; Ongoing Sessions</h4>
                   <p>Together, we determine the best format, virtual or in-person, and begin purposeful, goal-driven sessions.</p>
               </li>
               <li className={styles.stepItem}>
                   <h4>Step 5: Progress Review &amp; Annual Reporting</h4>
                   <p>After approximately one year of sessions, we conduct a comprehensive progress review and provide an annual report. This helps assess achievements and sets goals for the next year to ensure continued development.</p>
               </li>
             </ol>
             
             {/* <Link to="/contact" className={`button-style ${styles.welcomeCtaButton}`}>Get Started Today</Link> */}
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