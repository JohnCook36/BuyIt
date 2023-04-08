import React from 'react';
import {useDefaultPage} from "./useDefaultPage";
import {ButtonContainer, Container, Wrapper} from './index.styles';
import {Button, Typography} from "antd";

const {Text, Title} = Typography

export function DefaultPage() {

   const {
       handleToGoSignIn,
       handleToGoSignUp
   } = useDefaultPage()

    return (
        <Wrapper>
            <Container>
                <Title  style={{textAlign: "center"}}>ByIt</Title>
                <Text type="secondary">
                    Небольшой помощник для управления списком покупок.
                </Text>
                <ButtonContainer>
                    <Button type='primary' onClick={handleToGoSignIn}>Вход</Button>
                    <Button onClick={handleToGoSignUp}>Регистрация</Button>
                </ButtonContainer>
            </Container>
        </Wrapper>
    );
}