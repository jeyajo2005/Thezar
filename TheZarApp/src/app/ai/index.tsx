import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/config';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AiAssistantScreen() {
  const [messages, setMessages] = useState([
    { id: '1', sender: 'ai', text: 'Hi Suman 👋\nHow can I help you regarding your competition or schedule today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: 'Your next competition (Innovation & Coding) is scheduled for 02:00 PM in Main Auditorium.',
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 600);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} color={Colors.textLight} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>TheZar AI Assistant</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inner}
      >
        <ScrollView contentContainerStyle={styles.messageList}>
          {messages.map((m) => (
            <View
              key={m.id}
              style={[
                styles.bubble,
                m.sender === 'user' ? styles.userBubble : styles.aiBubble,
              ]}
            >
              <Text
                style={[
                  styles.bubbleText,
                  m.sender === 'user' ? styles.userText : styles.aiText,
                ]}
              >
                {m.text}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputBar}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Ask something..."
            placeholderTextColor={Colors.textMuted}
          />
          <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
            <Ionicons name="send" size={18} color="#FFFFFF" />
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
    color: Colors.pink,
  },
  inner: {
    flex: 1,
  },
  messageList: {
    padding: 16,
    gap: 12,
  },
  bubble: {
    maxWidth: '80%',
    padding: 14,
    borderRadius: 16,
  },
  aiBubble: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.cardDark,
    borderColor: Colors.cardBorder,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.pink,
  },
  bubbleText: {
    fontSize: 14,
    lineHeight: 20,
  },
  aiText: {
    color: Colors.textLight,
  },
  userText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  inputBar: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.cardBorder,
    alignItems: 'center',
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderColor: Colors.cardBorder,
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: Colors.textLight,
    fontSize: 14,
  },
  sendBtn: {
    backgroundColor: Colors.pink,
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
