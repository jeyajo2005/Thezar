import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/constants/config';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type NotificationCategory = 'all' | 'announcement' | 'schedule' | 'results';

interface NotificationItem {
  id: string;
  category: 'announcement' | 'schedule' | 'results';
  categoryLabel: string;
  title: string;
  body: string;
  time: string;
  isRead: boolean;
}

export default function NotificationsScreen() {
  const insets = useSafeAreaInsets();
  const [selectedCategory, setSelectedCategory] = useState<NotificationCategory>('all');
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: '1',
      category: 'announcement',
      categoryLabel: 'ANNOUNCEMENT',
      title: 'Tirunelveli Round 2 Venue Updated',
      body: 'Your competition venue has been shifted to ABC College Main Auditorium. Please arrive by 09:30 AM for registration verification.',
      time: '2 mins ago',
      isRead: false,
    },
    {
      id: '2',
      category: 'schedule',
      categoryLabel: 'SCHEDULE',
      title: 'Innovation & Coding Round 2 Timing',
      body: 'Round 2 presentation starts promptly at 02:00 PM today. Ensure your presentation slides and demo links are ready.',
      time: '1 hour ago',
      isRead: false,
    },
    {
      id: '3',
      category: 'results',
      categoryLabel: 'RESULTS',
      title: 'Round 1 Scores Published',
      body: 'Official scorecards and leaderboard rankings for Round 1 have been released. You are currently ranked #4 in Tirunelveli district.',
      time: '3 hours ago',
      isRead: false,
    },
    {
      id: '4',
      category: 'announcement',
      categoryLabel: 'ANNOUNCEMENT',
      title: 'Badge & ID Card Distribution',
      body: 'Please collect your physical candidate badge from the registration desk near Gate 2.',
      time: 'Yesterday',
      isRead: true,
    },
  ]);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const markSingleAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const filteredNotifications = notifications.filter((n) => {
    if (selectedCategory === 'all') return true;
    return n.category === selectedCategory;
  });

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'announcement':
        return {
          icon: 'megaphone' as const,
          bgColor: '#FFF1F2',
          iconColor: '#E11D48',
          badgeBg: '#FFE4E6',
          badgeColor: '#BE123C',
        };
      case 'schedule':
        return {
          icon: 'time' as const,
          bgColor: '#FEF3C7',
          iconColor: '#D97706',
          badgeBg: '#FDE68A',
          badgeColor: '#92400E',
        };
      case 'results':
        return {
          icon: 'trophy' as const,
          bgColor: '#ECFDF5',
          iconColor: '#059669',
          badgeBg: '#D1FAE5',
          badgeColor: '#065F46',
        };
      default:
        return {
          icon: 'notifications' as const,
          bgColor: '#F1F5F9',
          iconColor: '#64748B',
          badgeBg: '#E2E8F0',
          badgeColor: '#475569',
        };
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right', 'bottom']}>
      {/* Top Navigation Bar */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={22} color={Colors.textLight} />
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Notifications</Text>
          {unreadCount > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>{unreadCount} New</Text>
            </View>
          )}
        </View>

        {unreadCount > 0 ? (
          <TouchableOpacity
            style={styles.markReadBtn}
            onPress={markAllAsRead}
            activeOpacity={0.7}
          >
            <Text style={styles.markReadText}>Mark read</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 60 }} />
        )}
      </View>

      {/* Category Filter Pills */}
      <View style={styles.filterBar}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScroll}
        >
          {(
            [
              { key: 'all', label: 'All' },
              { key: 'announcement', label: 'Announcements' },
              { key: 'schedule', label: 'Schedule' },
              { key: 'results', label: 'Results' },
            ] as const
          ).map((filter) => {
            const isActive = selectedCategory === filter.key;
            return (
              <TouchableOpacity
                key={filter.key}
                style={[styles.filterPill, isActive && styles.filterPillActive]}
                onPress={() => setSelectedCategory(filter.key)}
                activeOpacity={0.75}
              >
                <Text
                  style={[
                    styles.filterText,
                    isActive && styles.filterTextActive,
                  ]}
                >
                  {filter.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Notifications List */}
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: Math.max(insets.bottom, 20) + 30 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {filteredNotifications.length === 0 ? (
          <View style={styles.emptyState}>
            <View style={styles.emptyIconBox}>
              <Ionicons name="notifications-off-outline" size={36} color={Colors.textMuted} />
            </View>
            <Text style={styles.emptyTitle}>No Notifications</Text>
            <Text style={styles.emptySubtitle}>
              You're all caught up! Check back later for new event updates.
            </Text>
          </View>
        ) : (
          filteredNotifications.map((n) => {
            const catStyle = getCategoryStyles(n.category);
            return (
              <TouchableOpacity
                key={n.id}
                style={[styles.card, !n.isRead && styles.cardUnread]}
                onPress={() => markSingleAsRead(n.id)}
                activeOpacity={0.8}
              >
                {/* Left Category Icon */}
                <View style={[styles.iconBox, { backgroundColor: catStyle.bgColor }]}>
                  <Ionicons name={catStyle.icon} size={20} color={catStyle.iconColor} />
                </View>

                {/* Body Content */}
                <View style={styles.body}>
                  <View style={styles.cardTopRow}>
                    <View
                      style={[
                        styles.categoryBadge,
                        { backgroundColor: catStyle.badgeBg },
                      ]}
                    >
                      <Text
                        style={[
                          styles.categoryBadgeText,
                          { color: catStyle.badgeColor },
                        ]}
                      >
                        {n.categoryLabel}
                      </Text>
                    </View>
                    <View style={styles.timeRow}>
                      <Ionicons name="time-outline" size={12} color={Colors.textMuted} />
                      <Text style={styles.timeText}>{n.time}</Text>
                    </View>
                  </View>

                  <Text style={[styles.title, !n.isRead && styles.titleBold]}>
                    {n.title}
                  </Text>
                  <Text style={styles.messageText}>{n.body}</Text>
                </View>

                {/* Unread indicator dot */}
                {!n.isRead && <View style={styles.unreadDot} />}
              </TouchableOpacity>
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgDark,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.cardBorder,
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.textLight,
  },
  unreadBadge: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  unreadBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },
  markReadBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#FFF1F2',
  },
  markReadText: {
    color: Colors.primary,
    fontSize: 12,
    fontWeight: '700',
  },
  filterBar: {
    backgroundColor: Colors.white,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.cardBorder,
  },
  filterScroll: {
    paddingHorizontal: 16,
    gap: 8,
  },
  filterPill: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  filterPillActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  filterText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textMuted,
  },
  filterTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  content: {
    padding: 16,
    gap: 12,
  },
  card: {
    backgroundColor: Colors.cardDark,
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    gap: 12,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 1,
  },
  cardUnread: {
    borderColor: '#FECDD3',
    backgroundColor: '#FFFFFF',
    shadowColor: Colors.primary,
    shadowOpacity: 0.06,
  },
  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  body: {
    flex: 1,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  categoryBadge: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 6,
  },
  categoryBadgeText: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  timeText: {
    fontSize: 11,
    color: Colors.textMuted,
    fontWeight: '500',
  },
  title: {
    color: Colors.textLight,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    lineHeight: 18,
  },
  titleBold: {
    fontWeight: '800',
  },
  messageText: {
    color: Colors.textMuted,
    fontSize: 12,
    lineHeight: 17,
  },
  unreadDot: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 24,
  },
  emptyIconBox: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.textLight,
  },
  emptySubtitle: {
    fontSize: 13,
    color: Colors.textMuted,
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 18,
  },
});
