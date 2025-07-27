import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactPage.module.css';
import ReCAPTCHA from "react-google-recaptcha";

// Configuration from environment variables
const FORMSPREE_FORM_ID = process.env.REACT_APP_FORMSPREE_FORM_ID!;
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
  const [state, handleFormspreeSubmit] = useForm(FORMSPREE_FORM_ID);
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hearAbout: '',
    message: ''
  });
  
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
      alert('Please complete the reCAPTCHA verification.');
      return;
    }

    // Create form data including reCAPTCHA token
    const form = e.target as HTMLFormElement;
    const formDataToSubmit = new FormData(form);
    formDataToSubmit.append('g-recaptcha-response', captchaToken);
    
    // Submit using Formspree
    await handleFormspreeSubmit(formDataToSubmit);
    
    // Reset form if submission was successful
    if (state.succeeded) {
      resetForm();
    }
  };

  // Show success message if form was submitted successfully
  if (state.succeeded) {
    return (
      <div className={styles.pageContainer}>
        <section className={styles.section}>
          <h1>Thank You!</h1>
          <div className={styles.successMessage}>
            <p> Thank you for reaching out to us. We have received your message and look forward to connecting! </p>
            <button 
              onClick={() => window.location.reload()} 
              className={styles.submitButton}
            >
              Send Another Message
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <section className={styles.section}>
        <h1>Contact Us</h1>
        <div className={styles.contactIntro}>
            <p>If you have any questions or would like to schedule a consultation, please reach out to us.</p>
            <p><strong>Email:</strong> julia@purposefulmindsllc.com</p>
            {/* <p><strong>Phone:</strong> [123-456-7890]</p> */}
        </div>

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
              <ValidationError 
                prefix="First Name" 
                field="firstName"
                errors={state.errors}
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
              <ValidationError 
                prefix="Last Name" 
                field="lastName"
                errors={state.errors}
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
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
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
            <ValidationError 
              prefix="Phone" 
              field="phone"
              errors={state.errors}
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
            <ValidationError 
              prefix="Hear About" 
              field="hearAbout"
              errors={state.errors}
            />
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
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
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
              disabled={state.submitting || !captchaToken}
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        
        {state.errors && Object.keys(state.errors).length > 0 && (
          <div className={styles.errorMessage}>
            There was an error sending your message. Please check the form and try again.
          </div>
        )}
      </section>
    </div>
  );
}
 