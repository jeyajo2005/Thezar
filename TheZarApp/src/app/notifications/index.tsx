import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/config';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationsScreen() {
  const notifications = [
    {
      id: '1',
      title: 'New Announcement',
      body: 'Your Tirunelveli Round 2 venue has been updated to Main Auditorium.',
      time: '2 min ago',
      icon: 'megaphone',
    },
    {
      id: '2',
      title: 'Schedule Update',
      body: 'Competition Round 2 starts at 02:00 PM today.',
      time: '1 hour ago',
      icon: 'time',
    },
    {
      id: '3',
      title: 'Results Published',
      body: 'Your competition results are now available on the Results tab.',
      time: '3 hours ago',
      icon: 'trophy',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} color={Colors.textLight} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {notifications.map((n) => (
          <View key={n.id} style={styles.card}>
            <View style={styles.iconBox}>
              <Ionicons name={n.icon as any} size={20} color={Colors.pink} />
            </View>
            <View style={styles.body}>
              <Text style={styles.title}>{n.title}</Text>
              <Text style={styles.text}>{n.body}</Text>
              <Text style={styles.time}>{n.time}</Text>
            </View>
          </View>
        ))}
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.cardBorder,
    backgroundColor: Colors.white,
    gap: 12,
  },
  backBtn: {
    padding: 6,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.textLight,
  },
  content: {
    padding: 16,
    gap: 12,
  },
  card: {
    backgroundColor: Colors.cardDark,
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    gap: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Colors.pinkLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
  },
  title: {
    color: Colors.textLight,
    fontSize: 15,
    fontWeight: '700',
  },
  text: {
    color: Colors.textMuted,
    fontSize: 13,
    marginTop: 4,
    lineHeight: 18,
  },
  time: {
    color: Colors.pink,
    fontSize: 11,
    fontWeight: '600',
    marginTop: 6,
  },
});
