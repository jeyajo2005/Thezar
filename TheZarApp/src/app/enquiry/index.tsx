import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/constants/config';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function EnquiryScreen() {
  const insets = useSafeAreaInsets();
  const [category, setCategory] = useState('Competition');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    Alert.alert('Success', 'Your enquiry has been submitted to TheZar Admin.');
    setMessage('');
    router.back();
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} color={Colors.textLight} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help & Enquiry</Text>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: Math.max(insets.bottom, 24) + 40 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.cardTitle}>What do you need help with?</Text>

        <Text style={styles.label}>Select Category</Text>
        <View style={styles.categoryRow}>
          {['Competition', 'Schedule', 'Venue', 'Result'].map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.catBtn, category === cat && styles.activeCatBtn]}
              onPress={() => setCategory(cat)}
            >
              <Text style={[styles.catText, category === cat && styles.activeCatText]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Message</Text>
        <TextInput
          style={styles.textArea}
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={5}
          placeholder="Type your question or issue here..."
          placeholderTextColor={Colors.textMuted}
        />

        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
          <Text style={styles.submitText}>SUBMIT ENQUIRY →</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
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
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.textLight,
    marginBottom: 20,
  },
  label: {
    color: Colors.textMuted,
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  catBtn: {
    backgroundColor: Colors.cardDark,
    borderColor: Colors.cardBorder,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  activeCatBtn: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  catText: {
    color: Colors.textMuted,
    fontSize: 13,
  },
  activeCatText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  textArea: {
    backgroundColor: '#F8FAFC',
    borderColor: Colors.cardBorder,
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    color: Colors.textLight,
    fontSize: 14,
    textAlignVertical: 'top',
    height: 120,
    marginBottom: 20,
  },
  submitBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  submitText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 14,
    letterSpacing: 1,
  },
});
