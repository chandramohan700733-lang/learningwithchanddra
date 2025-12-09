import Course from '../models/Course.js';
import User from '../models/User.js';
import fs from 'fs';
import path from 'path';

export const createCourse = async (req, res) => {
  try {
    const { title, description, instructor } = req.body;

    const course = await Course.create({
      title,
      description,
      instructor,
      price: 1300
    });

    res.status(201).json({
      success: true,
      message: 'Course created successfully',
      course
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json({
      success: true,
      courses
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    res.status(200).json({
      success: true,
      course
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const uploadVideo = async (req, res) => {
  try {
    const { courseId, videoTitle } = req.body;
    const file = req.files.video;

    if (!file) {
      return res.status(400).json({ success: false, message: 'No video file provided' });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    const fileName = Date.now() + '_' + file.name;
    const videoPath = path.join('uploads/videos', fileName);
    
    await file.mv(videoPath);

    course.videos.push({
      title: videoTitle || file.name,
      videoPath: videoPath,
      duration: '0:00'
    });
    course.totalVideos = course.videos.length;
    await course.save();

    res.status(200).json({
      success: true,
      message: 'Video uploaded successfully',
      course
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const uploadPDF = async (req, res) => {
  try {
    const { courseId, pdfTitle } = req.body;
    const file = req.files.pdf;

    if (!file) {
      return res.status(400).json({ success: false, message: 'No PDF file provided' });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    const fileName = Date.now() + '_' + file.name;
    const pdfPath = path.join('uploads/pdfs', fileName);
    
    await file.mv(pdfPath);

    course.pdfs.push({
      title: pdfTitle || file.name,
      pdfPath: pdfPath
    });
    course.totalPdfs = course.pdfs.length;
    await course.save();

    res.status(200).json({
      success: true,
      message: 'PDF uploaded successfully',
      course
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
