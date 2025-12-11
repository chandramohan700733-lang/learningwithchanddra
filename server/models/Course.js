import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, default: 1300 },
  level: { type: String, required: true, default: 'N5' },
  instructor: { type: String, required: true },
  videos: [
    {
      title: String,
      duration: String,
      videoPath: String,
      uploadedAt: { type: Date, default: Date.now }
    }
  ],
  pdfs: [
    {
      title: String,
      pdfPath: String,
      uploadedAt: { type: Date, default: Date.now }
    }
  ],
  totalVideos: { type: Number, default: 0 },
  totalPdfs: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Course', courseSchema);
