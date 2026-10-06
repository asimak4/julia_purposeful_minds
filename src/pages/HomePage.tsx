import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './HomePage.module.css';
import testimonials from '../data/testimonials.json';

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion();
  const reveal = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroCopy}
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1>Executive Functioning &amp; Speech and Language</h1>
            <p className={styles.heroText}>
              At <i>Purposeful Minds</i>, our sessions are driven by goals created to serve you or your child’s unique needs. After gathering information during a one hour consultation, Julia creates an individualized plan targeting you or your child’s specific areas of need. Then, she provides specialized support for you or your child in the areas of executive functioning and/or speech and language.
            </p>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.imageFrame}>
              <img
                src={`${process.env.PUBLIC_URL}/childInTherapy1.png`}
                alt="A calm workspace with a planner and Purposeful Minds materials"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        className={styles.servicesSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
        transition={{ duration: 0.65 }}
      >
        <div className={`${styles.serviceGrid} ${styles.threeColumnGrid}`}>
          <article className={styles.serviceCard}>
            <div>
              <h3>Clients</h3>
              <p>Julia supports clients at every stage, from late elementary to college and beyond. She addresses speech and language development, strengthens organizational skills in middle and high school, and supports college students as they tackle more complex academic challenges.</p>
            </div>
          </article>
          <article className={styles.serviceCard}>
            <div>
              <h3>Areas of Focus</h3>
              <p>Julia specializes in helping students overcome challenges with executive functioning, ADHD, and speech and language disorders. She supports clients in organizing thoughts, processing language, managing attention, and building reading and writing skills.</p>
            </div>
          </article>
          <article className={styles.serviceCard}>
            <div>
              <h3>Location</h3>
              <p>Sessions are conducted either virtually via a HIPAA-compliant Zoom platform or in person at 4800 Hampden Lane #200, Bethesda, MD 20814. Clients may select the format that best fits their needs and availability.</p>
            </div>
          </article>
        </div>
      </motion.section>

      <motion.section
        className={styles.processSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
        transition={{ duration: 0.65 }}
      >
        <div className={styles.sectionHeading}>
          <h2>Getting Started</h2>
        </div>
        <div className={styles.processContent}>
          <ol className={styles.processGrid}>
            <li>
              <span>01</span>
              <h3>Initial Contact &amp; Brief Phone Call</h3>
              <p>Reach out via phone, email, or the website contact form to express interest or ask questions. We’ll schedule a free 15-minute phone call to learn more about you or your child’s needs and answer any initial questions.</p>
            </li>
            <li>
              <span>02</span>
              <h3>Comprehensive Virtual Consultation</h3>
              <p>Please provide any formal evaluations or standardized assessments at least 48 hours prior to the scheduled consultation. Julia will carefully review all existing documentation and complete a consultation with you to identify strengths and areas of need before beginning sessions.</p>
            </li>
            <li>
              <span>03</span>
              <h3>Individualized Treatment Plan</h3>
              <p>Receive a personalized treatment plan based on the evaluation results and your family's priorities.</p>
            </li>
            <li>
              <span>04</span>
              <h3>Service Arrangement &amp; Ongoing Sessions</h3>
              <p>Together, we determine the best format, virtual or in-person, and begin purposeful, goal-driven sessions.</p>
            </li>
            <li>
              <span>05</span>
              <h3>Progress Review &amp; Annual Reporting</h3>
              <p>After approximately one year of sessions, we conduct a comprehensive progress review and provide an annual report. This helps assess achievements and sets goals for the next year to ensure continued development.</p>
            </li>
          </ol>
          <div className={styles.processVisual}>
            <img
              className={styles.processIllustration}
              src={`${process.env.PUBLIC_URL}/brainThoughts.jpeg`}
              alt="Illustration of a brain with thought bubbles"
            />
          </div>
        </div>
      </motion.section>

      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsInner}>
          <div className={styles.testimonialGrid}>
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <blockquote className={styles.testimonial} key={`${testimonial.author}-${index}`}>
                <span aria-hidden="true">“</span>
                <p>{testimonial.quote}</p>
                <cite>{testimonial.author}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div>
            <h2>Ready to Take the First Step?</h2>
          </div>
          <div>
            <p>Contact us to schedule a complimentary 15-minute phone call to explore how our services may support your child's needs.</p>
            <Link to="/contact" className={`button-style ${styles.lightButton}`}>
              Free 15 Minute Call <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
