import mongoose from 'mongoose';

const proofSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    features: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Proof = mongoose.model('Proof', proofSchema);

export default Proof;