import {
    Container,
    Description,
    Title,
    TitleComponent,
    Wrapper,
    GoggleButton,
    ButtonTitle,
    InputComponents, Input, InputComponentEmail, InputComponentPassword, ButtonLog
} from "./index.styles";
import React, {useCallback, useState} from "react";
import {GlobalSuspense} from "../../components/GlobalSuspence";
import {Button} from "antd";


export function SignIn() {
    const [isShowPassword, setLookPassword] = useState('password')

    let togglePassword = useCallback(() => {
        isShowPassword === 'password' ? setLookPassword('text') : setLookPassword('password')
    },[isShowPassword])

    return (
        <Wrapper>
            <Container>
                <TitleComponent>
                    <Title> Вход в BuyIt</Title>
                </TitleComponent>
                <GoggleButton color='secondary'>
                    <ButtonTitle>Войти через Google</ButtonTitle>
                </GoggleButton>
                <Description>или</Description>

                <InputComponents>
                    <InputComponentEmail>
                        <Input
                            title="Почта"
                            placeholder="Введите почту"
                            type="email"
                            name="email"
                        />
                    </InputComponentEmail>

                    <InputComponentPassword>
                    <Input
                        placeholder="Введите пароль"
                        type={isShowPassword}
                        name="password"
                    />
                        <Button type='primary' onClick={togglePassword}>Show</Button>
                </InputComponentPassword>
                </InputComponents>
                <ButtonLog
                    color="primary"
                >
                    Войти
                </ButtonLog>
            </Container>
        </Wrapper>
    )
}

export default function SignInPage() {
    return (
        <GlobalSuspense>
            <SignIn />
        </GlobalSuspense>
    )
}