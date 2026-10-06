const express = require('express');
const router = express.Router();
const {
  loginAdmin,
  getDashboardStats,
  getAllParticipants,
  getAllRegistrations,
  verifyRegistration,
  getEvents,
  addEvent,
  deleteEvent,
  reseedEvents,
  getCompetitions,
  createCompetition,
  getDistricts,
  getSchedules,
  createSchedule,
  getResults,
  createResult,
  getAnnouncements,
  createAnnouncement,
  getAuditLogs
} = require('../controllers/adminController');

const {
  getSiteContent,
  updateSiteContent,
  updateBannerSlot,
  deleteBannerSlot,
  getAllEnquiries,
  updateEnquiryStatus
} = require('../controllers/siteContentController');

// 1. Auth & Dashboard Stats
router.post('/login', loginAdmin);
router.get('/stats', getDashboardStats);

// 2. Participants & Registrations
router.get('/participants', getAllParticipants);
router.get('/registrations', getAllRegistrations);
router.put('/registrations/:id/verify', verifyRegistration);

// 3. Events & Categories
router.get('/events', getEvents);
router.post('/events/reseed', reseedEvents);
router.post('/events', addEvent);
router.delete('/events/:eventId', deleteEvent);

// 4. Competitions
router.get('/competitions', getCompetitions);
router.post('/competitions', createCompetition);

// 5. Districts
router.get('/districts', getDistricts);

// 6. Schedule
router.get('/schedules', getSchedules);
router.post('/schedules', createSchedule);

// 7. Results & Leaderboard
router.get('/results', getResults);
router.post('/results', createResult);

// 8. Announcements & Notifications
router.get('/announcements', getAnnouncements);
router.post('/announcements', createAnnouncement);

// 9. Site Content CMS & Profile
router.get('/site-content', getSiteContent);
router.put('/site-content', updateSiteContent);
router.put('/site-content/banner-slot', updateBannerSlot);
router.delete('/site-content/banner-slot/:type/:slot', deleteBannerSlot);
router.delete('/site-content/banner-slot', deleteBannerSlot);

// 10. Enquiries / Help Desk
router.get('/enquiries', getAllEnquiries);
router.put('/enquiries/:id', updateEnquiryStatus);

// 11. Audit Logs
router.get('/audit-logs', getAuditLogs);

module.exports = router;
