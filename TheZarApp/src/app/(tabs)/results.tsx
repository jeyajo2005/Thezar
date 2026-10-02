import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/config';
import { mockResults } from '@/services/mockData';
import { Ionicons } from '@expo/vector-icons';

export default function ResultsScreen() {
  const currentUserResult = mockResults.find((r) => r.isCurrentUser);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.title}>COMPETITION RESULTS</Text>
        <Text style={styles.subtitle}>Tirunelveli District Round 2</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* User Card Highlight */}
        {currentUserResult && (
          <View style={styles.userCard}>
            <Text style={styles.userCardLabel}>YOUR RESULT</Text>
            <View style={styles.userCardRow}>
              <View>
                <Text style={styles.userName}>{currentUserResult.name}</Text>
                <Text style={styles.userPoints}>{currentUserResult.points} Points</Text>
              </View>
              <View style={styles.rankBadge}>
                <Text style={styles.rankBadgeLabel}>RANK</Text>
                <Text style={styles.rankBadgeVal}>#{currentUserResult.rank}</Text>
              </View>
            </View>
          </View>
        )}

        <Text style={styles.sectionHeader}>TOP PERFORMERS</Text>

        {mockResults.map((item) => (
          <View
            key={item.id}
            style={[styles.resultCard, item.isCurrentUser && styles.currentHighlight]}
          >
            <View style={styles.rankIconContainer}>
              {item.rank === 1 ? (
                <Ionicons name="trophy" size={24} color="#EAB308" />
              ) : item.rank === 2 ? (
                <Ionicons name="medal" size={24} color="#94A3B8" />
              ) : item.rank === 3 ? (
                <Ionicons name="medal" size={24} color="#B45309" />
              ) : (
                <Text style={styles.rankNumber}>#{item.rank}</Text>
              )}
            </View>

            <View style={styles.resultInfo}>
              <Text style={styles.resultName}>{item.name}</Text>
              <Text style={styles.resultPoints}>{item.points} Points</Text>
            </View>

            {item.isCurrentUser && (
              <View style={styles.youTag}>
                <Text style={styles.youTagText}>YOU</Text>
              </View>
            )}
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
  content: {
    padding: 16,
  },
  userCard: {
    backgroundColor: Colors.pinkLight,
    borderColor: Colors.pink,
    borderWidth: 1.5,
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  userCardLabel: {
    color: Colors.pinkDark,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 8,
  },
  userCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    color: Colors.textLight,
    fontSize: 20,
    fontWeight: '800',
  },
  userPoints: {
    color: Colors.textMuted,
    fontSize: 14,
    marginTop: 2,
  },
  rankBadge: {
    backgroundColor: Colors.pink,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
  },
  rankBadgeLabel: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '800',
  },
  rankBadgeVal: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textMuted,
    letterSpacing: 1.2,
    marginBottom: 12,
  },
  resultCard: {
    backgroundColor: Colors.cardDark,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  currentHighlight: {
    borderColor: Colors.pink,
  },
  rankIconContainer: {
    width: 40,
    alignItems: 'center',
  },
  rankNumber: {
    color: Colors.textMuted,
    fontWeight: '800',
    fontSize: 16,
  },
  resultInfo: {
    flex: 1,
    marginLeft: 10,
  },
  resultName: {
    color: Colors.textLight,
    fontSize: 15,
    fontWeight: '700',
  },
  resultPoints: {
    color: Colors.pink,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  youTag: {
    backgroundColor: Colors.pink,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  youTagText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 10,
  },
});
