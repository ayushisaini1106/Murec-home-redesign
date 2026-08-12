import { useState } from "react";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "Forest Walk Villas", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowModal(false);
      setForm({ name: "", email: "", phone: "", interest: "Forest Walk Villas", message: "" });
    }, 2800);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-card" data-reveal>
        <div className="contact-card-header">
          <p className="eyebrow">05 · Get in touch</p>
          <h2>Let’s build<br /><i>what’s next.</i></h2>
          <p className="contact-note">
            Whether you are exploring a private residence, planning a partnership, or simply wanting to understand the vision behind MUREC, our team would love to connect.
          </p>
        </div>

        <div className="contact-actions">
          <button className="light-button modal-open-btn" onClick={() => setShowModal(true)}>
            Start a conversation <span>↗</span>
          </button>
          <a className="text-link contact-inline-link" href="tel:+919717773229">
            Call our team <span>↗</span>
          </a>
        </div>

        <div className="contact-details">
          <div>
            <span>Corporate address</span>
            <p>Madhusudan, 2nd Floor, Riana Towers, 51–52, Noida Sector 136, Uttar Pradesh – 201301</p>
          </div>
          <div>
            <span>Email</span>
            <a href="mailto:info@murec.com">info@murec.com</a>
          </div>
          <div>
            <span>Phone</span>
            <a href="tel:+919717773229">+91 97177 73229</a>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="project-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="contact-form-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowModal(false)}>✕</button>

            {submitted ? (
              <div className="form-success-state">
                <div className="success-icon">✓</div>
                <h3>Inquiry Received</h3>
                <p>Thank you, {form.name || "valued guest"}. Our MUREC advisor will connect with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-inquiry-form">
                <p className="eyebrow">MUREC Private Inquiry</p>
                <h3>Connect with our team</h3>
                <p className="form-subtitle">Fill in your details below and a senior advisor will reach out to you.</p>

                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ayushi Saini"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Interest *</label>
                    <input
                      type="text"
                      list="interest-options"
                      required
                      placeholder="Type or select interest..."
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    />
                    <datalist id="interest-options">
                      <option value="Forest Walk, Dasna Villas" />
                      <option value="MUREC Urban Residences" />
                      <option value="Partnership & Advisory" />
                      <option value="Commercial & Retail Spaces" />
                    </datalist>
                  </div>
                </div>

                <div className="form-group">
                  <label>Message / Note</label>
                  <textarea
                    rows={3}
                    placeholder="Share your requirements or preferred time to connect..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="light-button form-submit-btn">
                  Submit Inquiry <span>↗</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
