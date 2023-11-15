import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from "./Styles";
import BackgroundImage from "../../assets/fundo_nubank1.png";
import SkillCircle from "../../assets/Nubank_Logo1.png";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={BackgroundImage} style={styles.backgroundImage} />
      <View style={styles.header}>
        <Image source={SkillCircle} style={styles.logo} />
        <View style={styles.countrySelectorContainer}>
          <Text style={styles.countrySelectorText}>Brasil</Text>
          <Icon name="keyboard-arrow-down" size={20} color="#fff" style={styles.arrowDownIcon} />
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.bottomText}>
          Um mundo financeiro sem complexidades
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textEntrarContainer}>
        <Text style={styles.textEntrar}>Entrar em minha conta</Text>
      </View>
    </View>
  );
};

export default Login;
