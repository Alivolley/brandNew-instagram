import React, { useContext, useState } from "react";
import styled from "styled-components";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import useEditPassword from "../../api/setting/useEditPassword";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const ChangePassword = () => {
   const { templateTheme } = useContext(GeneralInfoContext);
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
   const [editPasswordRequest, editReqloading] = useEditPassword();
   const [showPassword, setShowPassword] = useState(false);

   const [oldPassValue, setOldPassValue] = useState("");
   const [newPassValue, setNewPassValue] = useState("");
   const [confirmValue, setConfirmValue] = useState("");

   const changePassHandler = (e) => {
      e.preventDefault();
      if (oldPassValue && newPassValue && confirmValue) {
         if (newPassValue === confirmValue) {
            const newInfo = {
               old_password: oldPassValue,
               password1: newPassValue,
               password2: confirmValue,
            };

            editPasswordRequest(newInfo);
         } else {
            toast.error("Password and confrim must be the same", {
               autoClose: 5000,
               theme: "colored",
            });
         }
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
               <Input type={showPassword ? "text" : "password"} value={oldPassValue} onChange={(e) => setOldPassValue(e.target.value)} />
               <VisibleIcon onClick={() => setShowPassword((prev) => !prev)} templateTheme={templateTheme}>
                  {showPassword ? <VisibilityOffIcon fontSize="inherit" /> : <VisibilityIcon fontSize="inherit" />}
               </VisibleIcon>
            </Item>

            <Item>
               <Label>New password</Label>
               <Input type={showPassword ? "text" : "password"} value={newPassValue} onChange={(e) => setNewPassValue(e.target.value)} />
               <VisibleIcon onClick={() => setShowPassword((prev) => !prev)} templateTheme={templateTheme}>
                  {showPassword ? <VisibilityOffIcon fontSize="inherit" /> : <VisibilityIcon fontSize="inherit" />}
               </VisibleIcon>
            </Item>

            <Item>
               <Label>Confirm password</Label>
               <Input type={showPassword ? "text" : "password"} value={confirmValue} onChange={(e) => setConfirmValue(e.target.value)} />
               <VisibleIcon onClick={() => setShowPassword((prev) => !prev)} templateTheme={templateTheme}>
                  {showPassword ? <VisibilityOffIcon fontSize="inherit" /> : <VisibilityIcon fontSize="inherit" />}
               </VisibleIcon>
            </Item>

            <SubmitBtn loading={editReqloading} variant="contained" size={isMatch ? "small" : "large"} type="submit" color="info">
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
   position: relative;
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

const VisibleIcon = styled.div`
   position: absolute;
   right: 0.4rem;
   top: 0.6rem;
   cursor: pointer;
   font-size: 1.6rem;
   color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
`;
