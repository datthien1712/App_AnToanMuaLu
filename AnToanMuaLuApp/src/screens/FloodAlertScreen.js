import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const mockAlerts = [
  { id: 1, region: 'Quảng Nam', severity: 'danger', message: 'Nước dâng nhanh, hạn chế di chuyển ra ngoài.' },
  { id: 2, region: 'Huế', severity: 'warning', message: 'Theo dõi mực nước sông Hương, chuẩn bị di dời.' },
  { id: 3, region: 'Đà Nẵng', severity: 'info', message: 'Mưa lớn cục bộ, chú ý các tuyến đường ngập.' },
];

const severityColor = {
  danger: '#ef4444',
  warning: '#f97316',
  info: '#0ea5e9',
};

const FloodAlertScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.header}>Cảnh báo lũ gần bạn</Text>
        {mockAlerts.map((alert) => (
          <View key={alert.id} style={styles.card}>
            <View style={[styles.badge, { backgroundColor: severityColor[alert.severity] }]}>
              <Text style={styles.badgeText}>{alert.severity.toUpperCase()}</Text>
            </View>
            <Text style={styles.region}>{alert.region}</Text>
            <Text style={styles.message}>{alert.message}</Text>
          </View>
        ))}
        <Text style={styles.note}>
          * Dữ liệu thời gian thực sẽ được kết nối từ hệ thống cảnh báo và nguồn nhà nước (VD: VNDMA, Đài KTTV).
        </Text>
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
  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    marginBottom: 8,
  },
  badgeText: {
    color: '#fff',
    fontWeight: '600',
  },
  region: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  message: {
    color: '#475569',
    lineHeight: 20,
  },
  note: {
    fontSize: 13,
    color: '#64748b',
  },
});

export default FloodAlertScreen;
