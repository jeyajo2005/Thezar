import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/constants/config';
import { mockUser } from '@/services/mockData';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ThezarLogo } from '@/components/ThezarLogo';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  const handleLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out of Thezar portal?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Log Out',
          style: 'destructive',
          onPress: () => router.replace('/auth/login'),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      {/* Top Header */}
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>Participant Profile</Text>
        <View style={styles.verifiedBadge}>
          <Ionicons name="shield-checkmark" size={14} color="#10B981" />
          <Text style={styles.verifiedText}>Verified</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: Math.max(insets.bottom, 16) + 90 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Candidate Identity Card */}
        <View style={styles.profileCard}>
          {/* Avatar with Status Ring */}
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{mockUser.name.charAt(0)}</Text>
            </View>
            <View style={styles.statusDot}>
              <Ionicons name="checkmark" size={12} color="#FFFFFF" />
            </View>
          </View>

          <Text style={styles.userName}>{mockUser.name}</Text>

          {/* Participant ID Pill */}
          <View style={styles.idBadge}>
            <Ionicons name="finger-print-outline" size={14} color={Colors.primary} />
            <Text style={styles.participantId}>{mockUser.participantId}</Text>
          </View>

          {/* Tag Pills */}
          <View style={styles.tagRow}>
            <View style={styles.tagPill}>
              <Ionicons name="location-outline" size={12} color={Colors.textMuted} />
              <Text style={styles.tagText}>{mockUser.district}</Text>
            </View>
            <View style={styles.tagPillGold}>
              <Ionicons name="sparkles" size={12} color="#D4A72C" />
              <Text style={styles.tagTextGold}>Round 2 Finalist</Text>
            </View>
          </View>
        </View>

        {/* Participant Details Section */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <Ionicons name="person-circle-outline" size={18} color={Colors.primary} />
            <Text style={styles.sectionTitle}>PARTICIPANT DETAILS</Text>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.iconCircle}>
              <Ionicons name="school-outline" size={16} color={Colors.primary} />
            </View>
            <View style={styles.detailInfo}>
              <Text style={styles.detailLabel}>College / Institution</Text>
              <Text style={styles.detailValue}>{mockUser.college}</Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.iconCircle}>
              <Ionicons name="map-outline" size={16} color={Colors.primary} />
            </View>
            <View style={styles.detailInfo}>
              <Text style={styles.detailLabel}>District</Text>
              <Text style={styles.detailValue}>{mockUser.district}</Text>
            </View>
          </View>

          <View style={[styles.detailRow, { borderBottomWidth: 0 }]}>
            <View style={styles.iconCircle}>
              <Ionicons name="trophy-outline" size={16} color={Colors.primary} />
            </View>
            <View style={styles.detailInfo}>
              <Text style={styles.detailLabel}>Registered Competition</Text>
              <Text style={styles.detailValue}>{mockUser.competition}</Text>
            </View>
          </View>
        </View>

        {/* Quick Menu Options */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <Ionicons name="grid-outline" size={18} color={Colors.primary} />
            <Text style={styles.sectionTitle}>SERVICES & SUPPORT</Text>
          </View>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push('/notifications' as any)}
            activeOpacity={0.7}
          >
            <View style={[styles.menuIconBox, { backgroundColor: '#FFF1F2' }]}>
              <Ionicons name="notifications-outline" size={18} color={Colors.primary} />
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>Notifications</Text>
              <Text style={styles.menuSubtitle}>Updates, alerts & announcements</Text>
            </View>
            <View style={styles.unreadCountBadge}>
              <Text style={styles.unreadCountText}>3</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push('/enquiry' as any)}
            activeOpacity={0.7}
          >
            <View style={[styles.menuIconBox, { backgroundColor: '#F0FDF4' }]}>
              <Ionicons name="help-circle-outline" size={18} color="#10B981" />
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>Help & Enquiry</Text>
              <Text style={styles.menuSubtitle}>Submit questions to coordinators</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuItem, { borderBottomWidth: 0 }]}
            onPress={() => router.push('/ai' as any)}
            activeOpacity={0.7}
          >
            <View style={[styles.menuIconBox, { backgroundColor: '#FEF3C7' }]}>
              <Ionicons name="sparkles-outline" size={18} color="#D97706" />
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>TheZar AI Assistant</Text>
              <Text style={styles.menuSubtitle}>Instant event guidance & info</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
          </TouchableOpacity>
        </View>

        {/* Logout Action */}
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={handleLogout}
          activeOpacity={0.85}
        >
          <Ionicons name="log-out-outline" size={18} color={Colors.error} />
          <Text style={styles.logoutText}>LOG OUT</Text>
        </TouchableOpacity>

        {/* Brand Footer */}
        <View style={styles.footerBrand}>
          <ThezarLogo size="sm" />
          <Text style={styles.footerTitle}>THEZAR 2026</Text>
          <Text style={styles.footerSubtitle}>
            Official Candidate Access & Competition Portal
          </Text>
          <Text style={styles.footerVersion}>Version 1.0.0</Text>
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
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.cardBorder,
  },
  topBarTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.textLight,
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  verifiedText: {
    fontSize: 11,
    color: '#059669',
    fontWeight: '700',
  },
  content: {
    padding: 16,
  },
  profileCard: {
    backgroundColor: Colors.cardDark,
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 12,
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '900',
  },
  statusDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#10B981',
    borderWidth: 2.5,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.textLight,
  },
  idBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFF1F2',
    borderWidth: 1,
    borderColor: '#FECDD3',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 16,
    marginTop: 8,
  },
  participantId: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  tagRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 14,
  },
  tagPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 11,
    color: Colors.textMuted,
    fontWeight: '600',
  },
  tagPillGold: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FEF9C3',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FDE047',
  },
  tagTextGold: {
    fontSize: 11,
    color: '#854D0E',
    fontWeight: '700',
  },
  sectionCard: {
    backgroundColor: Colors.cardDark,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 1,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: Colors.textMuted,
    letterSpacing: 1.2,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F8FAFC',
    gap: 12,
  },
  iconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#FFF1F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailInfo: {
    flex: 1,
  },
  detailLabel: {
    color: Colors.textMuted,
    fontSize: 11,
    fontWeight: '500',
  },
  detailValue: {
    color: Colors.textLight,
    fontSize: 13,
    fontWeight: '700',
    marginTop: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F8FAFC',
    gap: 12,
  },
  menuIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    color: Colors.textLight,
    fontSize: 14,
    fontWeight: '700',
  },
  menuSubtitle: {
    color: Colors.textMuted,
    fontSize: 11,
    marginTop: 2,
  },
  unreadCountBadge: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 10,
    marginRight: 4,
  },
  unreadCountText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEF2F2',
    borderColor: '#FECDD3',
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 14,
    marginTop: 4,
    marginBottom: 8,
    gap: 8,
  },
  logoutText: {
    color: Colors.error,
    fontWeight: '800',
    fontSize: 14,
    letterSpacing: 1,
  },
  footerBrand: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  footerTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: Colors.textLight,
    letterSpacing: 2,
    marginTop: 8,
  },
  footerSubtitle: {
    fontSize: 11,
    color: Colors.textMuted,
    textAlign: 'center',
    marginTop: 2,
    maxWidth: 240,
    lineHeight: 16,
  },
  footerVersion: {
    fontSize: 10,
    color: '#94A3B8',
    marginTop: 6,
    letterSpacing: 0.5,
  },
});
