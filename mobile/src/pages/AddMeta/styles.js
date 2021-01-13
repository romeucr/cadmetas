import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  background-color: #fff;
  padding: 5px;
`;

export const TitleInput = styled.Text`
   padding-top: 1px;
   color: #111;
   font-size: 18px;
`;

export const InputForm = styled.TextInput`
   background-color: #fff;
   width: 100%;
   border: 1px solid #171941;
   border-radius: 7px;
   padding: 10px;
   font-size: 16px;
   color: #222;
   margin-bottom: 15px;
`;

export const BtnSubmitForm = styled.TouchableOpacity`
   background-color: #171941;
   width: 100%;
   height: 45px;
   border: 1px solid;
   border-radius: 7px;
   align-items: center;
   justify-content: center;

`;

export const TxtSubmitForm = styled.Text`
   color: #fff;
   font-size: 22px;
`;

export const TitleRequired = styled.Text`
   padding-top: 1px;
   padding- bottom: 5px;
   color: #111;
   font-size: 12px;
`;

export const LoadingArea = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
`;