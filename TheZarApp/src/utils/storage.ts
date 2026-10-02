import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const TOKEN_KEY = 'thezar_auth_token';
const USER_KEY = 'thezar_user_data';

export const storage = {
  async setToken(token: string) {
    if (Platform.OS === 'web') {
      localStorage.setItem(TOKEN_KEY, token);
    } else {
      await SecureStore.setItemAsync(TOKEN_KEY, token);
    }
  },
  async getToken(): Promise<string | null> {
    if (Platform.OS === 'web') {
      return localStorage.getItem(TOKEN_KEY);
    }
    return await SecureStore.getItemAsync(TOKEN_KEY);
  },
  async setUser(user: any) {
    const json = JSON.stringify(user);
    if (Platform.OS === 'web') {
      localStorage.setItem(USER_KEY, json);
    } else {
      await SecureStore.setItemAsync(USER_KEY, json);
    }
  },
  async getUser(): Promise<any | null> {
    let json: string | null = null;
    if (Platform.OS === 'web') {
      json = localStorage.getItem(USER_KEY);
    } else {
      json = await SecureStore.getItemAsync(USER_KEY);
    }
    return json ? JSON.parse(json) : null;
  },
  async clearAll() {
    if (Platform.OS === 'web') {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    } else {
      await SecureStore.deleteItemAsync(TOKEN_KEY);
      await SecureStore.deleteItemAsync(USER_KEY);
    }
  },
};
