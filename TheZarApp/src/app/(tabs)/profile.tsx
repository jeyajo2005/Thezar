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
import { mockUser } from '@/services/mockData';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const handleLogout = () => {
    router.replace('/auth/login');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: Math.max(insets.bottom, 16) + 95 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* User Card Header */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{mockUser.name.charAt(0)}</Text>
          </View>

          <Text style={styles.userName}>{mockUser.name}</Text>
          <Text style={styles.participantId}>{mockUser.participantId}</Text>
        </View>

        {/* Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PARTICIPANT DETAILS</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>College</Text>
            <Text style={styles.infoValue}>{mockUser.college}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>District</Text>
            <Text style={styles.infoValue}>{mockUser.district}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Competition</Text>
            <Text style={styles.infoValue}>{mockUser.competition}</Text>
          </View>
        </View>

        {/* Quick Menu Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>OPTIONS</Text>

          <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/notifications' as any)}>
            <Ionicons name="notifications-outline" size={20} color={Colors.primary} />
            <Text style={styles.menuText}>Notifications</Text>
            <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/enquiry' as any)}>
            <Ionicons name="help-circle-outline" size={20} color={Colors.primary} />
            <Text style={styles.menuText}>Help & Enquiry</Text>
            <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/ai' as any)}>
            <Ionicons name="chatbubbles-outline" size={20} color={Colors.primary} />
            <Text style={styles.menuText}>TheZar AI Assistant</Text>
            <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color={Colors.error} />
          <Text style={styles.logoutText}>LOGOUT</Text>
        </TouchableOpacity>
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
  profileCard: {
    backgroundColor: Colors.cardDark,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
  },
  userName: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.textLight,
  },
  participantId: {
    fontSize: 13,
    color: Colors.primary,
    fontWeight: '700',
    marginTop: 4,
  },
  section: {
    backgroundColor: Colors.cardDark,
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: Colors.textMuted,
    letterSpacing: 1.2,
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  infoLabel: {
    color: Colors.textMuted,
    fontSize: 13,
  },
  infoValue: {
    color: Colors.textLight,
    fontSize: 13,
    fontWeight: '600',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  menuText: {
    flex: 1,
    color: Colors.textLight,
    fontSize: 14,
    fontWeight: '600',
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEF2F2',
    borderColor: Colors.error,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 14,
    marginTop: 10,
    gap: 8,
  },
  logoutText: {
    color: Colors.error,
    fontWeight: '800',
    fontSize: 14,
    letterSpacing: 1,
  },
});
