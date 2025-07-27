import styles from './ClientLoginPage.module.css'; // Import CSS Module

// Placeholder for ClientLoginPage component
export default function ClientLoginPage() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.section}>
        <h1>Client Portal</h1>
        <div> {/* Added a div for better control if needed, though button itself is inline-block */}
          {/* 
            Replace "#" with the actual URL for the client portal (e.g., Therapy Appointment link).
            It's good practice to have it open in a new tab using target="_blank".
          */}
          <button
            onClick={() => window.open("https://api.portal.therapyappointment.com/n/public/clientRegistration?therapistId=91A7A96EB7544925B14A133835750C13")}
            className={styles.portalButton} /* Apply button style */
          >
            Go to Client Portal
          </button>
        </div> 
        <p className={styles.infoText}>Access your secure client portal to manage appointments, view documents, and communicate with us.</p>
        
        <p className={styles.infoText}>
          If you have trouble accessing the portal or have not yet set up an account, please click <a href="https://www.therapyappointment.com/faqs" target="_blank" rel="noopener noreferrer">this link</a> for assistance.
        </p>
      </section>
    </div>
  );
} 