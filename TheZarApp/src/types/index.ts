export interface User {
  id: string;
  name: string;
  participantId: string;
  college: string;
  district: string;
  competition: string;
  eventId: string;
}

export interface Event {
  id: string;
  title: string;
  round: string;
  date: string;
  time: string;
  venue: string;
  status: 'UPCOMING' | 'ONGOING' | 'COMPLETED';
  competitions: string[];
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  status?: string;
}

export interface ResultItem {
  id: string;
  rank: number;
  name: string;
  points: number;
  isCurrentUser?: boolean;
}

export interface LeaderboardItem {
  rank: number;
  name: string;
  points: number;
  category?: string;
}

export interface Announcement {
  id: string;
  title: string;
  time: string;
}
