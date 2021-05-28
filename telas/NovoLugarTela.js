import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Cores from '../constantes/Cores';
import * as lugaresActions from '../store/lugares-actions';
const NovoLugarTela = (props) => {
  const dispatch = useDispatch();
  const [novoLugar, setNovoLugar] = useState('');
  const novoLugarAlterado = (texto) => {
    setNovoLugar(texto);
  }
  const adicionarLugar = () => {
    dispatch(lugaresActions.addLugar(novoLugar));
    props.navigation.goBack();
  }
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.titulo}>Novo lugar</Text>
        <TextInput 
          style={styles.textInput}
          placeholder={"Nome do lugar"}
          onChangeText={novoLugarAlterado}
          value={novoLugar}
        />
        <Button 
          title="Salvar Lugar"
          color={Cores.primary}
          onPress={adicionarLugar}
        />
      </View>
    </ScrollView>
  )
}

export default NovoLugarTela

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 40,
    paddingTop: 10
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 12
  },
  textInput: { 
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingVertical: 12,
    fontSize: 16,
    textAlign: 'center'
  }
})
