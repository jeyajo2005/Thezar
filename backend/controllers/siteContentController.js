const SiteContent = require('../models/SiteContent');
const Enquiry = require('../models/Enquiry');

// GET /api/site-content
const getSiteContent = async (req, res) => {
  try {
    let content = await SiteContent.findOne();
    if (!content) {
      content = new SiteContent();
      await content.save();
    }
    res.json({ success: true, content });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// PUT /api/admin/site-content
const updateSiteContent = async (req, res) => {
  try {
    let content = await SiteContent.findOne();
    if (!content) {
      content = new SiteContent(req.body);
    } else {
      Object.assign(content, req.body);
    }
    await content.save();
    res.json({ success: true, message: 'Site content updated successfully!', content });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// POST /api/enquiries
const createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, district, eventCategory, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
    }
    const enquiry = new Enquiry({
      name,
      email,
      phone,
      district: district || 'Tirunelveli',
      eventCategory: eventCategory || 'General Enquiry',
      message
    });
    await enquiry.save();
    res.json({ success: true, message: 'Your event enquiry has been submitted!', enquiry });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/admin/enquiries
const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, enquiries });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// PUT /api/admin/enquiries/:id
const updateEnquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const enquiry = await Enquiry.findByIdAndUpdate(id, { status }, { new: true });
    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Enquiry not found.' });
    }
    res.json({ success: true, message: 'Enquiry status updated!', enquiry });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  getSiteContent,
  updateSiteContent,
  createEnquiry,
  getAllEnquiries,
  updateEnquiryStatus
};
