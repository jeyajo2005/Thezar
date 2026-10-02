import { Event, ScheduleItem, ResultItem, LeaderboardItem, Announcement, User } from '../types';

export const mockUser: User = {
  id: 'usr_001',
  name: 'Suman',
  participantId: 'TRZ-2026-TVL-00124',
  college: 'ABC College of Technology',
  district: 'Tirunelveli',
  competition: 'Innovation & Coding',
  eventId: 'evt_001',
};

export const mockEvent: Event = {
  id: 'evt_001',
  title: 'THEZAR 2026 — Tirunelveli District',
  round: 'Round 2',
  date: '10 Oct 2026',
  time: '10:00 AM – 05:00 PM',
  venue: 'ABC College Auditorium, Main Block',
  status: 'UPCOMING',
  competitions: ['Speech', 'Cultural', 'Innovation', 'Quiz'],
};

export const mockAnnouncements: Announcement[] = [
  { id: '1', title: 'Registration confirmed for Tirunelveli Round 2', time: '10 mins ago' },
  { id: '2', title: 'Round 2 schedule updated by admin', time: '1 hour ago' },
  { id: '3', title: 'Venue updated to ABC College Auditorium', time: '3 hours ago' },
];

export const mockSchedule: ScheduleItem[] = [
  { id: 's1', time: '09:30 AM', title: 'Participant Entry & Check-in', status: 'Completed' },
  { id: 's2', time: '10:00 AM', title: 'Registration Verification', status: 'Completed' },
  { id: 's3', time: '10:30 AM', title: 'Opening Ceremony & Keynote', status: 'Ongoing' },
  { id: 's4', time: '11:00 AM', title: 'Competition Round 1', status: 'Upcoming' },
  { id: 's5', time: '01:00 PM', title: 'Lunch Break & Networking', status: 'Upcoming' },
  { id: 's6', time: '02:00 PM', title: 'Competition Round 2', status: 'Upcoming' },
  { id: 's7', time: '04:00 PM', title: 'Results Announcement', status: 'Upcoming' },
  { id: 's8', time: '05:00 PM', title: 'Valedictory & Closing', status: 'Upcoming' },
];

export const mockResults: ResultItem[] = [
  { id: 'r1', rank: 1, name: 'Arun Kumar', points: 950 },
  { id: 'r2', rank: 2, name: 'Priya S', points: 920 },
  { id: 'r3', rank: 3, name: 'Rahul M', points: 890 },
  { id: 'r4', rank: 4, name: 'Suman (You)', points: 850, isCurrentUser: true },
  { id: 'r5', rank: 5, name: 'Karthik R', points: 820 },
];

export const mockLeaderboard: LeaderboardItem[] = [
  { rank: 1, name: 'Arun Kumar', points: 950, category: 'Tirunelveli' },
  { rank: 2, name: 'Priya S', points: 920, category: 'Tirunelveli' },
  { rank: 3, name: 'Rahul M', points: 890, category: 'Madurai' },
  { rank: 4, name: 'Suman', points: 850, category: 'Tirunelveli' },
  { rank: 5, name: 'Karthik R', points: 820, category: 'Coimbatore' },
  { rank: 6, name: 'Deepa V', points: 790, category: 'Chennai' },
  { rank: 7, name: 'Vijay K', points: 760, category: 'Tirunelveli' },
];
