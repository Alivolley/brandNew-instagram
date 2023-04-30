import { LoadingButton } from '@mui/lab';
import { TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RegisterInstagramText from '../../assets/svgs/RegisterInstagramText';
import GeneralInfoContext from '../../contexts/GeneralInfoContext';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useLogin from '../../api/login/useLogin';

const Login = () => {
   const { templateTheme } = useContext(GeneralInfoContext);
   const [loginRequest, loading] = useLogin();

   const [showPassword, setShowPassword] = useState(false);

   const [emailValue, setEmailValue] = useState('');
   const [passwordValue, setPasswordValue] = useState('');

   const [emailError, setEmailError] = useState(false);
   const [passwordError, setPasswordError] = useState(false);

   const [emailTextError, setEmailTextError] = useState('');
   const [passwordTextError, setPasswordTextError] = useState('');

   const loginUpHandler = e => {
      e.preventDefault();
      if (!emailValue) {
         cleanErrors();
         setEmailError(true);
         setEmailTextError("Can't be empty");
      } else if (!passwordValue) {
         cleanErrors();
         setPasswordError(true);
         setPasswordTextError("Can't be empty");
      } else {
         cleanErrors();
         loginRequest(emailValue, passwordValue);
      }
   };

   const cleanErrors = () => {
      setEmailError(false);
      setPasswordError(false);
      setEmailTextError('');
      setPasswordTextError('');
   };

   return (
      <Container templateTheme={templateTheme}>
         <Wrapper>
            <Logo templateTheme={templateTheme}>
               <RegisterInstagramText />
            </Logo>

            <Form onSubmit={loginUpHandler}>
               <Item templateTheme={templateTheme}>
                  <Input
                     label="Email"
                     type="email"
                     variant="outlined"
                     helperText={emailTextError}
                     value={emailValue}
                     onChange={e => setEmailValue(e.target.value)}
                     error={emailError}
                  />
               </Item>

               <Item templateTheme={templateTheme}>
                  <Input
                     label="Password"
                     variant="outlined"
                     helperText={passwordTextError}
                     type={showPassword ? 'text' : 'password'}
                     value={passwordValue}
                     onChange={e => setPasswordValue(e.target.value)}
                     error={passwordError}
                  />
                  <VisibleIcon onClick={() => setShowPassword(prev => !prev)} templateTheme={templateTheme}>
                     {showPassword ? <VisibilityOffIcon fontSize="inherit" /> : <VisibilityIcon fontSize="inherit" />}
                  </VisibleIcon>
               </Item>

               <SubmitBtn loading={loading} variant="contained" size="large" type="submit" color="info">
                  Log in
               </SubmitBtn>
            </Form>

            <LoginText templateTheme={templateTheme}>
               {/* eslint-disable-next-line react/no-unescaped-entities */}
               Don't have an account?
               <GotoLogin to="/register">Sign up</GotoLogin>
            </LoginText>
         </Wrapper>
      </Container>
   );
};

export default Login;

const Container = styled.div`
   background-color: ${({ templateTheme }) => templateTheme};
   min-height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Wrapper = styled.div`
   border: 0.1rem solid var(--border-color);
   width: fit-content;
   min-width: 25rem;
   padding: 5rem;
   border-radius: 1rem;
   background-color: transparent;

   @media (max-width: 400px) {
      padding: 5rem 3rem;
   }
`;

const Logo = styled.div`
   display: flex;
   justify-content: center;

   svg {
      color: ${({ templateTheme }) => (templateTheme === 'white' ? 'black' : 'white')};
   }
`;

const Form = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 3.9rem;
   margin-top: 5rem;
`;

const Item = styled.div`
   position: relative;
   width: 100%;

   p {
      font-size: 1.3rem;
      position: absolute;
      bottom: -2.2rem;
   }

   input {
      background-color: ${({ templateTheme }) => (templateTheme === 'white' ? ' rgb(239, 239, 239)' : ' rgb(38, 38, 38)')};
      color: ${({ templateTheme }) => (templateTheme === 'white' ? 'rgb(38, 38, 38)' : 'rgb(239, 239, 239)')};
   }

   label {
      color: ${({ templateTheme }) => (templateTheme === 'white' ? 'rgb(38, 38, 38)' : 'rgb(239, 239, 239)')};
   }
`;

const Input = styled(TextField)`
   width: 100%;
   background-color: #fafafa;

   label {
      font-size: 1.4rem !important;
   }

   input {
      font-size: 1.3rem !important;
   }
`;

const VisibleIcon = styled.div`
   position: absolute;
   right: 0.7rem;
   top: 1.7rem;
   cursor: pointer;
   font-size: 1.6rem;
   color: ${({ templateTheme }) => (templateTheme === 'white' ? 'black' : 'white')};
`;

const SubmitBtn = styled(LoadingButton)`
   font-size: 1.5rem !important;
   text-transform: none !important;
   width: 100%;

   &:disabled {
      background-color: var(--border-color) !important;
   }
`;

const LoginText = styled.p`
   margin-top: 3rem;
   font-size: 1.5rem;
   text-align: center;
   color: ${({ templateTheme }) => (templateTheme === 'white' ? 'black' : 'white')};
`;

const GotoLogin = styled(Link)`
   text-decoration: none;
   color: var(--blueBtn-color);
   padding: 0 0.7rem;
   font-weight: 600;
`;
