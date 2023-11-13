import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from "./styles3";

const App = () => {
  const [cpf, setCpf] = useState('');

  const formatCpf = (inputCpf) => {
    return inputCpf.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const handleCpfChange = (input) => {
    const formattedCpf = formatCpf(input);
    setCpf(formattedCpf);
  };

  return (
    <View style={styles.container}>
      <Icon
        name="close"
        size={30}
        color="#000"
        style={styles.closeIcon}
        onPress={() => {

        }}
      />
      <Text style={styles.title}>
        Boas-Vindas ao Nubank! Para começar, qual o seu CPF?
      </Text>
      <Text style={styles.subtitle}>
        Precisamos dele para dar início ao seu cadastro.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="000.000.000-00"
        value={cpf}
        onChangeText={handleCpfChange}
        keyboardType="default"
      />
    </View>
  );
};

export default App;