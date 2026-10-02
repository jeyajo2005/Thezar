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
import { mockEvent } from '@/services/mockData';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function EventDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} color={Colors.textLight} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Event Details</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.badgeRow}>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{mockEvent.status}</Text>
          </View>
          <Text style={styles.roundText}>{mockEvent.round}</Text>
        </View>

        <Text style={styles.eventTitle}>{mockEvent.title}</Text>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Ionicons name="calendar" size={18} color={Colors.pink} />
            <Text style={styles.infoText}>{mockEvent.date}</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="time" size={18} color={Colors.pink} />
            <Text style={styles.infoText}>{mockEvent.time}</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="location" size={18} color={Colors.pink} />
            <Text style={styles.infoText}>{mockEvent.venue}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>COMPETITIONS</Text>
        <View style={styles.chipRow}>
          {mockEvent.competitions.map((item, idx) => (
            <View key={idx} style={styles.chip}>
              <Text style={styles.chipText}>{item}</Text>
            </View>
          ))}
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
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
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
    fontSize: 13,
    fontWeight: '700',
  },
  eventTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.textLight,
    marginBottom: 16,
  },
  infoCard: {
    backgroundColor: Colors.cardDark,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    gap: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  infoText: {
    color: Colors.textLight,
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: Colors.textMuted,
    letterSpacing: 1.2,
    marginBottom: 12,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: Colors.pinkLight,
    borderColor: Colors.pink,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  chipText: {
    color: Colors.pinkDark,
    fontSize: 13,
    fontWeight: '600',
  },
});
