import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import ModalComponent from '../Modal';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [barcode, setBarcode] = useState('');
  const [scanning, setScanning] = useState(false); // Para controlar se a câmera está ativa

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const onBarcodeDetected = (barcodes) => {
    if (barcodes.length > 0) {
      setBarcode(barcodes[0].data);
      openModal();
      stopScanning(); // Pára de escanear depois de ler um código de barras
    }
  };

  const startScanning = () => {
    setScanning(true);
  };

  const stopScanning = () => {
    setScanning(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {scanning ? (
        <RNCamera
          style={{ flex: 1 }}
          type={RNCamera.Constants.Type.back}
          onBarCodeRead={onBarcodeDetected}
        />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button title="Iniciar Leitura" onPress={startScanning} />
        </View>
      )}
      <ModalComponent visible={modalVisible} onClose={closeModal}>
        <View style={{ backgroundColor: '#831616', padding: 20 }}>
          <Text>Código de Barras: {barcode}</Text>
        </View>
      </ModalComponent>
    </View>
  );
};

export default App;
