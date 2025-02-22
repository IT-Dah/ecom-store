import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (form.fullName.length < 3) newErrors.fullName = "Full name must be at least 3 characters.";
    if (form.subject.length < 3) newErrors.subject = "Subject must be at least 3 characters.";
    if (!form.email.includes("@") || !form.email.includes(".")) newErrors.email = "Invalid email format.";
    if (form.body.length < 3) newErrors.body = "Message must be at least 3 characters.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", form);
      alert("Message sent successfully!");
      setForm({ fullName: "", subject: "", email: "", body: "" }); // Clear form
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} />
        {errors.fullName && <p>{errors.fullName}</p>}
        
        <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
        {errors.subject && <p>{errors.subject}</p>}

        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}

        <textarea name="body" placeholder="Your message..." value={form.body} onChange={handleChange}></textarea>
        {errors.body && <p>{errors.body}</p>}

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
