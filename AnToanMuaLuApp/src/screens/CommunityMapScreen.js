import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CommunityMapScreen = () => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.mapPlaceholder}>
      <Text style={styles.mapText}>Bản đồ cộng đồng</Text>
      <Text style={styles.mapSubText}>Sắp tới sẽ tích hợp Google Maps / Mapbox</Text>
    </View>
    <View style={styles.bottomSheet}>
      <Text style={styles.sheetTitle}>Đóng góp dữ liệu</Text>
      <Text style={styles.sheetText}>
        Người dân có thể báo cáo khu vực ngập, điểm cứu trợ dã chiến hoặc tuyến đường đang an toàn. Tọa độ sẽ được làm
        tròn để bảo vệ quyền riêng tư.
      </Text>
      <TouchableOpacity style={styles.sheetButton}>
        <Text style={styles.sheetButtonText}>Báo cáo nhanh</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  mapPlaceholder: {
    flex: 1,
    margin: 20,
    borderRadius: 20,
    backgroundColor: '#1e293b',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#334155',
  },
  mapText: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: '700',
  },
  mapSubText: {
    color: '#94a3b8',
    marginTop: 8,
  },
  bottomSheet: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  sheetText: {
    color: '#475569',
    marginBottom: 16,
    lineHeight: 20,
  },
  sheetButton: {
    backgroundColor: '#0ea5e9',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  sheetButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default CommunityMapScreen;
