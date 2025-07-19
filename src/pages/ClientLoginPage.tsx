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
            onClick={() => window.open("https://www.therapyappointment.com/")}
            className={styles.portalButton} /* Apply button style */
          >
            Go to Client Portal
          </button>
        </div> 
        <p className={styles.infoText}>Access your secure client portal to manage appointments, view documents, and communicate with us.</p>
        
        <p className={styles.infoText}>
          If you have trouble accessing the portal or have not yet set up an account, please click this link for assistance.
        </p>
      </section>
    </div>
  );
} 