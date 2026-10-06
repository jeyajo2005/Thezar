import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/constants/config';
import { mockUser, mockEvent, mockAnnouncements } from '@/services/mockData';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ThezarLogo } from '@/components/ThezarLogo';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: Math.max(insets.bottom, 16) + 85 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.logoBadge}>
              <ThezarLogo size="xs" />
            </View>
            <View style={styles.greetingContainer}>
              <Text style={styles.greeting} numberOfLines={1}>Good Morning, {mockUser.name} 👋</Text>
              <Text style={styles.participantId}>{mockUser.participantId}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.notificationBtn}
            onPress={() => router.push('/notifications' as any)}
            activeOpacity={0.8}
          >
            <Ionicons name="notifications-outline" size={22} color={Colors.pink} />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        {/* Highlighted Registered Event Card */}
        <Text style={styles.sectionHeader}>REGISTERED EVENT</Text>
        <View style={styles.eventCard}>
          <View style={styles.badgeRow}>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{mockEvent.status}</Text>
            </View>
            <Text style={styles.roundText}>{mockEvent.round}</Text>
          </View>

          <Text style={styles.eventTitle}>{mockEvent.title}</Text>

          <View style={styles.infoRow}>
            <Ionicons name="calendar-outline" size={16} color={Colors.pink} />
            <Text style={styles.infoText}>{mockEvent.date} • {mockEvent.time}</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={16} color={Colors.pink} />
            <Text style={styles.infoText}>{mockEvent.venue}</Text>
          </View>

          <TouchableOpacity style={styles.viewEventBtn} onPress={() => router.push('/event/details')}>
            <Text style={styles.viewEventText}>VIEW EVENT DETAILS →</Text>
          </TouchableOpacity>
        </View>

        {/* Announcements Section */}
        <Text style={styles.sectionHeader}>ANNOUNCEMENTS</Text>
        {mockAnnouncements.map((item) => (
          <View key={item.id} style={styles.announcementCard}>
            <Ionicons name="megaphone-outline" size={18} color={Colors.pink} />
            <View style={styles.announcementBody}>
              <Text style={styles.announcementTitle}>{item.title}</Text>
              <Text style={styles.announcementTime}>{item.time}</Text>
            </View>
          </View>
        ))}

        {/* Quick Access Action Grid */}
        <Text style={styles.sectionHeader}>QUICK ACCESS</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.gridCard} onPress={() => router.push('/(tabs)/schedule')}>
            <Ionicons name="calendar" size={26} color={Colors.pink} />
            <Text style={styles.gridText}>Schedule</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridCard} onPress={() => router.push('/(tabs)/results')}>
            <Ionicons name="trophy" size={26} color={Colors.pink} />
            <Text style={styles.gridText}>Results</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridCard} onPress={() => router.push('/(tabs)/leaderboard')}>
            <Ionicons name="podium" size={26} color={Colors.pink} />
            <Text style={styles.gridText}>Leaderboard</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridCard} onPress={() => router.push('/ai' as any)}>
            <Ionicons name="chatbubbles" size={26} color={Colors.pink} />
            <Text style={styles.gridText}>AI Assistant</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgDark,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 6,
    width: '100%',
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  logoBadge: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  greetingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.textLight,
  },
  participantId: {
    fontSize: 12,
    color: Colors.pink,
    marginTop: 2,
    fontWeight: '600',
  },
  notificationBtn: {
    width: 44,
    height: 44,
    backgroundColor: Colors.cardDark,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    flexShrink: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  notificationDot: {
    position: 'absolute',
    top: 9,
    right: 9,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textMuted,
    letterSpacing: 1.2,
    marginBottom: 10,
    marginTop: 14,
  },
  eventCard: {
    backgroundColor: Colors.cardDark,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusBadge: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.success,
  },
  statusText: {
    color: Colors.success,
    fontSize: 11,
    fontWeight: '700',
  },
  roundText: {
    color: Colors.pinkDark,
    fontSize: 12,
    fontWeight: '700',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textLight,
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  infoText: {
    color: Colors.textMuted,
    fontSize: 13,
  },
  viewEventBtn: {
    backgroundColor: Colors.pink,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 14,
  },
  viewEventText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
    letterSpacing: 0.8,
  },
  announcementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardDark,
    padding: 14,
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    gap: 12,
  },
  announcementBody: {
    flex: 1,
  },
  announcementTitle: {
    color: Colors.textLight,
    fontSize: 13,
    fontWeight: '600',
  },
  announcementTime: {
    color: Colors.textMuted,
    fontSize: 11,
    marginTop: 2,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  gridCard: {
    width: '48%',
    backgroundColor: Colors.cardDark,
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  gridText: {
    color: Colors.textLight,
    fontSize: 13,
    fontWeight: '600',
  },
});
