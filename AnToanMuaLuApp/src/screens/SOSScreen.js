import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SOSScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.alertBox}>
          <Text style={styles.alertTitle}>Chia sẻ vị trí ngay lập tức</Text>
          <Text style={styles.alertText}>
            Khi bấm SOS, vị trí sẽ được gửi đến trung tâm cứu hộ. Hãy chắc chắn rằng bạn chỉ dùng tính năng này khi thực
            sự gặp nguy hiểm.
          </Text>
        </View>

        <TouchableOpacity style={styles.sosButton}>
          <Text style={styles.sosText}>GỬI TÍN HIỆU SOS</Text>
        </TouchableOpacity>

        <View style={styles.steps}>
          <Text style={styles.stepsTitle}>Quy trình xử lý:</Text>
          <Text style={styles.step}>1. App chia sẻ vị trí trực tiếp (ẩn thông tin nhạy cảm).</Text>
          <Text style={styles.step}>2. Đội cứu hộ xác nhận và liên hệ với bạn.</Text>
          <Text style={styles.step}>3. Vị trí cập nhật liên tục cho đến khi cứu hộ hoàn thành.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  container: {
    flex: 1,
    padding: 24,
    gap: 20,
  },
  alertBox: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 18,
  },
  alertTitle: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  alertText: {
    color: '#cbd5f5',
    lineHeight: 20,
  },
  sosButton: {
    backgroundColor: '#ef4444',
    borderRadius: 999,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: '#ef4444',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 8,
  },
  sosText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },
  steps: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 18,
    gap: 8,
  },
  stepsTitle: {
    color: '#f8fafc',
    fontWeight: '600',
    marginBottom: 4,
  },
  step: {
    color: '#cbd5f5',
  },
});

export default SOSScreen;
