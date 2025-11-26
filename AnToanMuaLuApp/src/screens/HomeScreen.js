import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const quickActions = [
  { label: 'Điểm an toàn', description: 'Đánh dấu hoặc xem vị trí an toàn', color: '#0ea5e9' },
  { label: 'Cảnh báo lũ', description: 'Theo dõi cảnh báo theo thời gian thực', color: '#f97316' },
  { label: 'SOS trực tiếp', description: 'Chia sẻ vị trí khi cần cứu hộ', color: '#ef4444' },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.heroCard}>
          <Text style={styles.heroTitle}>An Toàn Mùa Lũ</Text>
          <Text style={styles.heroSubtitle}>
            Ứng dụng hỗ trợ cộng đồng kiểm soát thông tin mưa lũ, chia sẻ điểm an toàn và kết nối cứu hộ.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Tính năng nhanh</Text>
        {quickActions.map((action) => (
          <TouchableOpacity key={action.label} style={[styles.actionCard, { borderColor: action.color }]}>
            <Text style={[styles.actionTitle, { color: action.color }]}>{action.label}</Text>
            <Text style={styles.actionDescription}>{action.description}</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Nhắc nhở an toàn</Text>
          <Text style={styles.infoText}>
            - Chuẩn bị túi cứu hộ cá nhân{'\n'}- Sạc đầy pin điện thoại và pin dự phòng{'\n'}- Theo dõi thông tin chính
            thống từ chính quyền địa phương
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scroll: {
    padding: 20,
    gap: 16,
  },
  heroCard: {
    backgroundColor: '#0f172a',
    borderRadius: 16,
    padding: 20,
  },
  heroTitle: {
    color: '#f8fafc',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  heroSubtitle: {
    color: '#cbd5f5',
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
  },
  actionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  actionDescription: {
    color: '#475569',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  infoText: {
    color: '#475569',
    lineHeight: 20,
  },
});

export default HomeScreen;
