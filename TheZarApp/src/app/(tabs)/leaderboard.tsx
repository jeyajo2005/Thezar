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
import { mockLeaderboard } from '@/services/mockData';
import { Ionicons } from '@expo/vector-icons';

export default function LeaderboardScreen() {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<'Individual' | 'College' | 'District'>('Individual');

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.title}>LEADERBOARD</Text>
        <Text style={styles.subtitle}>Official TheZar Rankings</Text>
      </View>

      {/* Category Tabs */}
      <View style={styles.tabBar}>
        {(['Individual', 'College', 'District'] as const).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.list,
          { paddingBottom: Math.max(insets.bottom, 16) + 85 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {mockLeaderboard.map((item) => (
          <View key={item.rank} style={styles.row}>
            <View style={styles.rankCol}>
              <Text
                style={[
                  styles.rankText,
                  item.rank <= 3 && { color: Colors.pink, fontSize: 16 },
                ]}
              >
                #{item.rank}
              </Text>
            </View>

            <View style={styles.nameCol}>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.categoryText}>{item.category} District</Text>
            </View>

            <View style={styles.pointsCol}>
              <Text style={styles.pointsText}>{item.points}</Text>
              <Text style={styles.ptsLabel}>PTS</Text>
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
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 14,
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
    color: Colors.primary,
    marginTop: 4,
    fontWeight: '700',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    padding: 5,
    margin: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: Colors.primary,
  },
  tabText: {
    color: Colors.textMuted,
    fontSize: 13,
    fontWeight: '600',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
  list: {
    paddingHorizontal: 16,
    gap: 8,
  },
  row: {
    backgroundColor: Colors.cardDark,
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  rankCol: {
    width: 40,
    alignItems: 'center',
  },
  rankText: {
    color: Colors.textMuted,
    fontWeight: '800',
    fontSize: 14,
  },
  nameCol: {
    flex: 1,
    marginLeft: 10,
  },
  nameText: {
    color: Colors.textLight,
    fontSize: 15,
    fontWeight: '700',
  },
  categoryText: {
    color: Colors.textMuted,
    fontSize: 11,
    marginTop: 2,
  },
  pointsCol: {
    alignItems: 'flex-end',
  },
  pointsText: {
    color: Colors.pink,
    fontSize: 16,
    fontWeight: '900',
  },
  ptsLabel: {
    color: Colors.textMuted,
    fontSize: 9,
    fontWeight: '700',
  },
});
