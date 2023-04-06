import React, { useContext, useState } from "react";
import styled from "styled-components";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";

const ChangePassword = () => {
   const { templateTheme } = useContext(GeneralInfoContext);
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));

   const [oldPassValue, setOldPassValue] = useState("");
   const [newPassValue, setNewPassValue] = useState("");
   const [confirmValue, setConfirmValue] = useState("");

   const changePassHandler = (e) => {
      e.preventDefault();
      if (oldPassValue && newPassValue && confirmValue) {
         // const newInfo = {
         //    name: nameValue,
         //    website: "",
         //    bio: bioValue,
         //    gender: genderValue,
         //    open_suggestions: suggestionValue,
         // };
         // editInfoSettingRequest();
      } else {
         toast.warn("All password fileds must have value", {
            autoClose: 5000,
            theme: "colored",
         });
      }
   };

   return (
      <Wrapper templateTheme={templateTheme} isMatch={isMatch}>
         <Form onSubmit={changePassHandler}>
            <Item>
               <Label>Old password</Label>
               <Input type="text" value={oldPassValue} onChange={(e) => setOldPassValue(e.target.value)} />
            </Item>

            <Item>
               <Label>New password</Label>
               <Input type="text" value={newPassValue} onChange={(e) => setNewPassValue(e.target.value)} />
            </Item>

            <Item>
               <Label>Confirm password</Label>
               <Input type="text" value={confirmValue} onChange={(e) => setConfirmValue(e.target.value)} />
            </Item>

            <SubmitBtn loading={false} variant="contained" size={isMatch ? "small" : "large"} type="submit" color="info">
               Change password
            </SubmitBtn>
         </Form>
      </Wrapper>
   );
};

export default ChangePassword;

const Wrapper = styled.div`
   background-color: ${({ templateTheme }) => templateTheme};
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: ${({ isMatch }) => (isMatch ? "0.5rem 2rem" : "2rem")};
   margin: 1.5rem;

   label,
   p {
      font-size: ${({ isMatch }) => (isMatch ? "1.4rem" : "1.6rem")};
      color: ${({ templateTheme }) => (templateTheme === "white" ? "rgb(38, 38, 38)" : "rgb(239, 239, 239)")};
   }

   input {
      width: ${({ isMatch }) => (isMatch ? "13rem" : "20rem")};
      background-color: ${({ templateTheme }) => (templateTheme === "white" ? "white" : " rgb(38, 38, 38)")};
      color: ${({ templateTheme }) => (templateTheme === "white" ? "rgb(38, 38, 38)" : "white")};
   }
`;

const Form = styled.form`
   display: flex;
   flex-direction: column;
   align-items: end;
   margin-top: 2rem;
   gap: 3rem;
`;

const Item = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
`;

const Label = styled.label`
   font-weight: 600;
`;

const Input = styled.input`
   padding: 0.5rem 1rem;
   font-size: 1.4rem;
   border: 0.1rem solid black;
`;

const SubmitBtn = styled(LoadingButton)`
   font-size: 1.5rem !important;
   text-transform: none !important;
   margin: 1.5rem 0 3rem 0 !important;

   &:disabled {
      background-color: var(--border-color) !important;
   }
`;
