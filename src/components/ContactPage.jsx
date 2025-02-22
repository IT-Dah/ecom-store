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
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email format.";
    if (form.body.length < 3) newErrors.body = "Message must be at least 3 characters.";
    
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
      alert("Message sent successfully!");
      setForm({ fullName: "", subject: "", email: "", body: "" }); // Clear form
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} />
          {errors.fullName && <p style={{ color: "red" }}>{errors.fullName}</p>}
        </div>

        <div>
          <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
          {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
        </div>

        <div>
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <textarea name="body" placeholder="Your message..." value={form.body} onChange={handleChange}></textarea>
          {errors.body && <p style={{ color: "red" }}>{errors.body}</p>}
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
