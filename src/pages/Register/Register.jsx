import React, { useContext, useState } from "react";
import styled from "styled-components";
import RegisterInstagramText from "./../../assets/svgs/RegisterInstagramText";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import useRegister from "../../api/register/useRegister";

const Register = () => {
   const { templateTheme } = useContext(GeneralInfoContext);
   const [registerRequest, loading] = useRegister();

   const [showPassword, setShowPassword] = useState(false);

   const [usernameValue, setUsernameValue] = useState("");
   const [emailValue, setEmailValue] = useState("");
   const [passwordValue, setPasswordValue] = useState("");
   const [confirmValue, setConfirmValue] = useState("");

   const [usernameError, setUsernameError] = useState(false);
   const [emailError, setEmailError] = useState(false);
   const [passwordError, setPasswordError] = useState(false);
   const [confirmError, setConfirmError] = useState(false);

   const [usernameTextError, setUsernameTextError] = useState("");
   const [emailTextError, setEmailTextError] = useState("");
   const [passwordTextError, setPasswordTextError] = useState("");
   const [confirmTextError, setConfirmTextError] = useState("");

   const signUpHandler = (e) => {
      e.preventDefault();
      if (!usernameValue) {
         cleanErrors();
         setUsernameError(true);
         setUsernameTextError("Can't be empty");
      } else if (!emailValue) {
         cleanErrors();
         setEmailError(true);
         setEmailTextError("Can't be empty");
      } else if (!passwordValue) {
         cleanErrors();
         setPasswordError(true);
         setPasswordTextError("Can't be empty");
      } else if (!confirmValue) {
         cleanErrors();
         setConfirmError(true);
         setConfirmTextError("Can't be empty");
      } else if (usernameValue.length < 4) {
         cleanErrors();
         setUsernameError(true);
         setUsernameTextError("Should be more than 4 words");
      } else if (passwordValue.length < 8) {
         cleanErrors();
         setPasswordError(true);
         setPasswordTextError("Should be more than 8 words");
      } else if (passwordValue !== confirmValue) {
         cleanErrors();
         setPasswordError(true);
         setConfirmError(true);
         setPasswordTextError("Passwords are not matched");
         setConfirmTextError("Passwords are not matched");
      } else {
         cleanErrors();
         registerRequest(usernameValue, emailValue, passwordValue, confirmValue);
      }
   };

   const cleanErrors = () => {
      setUsernameError(false);
      setEmailError(false);
      setPasswordError(false);
      setConfirmError(false);
      setUsernameTextError("");
      setEmailTextError("");
      setPasswordTextError("");
      setConfirmTextError("");
   };

   return (
      <Container templateTheme={templateTheme}>
         <Wrapper>
            <Logo templateTheme={templateTheme}>
               <RegisterInstagramText />
            </Logo>
            <Title>
               Sign up to see photos and videos <br /> from your friends.
            </Title>

            <Form onSubmit={signUpHandler}>
               <Item templateTheme={templateTheme}>
                  <Input
                     label="Username"
                     variant="outlined"
                     helperText={usernameTextError}
                     value={usernameValue}
                     onChange={(e) => setUsernameValue(e.target.value)}
                     error={usernameError}
                  />
               </Item>
               <Item templateTheme={templateTheme}>
                  <Input
                     label="Email"
                     type="email"
                     variant="outlined"
                     helperText={emailTextError}
                     value={emailValue}
                     onChange={(e) => setEmailValue(e.target.value)}
                     error={emailError}
                  />
               </Item>
               <Item templateTheme={templateTheme}>
                  <Input
                     label="Password"
                     variant="outlined"
                     helperText={passwordTextError}
                     type={showPassword ? "text" : "password"}
                     value={passwordValue}
                     onChange={(e) => setPasswordValue(e.target.value)}
                     error={passwordError}
                  />
                  <VisibleIcon onClick={() => setShowPassword((prev) => !prev)} templateTheme={templateTheme}>
                     {showPassword ? <VisibilityOffIcon fontSize="inherit" /> : <VisibilityIcon fontSize="inherit" />}
                  </VisibleIcon>
               </Item>
               <Item templateTheme={templateTheme}>
                  <Input
                     label="Confirm password"
                     variant="outlined"
                     helperText={confirmTextError}
                     type={showPassword ? "text" : "password"}
                     value={confirmValue}
                     onChange={(e) => setConfirmValue(e.target.value)}
                     error={confirmError}
                  />
                  <VisibleIcon onClick={() => setShowPassword((prev) => !prev)} templateTheme={templateTheme}>
                     {showPassword ? <VisibilityOffIcon fontSize="inherit" /> : <VisibilityIcon fontSize="inherit" />}
                  </VisibleIcon>
               </Item>

               <SubmitBtn loading={loading} variant="contained" size="large" type="submit" color="info">
                  Sign up
               </SubmitBtn>
            </Form>
         </Wrapper>
      </Container>
   );
};

export default Register;

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
      color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
   }
`;

const Title = styled.h2`
   color: #8e8e8e;
   text-align: center;
   margin-top: 2rem;
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
      background-color: ${({ templateTheme }) => (templateTheme === "white" ? " rgb(239, 239, 239)" : " rgb(38, 38, 38)")};
      color: ${({ templateTheme }) => (templateTheme === "white" ? "rgb(38, 38, 38)" : "rgb(239, 239, 239)")};
   }

   label {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "rgb(38, 38, 38)" : "rgb(239, 239, 239)")};
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
   color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
`;

const SubmitBtn = styled(LoadingButton)`
   font-size: 1.5rem !important;
   text-transform: none !important;
   width: 100%;

   &:disabled {
      background-color: var(--border-color) !important;
   }
`;
