import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/config';
import { router } from 'expo-router';
import { ThezarLogo } from '@/components/ThezarLogo';

export default function LoginScreen() {
  const [participantId, setParticipantId] = useState('TRZ-2026-TVL-00124');
  const [password, setPassword] = useState('••••••••••••');

  const handleLogin = () => {
    router.replace('/(tabs)/home');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom', 'left', 'right']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inner}
      >
        <View style={styles.header}>
          <ThezarLogo size="lg" showGlow style={styles.logo} />
          <Text style={styles.subtitle}>Candidate Access Portal</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Candidate Login</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Participant ID</Text>
            <TextInput
              style={styles.input}
              value={participantId}
              onChangeText={setParticipantId}
              placeholder="e.g. TRZ-2026-TVL-00124"
              placeholderTextColor={Colors.textMuted}
              autoCapitalize="characters"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="Enter password"
              placeholderTextColor={Colors.textMuted}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN →</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotBtn}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgDark,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    marginBottom: 8,
  },
  subtitle: {
    color: Colors.textMuted,
    fontSize: 14,
    marginTop: 4,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: Colors.cardDark,
    borderRadius: 16,
    padding: 24,
    borderColor: Colors.cardBorder,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textLight,
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    color: Colors.textMuted,
    fontSize: 12,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderColor: Colors.cardBorder,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: Colors.textLight,
    fontSize: 14,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
    letterSpacing: 1,
  },
  forgotBtn: {
    alignItems: 'center',
    marginTop: 16,
  },
  forgotText: {
    color: Colors.cyan,
    fontSize: 13,
  },
});
