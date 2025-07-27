import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactPage.module.css';
import ReCAPTCHA from "react-google-recaptcha";

// Configuration from environment variables
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;
const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY!;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  hearAbout: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hearAbout: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    // Clear any previous error messages when captcha is completed
    if (token && submitStatus === 'error') {
      setSubmitStatus('idle');
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      hearAbout: '',
      message: ''
    });
    setCaptchaToken(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if reCAPTCHA is completed
    if (!captchaToken) {
      setSubmitStatus('error');
      setSubmitMessage('Please complete the reCAPTCHA verification.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.message,
          phone: formData.phone,
          hear_about: formData.hearAbout,
          to_name: 'Julia',
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      
      // Check if the email was actually delivered successfully
      if (result.status === 200) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
        resetForm();
      } else {
        throw new Error(`Email service returned status: ${result.status}`);
      }
    } catch (error: any) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      
      // Provide more specific error messages
      if (error.text && error.text.includes('Invalid email')) {
        setSubmitMessage('Please check your email address and try again.');
      } else if (error.text && error.text.includes('rate limit')) {
        setSubmitMessage('Too many requests. Please wait a moment and try again.');
      } else {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again later or contact us directly at juliasimak@gmail.com.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <section className={styles.section}>
        <h1>Contact Us</h1>
        <div className={styles.contactIntro}>
            <p>If you have any questions or would like to schedule a consultation, please reach out to us.</p>
            <p><strong>Email:</strong> juliasimak@gmail.com</p>
            {/* <p><strong>Phone:</strong> [123-456-7890]</p> */}
        </div>

        {/* <h2>Send Us a Message</h2> */}
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.nameRow}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email">Email <span className={styles.required}>(required)</span></label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="hearAbout">How did you hear about us?</label>
            <select 
              id="hearAbout" 
              name="hearAbout" 
              className={styles.selectField}
              value={formData.hearAbout}
              onChange={handleInputChange}
            >
              <option value="">Select an option</option>
              <option value="google">Google Search</option>
              <option value="referral">Referral from friend/family</option>
              <option value="social-media">Social Media</option>
              <option value="healthcare-provider">Healthcare Provider</option>
              <option value="insurance">Insurance Directory</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="message">Message <span className={styles.required}>(required)</span></label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              value={formData.message}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div className={styles.captchaContainer}>
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
            />
          </div>
          
          <div>
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting || !captchaToken}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        
        {submitStatus === 'success' && (
          <div className={styles.successMessage}>
            {submitMessage}
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className={styles.errorMessage}>
            {submitMessage}
          </div>
        )}
      </section>
    </div>
  );
}
 