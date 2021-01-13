import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, Btn, BtnTxt} from './styles';

export default function Home() {
  const navigation = useNavigation();
  const Meta = () => {
    navigation.navigate('Meta');
  };

  const addMeta = () => {
    navigation.navigate('AddMeta');
  };

  return (
    <Container>
      <Btn onPress={Meta}>
        <BtnTxt>Listar</BtnTxt>
      </Btn>
      <Btn onPress={addMeta}>
        <BtnTxt>Cadastrar</BtnTxt>
      </Btn>
    </Container>
  );
}
