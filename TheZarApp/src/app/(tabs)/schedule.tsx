import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/config';
import { mockSchedule } from '@/services/mockData';
import { Ionicons } from '@expo/vector-icons';

export default function ScheduleScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.title}>EVENT SCHEDULE</Text>
        <Text style={styles.subtitle}>10 OCTOBER 2026</Text>
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {mockSchedule.map((item, index) => {
          const isOngoing = item.status === 'Ongoing';
          return (
            <View
              key={item.id}
              style={[
                styles.itemCard,
                isOngoing && styles.ongoingCard,
              ]}
            >
              <View style={styles.timeContainer}>
                <Ionicons
                  name="time-outline"
                  size={16}
                  color={isOngoing ? Colors.pinkDark : Colors.pink}
                />
                <Text style={[styles.timeText, isOngoing && styles.ongoingTime]}>
                  {item.time}
                </Text>
              </View>

              <View style={styles.detailsContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                {item.status && (
                  <Text
                    style={[
                      styles.statusText,
                      isOngoing && styles.ongoingStatusText,
                    ]}
                  >
                    • {item.status}
                  </Text>
                )}
              </View>
            </View>
          );
        })}
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
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.cardBorder,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: Colors.textLight,
    letterSpacing: 1.5,
  },
  subtitle: {
    fontSize: 12,
    color: Colors.pink,
    marginTop: 4,
    fontWeight: '700',
  },
  list: {
    padding: 16,
    gap: 12,
  },
  itemCard: {
    backgroundColor: Colors.cardDark,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    gap: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  ongoingCard: {
    borderColor: Colors.pink,
    backgroundColor: Colors.pinkLight,
  },
  timeContainer: {
    width: 90,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  timeText: {
    color: Colors.pink,
    fontWeight: '700',
    fontSize: 12,
  },
  ongoingTime: {
    color: Colors.pinkDark,
  },
  detailsContainer: {
    flex: 1,
  },
  itemTitle: {
    color: Colors.textLight,
    fontSize: 14,
    fontWeight: '600',
  },
  statusText: {
    color: Colors.textMuted,
    fontSize: 11,
    marginTop: 4,
  },
  ongoingStatusText: {
    color: Colors.pinkDark,
    fontWeight: '700',
  },
});
