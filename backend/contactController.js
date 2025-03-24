import Contact from "./contact.js";

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please fill out all fields.' });
    }

    const newContact = new Contact({ name, email, message });
    const saved = await newContact.save();

    res.status(201).json({ message: 'Message sent successfully', data: saved });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};