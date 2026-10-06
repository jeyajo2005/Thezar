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
      if (req.body.desktopBanners) {
        content.desktopBanners = req.body.desktopBanners;
        content.markModified('desktopBanners');
      }
      if (req.body.mobileBanners) {
        content.mobileBanners = req.body.mobileBanners;
        content.markModified('mobileBanners');
      }
    }
    await content.save();
    res.json({ success: true, message: 'Site content updated successfully!', content });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// PUT /api/admin/site-content/banner-slot (Save or delete single slot)
const updateBannerSlot = async (req, res) => {
  try {
    const { type, slot, title, image, link, action } = req.body;
    let content = await SiteContent.findOne();
    if (!content) {
      content = new SiteContent();
    }
    const targetKey = type === 'mobile' ? 'mobileBanners' : 'desktopBanners';
    let bannerList = content[targetKey] ? [...content[targetKey]] : [];

    if (action === 'delete') {
      bannerList = bannerList.filter((b) => b.slot !== Number(slot));
      content[targetKey] = bannerList;
      content.markModified(targetKey);
      await content.save();
      return res.json({
        success: true,
        message: `${type === 'mobile' ? 'Mobile' : 'Desktop'} Banner Slot ${slot} deleted successfully!`,
        content
      });
    }

    const index = bannerList.findIndex((b) => b.slot === Number(slot));
    const updatedBanner = {
      slot: Number(slot),
      title: title !== undefined ? title : (index !== -1 ? bannerList[index].title : ''),
      image: image !== undefined ? image : (index !== -1 ? bannerList[index].image : ''),
      link: link || '/events',
      size: type === 'mobile' ? 'Portrait' : '1500 * 500 px',
      active: true
    };
    if (index !== -1) {
      bannerList[index] = { ...bannerList[index], ...updatedBanner };
    } else {
      bannerList.push(updatedBanner);
    }
    content[targetKey] = bannerList;
    content.markModified(targetKey);
    await content.save();
    res.json({
      success: true,
      message: `${type === 'mobile' ? 'Mobile' : 'Desktop'} Banner Slot ${slot} saved successfully!`,
      content
    });
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
  updateBannerSlot,
  createEnquiry,
  getAllEnquiries,
  updateEnquiryStatus
};
