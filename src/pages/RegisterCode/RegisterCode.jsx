import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import userCodeRegister from "../../api/register/userCodeRegister";
import RegisterInstagramText from "../../assets/svgs/RegisterInstagramText";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";

const RegisterCode = () => {
   const { templateTheme } = useContext(GeneralInfoContext);
   const [registerCodeRequest, loading] = userCodeRegister();

   const [codeValue, setCodeValue] = useState("");
   const [codeValueError, setCodeValueError] = useState(false);

   const signUpHandler = (e) => {
      e.preventDefault();

      if (!codeValue) {
         setCodeValueError(true);
      } else {
         setCodeValueError(false);
         const newUser = {
            code: codeValue,
            user_registration_info: JSON.parse(sessionStorage.getItem("detail")),
         };

         registerCodeRequest(newUser);
      }
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
                  <Input label="Code" variant="outlined" value={codeValue} onChange={(e) => setCodeValue(e.target.value)} error={codeValueError} />
               </Item>

               <SubmitBtn loading={loading} variant="contained" size="large" type="submit" color="info">
                  Sign up
               </SubmitBtn>
            </Form>
         </Wrapper>
      </Container>
   );
};

export default RegisterCode;

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

const SubmitBtn = styled(LoadingButton)`
   font-size: 1.5rem !important;
   text-transform: none !important;
   width: 100%;

   &:disabled {
      background-color: var(--border-color) !important;
   }
`;
