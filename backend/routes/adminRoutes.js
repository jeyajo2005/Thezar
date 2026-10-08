const express = require('express');
const router = express.Router();
const {
  loginAdmin,
  getDashboardStats,
  getAllParticipants,
  getAllRegistrations,
  verifyRegistration,
  updateRegistration,
  deleteRegistration,
  resendRegistrationPass,
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
  getAllEnquiries,
  updateEnquiryStatus
} = require('../controllers/siteContentController');

const { verifyToken } = require('../middleware/authMiddleware');

// 1. Auth & Dashboard Stats
router.post('/login', loginAdmin);
router.get('/stats', verifyToken, getDashboardStats);

// 2. Participants & Registrations (Protected)
router.get('/participants', verifyToken, getAllParticipants);
router.get('/registrations', verifyToken, getAllRegistrations);
router.put('/registrations/:id/verify', verifyToken, verifyRegistration);
router.put('/registrations/:id', verifyToken, updateRegistration);
router.delete('/registrations/:id', verifyToken, deleteRegistration);
router.post('/registrations/:id/resend-pass', verifyToken, resendRegistrationPass);

// 3. Events & Categories
router.get('/events', getEvents);
router.post('/events/reseed', verifyToken, reseedEvents);
router.post('/events', verifyToken, addEvent);
router.delete('/events/:eventId', verifyToken, deleteEvent);

// 4. Competitions
router.get('/competitions', getCompetitions);
router.post('/competitions', verifyToken, createCompetition);

// 5. Districts
router.get('/districts', getDistricts);

// 6. Schedule
router.get('/schedules', getSchedules);
router.post('/schedules', verifyToken, createSchedule);

// 7. Results & Leaderboard
router.get('/results', getResults);
router.post('/results', verifyToken, createResult);

// 8. Announcements & Notifications
router.get('/announcements', getAnnouncements);
router.post('/announcements', verifyToken, createAnnouncement);

// 9. Site Content CMS & Profile
router.get('/site-content', getSiteContent);
router.put('/site-content', verifyToken, updateSiteContent);

// 10. Enquiries / Help Desk
router.get('/enquiries', verifyToken, getAllEnquiries);
router.put('/enquiries/:id', verifyToken, updateEnquiryStatus);

// 11. Audit Logs
router.get('/audit-logs', verifyToken, getAuditLogs);

module.exports = router;
