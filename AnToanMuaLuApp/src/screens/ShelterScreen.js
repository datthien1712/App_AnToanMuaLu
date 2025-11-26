import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const mockShelters = [
  { name: 'Trường THPT Hải Lăng', address: 'Hải Lăng, Quảng Trị', capacity: 500, available: 320 },
  { name: 'Nhà văn hóa Hòa Khánh', address: 'Liên Chiểu, Đà Nẵng', capacity: 250, available: 120 },
  { name: 'UBND xã Phong Sơn', address: 'Phong Điền, Thừa Thiên Huế', capacity: 200, available: 150 },
];

const ShelterScreen = () => (
  <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={styles.header}>Nơi trú ẩn gần bạn</Text>
      {mockShelters.map((shelter) => (
        <View key={shelter.name} style={styles.card}>
          <Text style={styles.name}>{shelter.name}</Text>
          <Text style={styles.address}>{shelter.address}</Text>
          <Text style={styles.capacity}>
            {shelter.available}/{shelter.capacity} chỗ trống
          </Text>
        </View>
      ))}
      <Text style={styles.notice}>
        * Thông tin được đồng bộ từ chính quyền địa phương. Bạn có thể đề xuất cập nhật từ cộng đồng.
      </Text>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f1f5f9',
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
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  address: {
    color: '#475569',
  },
  capacity: {
    marginTop: 8,
    color: '#0f172a',
    fontWeight: '600',
  },
  notice: {
    fontSize: 13,
    color: '#475569',
  },
});

export default ShelterScreen;
