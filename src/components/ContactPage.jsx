import { useState } from "react";
import styles from "../styles/ContactPage.module.css"; // ✅ Import styles

const ContactPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (form.fullName.trim().length < 3) newErrors.fullName = "Full name must be at least 3 characters.";
    if (form.subject.trim().length < 3) newErrors.subject = "Subject must be at least 3 characters.";
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email format.";
    if (form.body.trim().length < 10) newErrors.body = "Message must be at least 10 characters.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", form);
      setSubmitted(true);
      setForm({ fullName: "", subject: "", email: "", body: "" }); // ✅ Clear form
      setErrors({});
    }
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactBox}>
        <h1>Contact Us</h1>
        {submitted && <p className={styles.successMessage}>✅ Message sent successfully!</p>}

        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter your full name"
            value={form.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className={styles.errorText}>{errors.fullName}</p>}

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter subject"
            value={form.subject}
            onChange={handleChange}
          />
          {errors.subject && <p className={styles.errorText}>{errors.subject}</p>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}

          <label htmlFor="body">Message</label>
          <textarea
            name="body"
            id="body"
            placeholder="Type your message here..."
            value={form.body}
            onChange={handleChange}
          ></textarea>
          {errors.body && <p className={styles.errorText}>{errors.body}</p>}

          <button type="submit" className={styles.submitBtn}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
