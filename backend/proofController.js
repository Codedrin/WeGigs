import Proof from "./feedback.js";

export const submitFeedback = async (req, res) => {
  try {
    const { name, email, feedback, rating, features } = req.body;

    if (!name || !email || !feedback || !rating) {
      return res.status(400).json({ message: "Please fill all required fields." });
    }

    const newProof = new Proof({
      name,
      email,
      feedback,
      rating,
      features,
    });

    const saved = await newProof.save();
    res.status(201).json({ message: "Feedback submitted successfully", data: saved });
  } catch (error) {
    console.error("❌ Error submitting feedback:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllFeedback = async (req, res) => {
    try {
      const feedbackList = await Proof.find().sort({ createdAt: -1 }); 
      res.status(200).json(feedbackList);
    } catch (error) {
      console.error("❌ Error fetching feedback:", error);
      res.status(500).json({ message: "Server error" });
    }
  };