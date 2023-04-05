import React, { useState } from "react";
import styled from "styled-components";
import NoProfilePhoto from "./../../assets/Images/NoProfilePhoto.jpg";
import { useContext } from "react";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import { LoadingButton } from "@mui/lab";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

const ChangeInfo = () => {
   const { templateTheme } = useContext(GeneralInfoContext);
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));

   const [nameValue, setNameValue] = useState("");
   const [usernameValue, setUsernameValue] = useState("");
   const [bioValue, setBioValue] = useState("");
   const [emailValue, setEmailValue] = useState("");
   const [phoneValue, setPhoneValue] = useState("");
   const [genderValue, setGenderValue] = useState("");
   const [suggestionValue, setSuggestionValue] = useState(false);

   const editProfileHandler = (e) => {
      e.preventDefault();

      console.log(nameValue, usernameValue, bioValue, emailValue, phoneValue, genderValue, suggestionValue);
   };

   return (
      <Wrapper templateTheme={templateTheme} isMatch={isMatch}>
         <Header>
            <Image src={NoProfilePhoto} />
            <HeaderTexts>
               <HeaderUsername isMatch={isMatch}>ali-azghandi</HeaderUsername>
               <Headerbutton isMatch={isMatch}>Change profile photo</Headerbutton>
            </HeaderTexts>
         </Header>

         <Form onSubmit={editProfileHandler}>
            <Item>
               <Label>Name</Label>
               <Input type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
            </Item>
            <Item>
               <Label>Username</Label>
               <Input type="text" value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)} />
            </Item>
            <Item>
               <Label>Website</Label>
               <Input type="text" value="Only avalible on phone" disabled />
            </Item>
            <Item>
               <Label>Bio</Label>
               <TextArea type="text" value={bioValue} onChange={(e) => setBioValue(e.target.value)} />
            </Item>
            <Item>
               <Label>Email</Label>
               <Input type="text" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
            </Item>
            <Item>
               <Label>Phone number</Label>
               <Input type="number" value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)} />
            </Item>
            <Item>
               <Label>Gender</Label>
               <Select isMatch={isMatch} templateTheme={templateTheme} value={genderValue} onChange={(e) => setGenderValue(e.target.value)}>
                  <Option>Male</Option>
                  <Option>Female</Option>
                  <Option>Custom</Option>
                  <Option>Prefer not to say</Option>
               </Select>
            </Item>
            <Item>
               <Label>Show as suggestion</Label>
               <InputCheckbox type="checkbox" value={suggestionValue} onChange={() => setSuggestionValue((prev) => !prev)} checked={suggestionValue} />
            </Item>

            <SubmitBtn loading={false} variant="contained" size={isMatch ? "small" : "large"} type="submit" color="info">
               Submit changes
            </SubmitBtn>
         </Form>
      </Wrapper>
   );
};
export default ChangeInfo;

const Wrapper = styled.div`
   background-color: ${({ templateTheme }) => templateTheme};
   display: flex;
   flex-direction: column;
   align-items: center;
   border: 0.1rem solid var(--border-color);
   padding: ${({ isMatch }) => (isMatch ? "0.5rem 2rem" : "2rem")};
   margin: 1.5rem;

   label,
   p {
      font-size: ${({ isMatch }) => (isMatch ? "1.4rem" : "1.6rem")};
      color: ${({ templateTheme }) => (templateTheme === "white" ? "rgb(38, 38, 38)" : "rgb(239, 239, 239)")};
   }

   input,
   textarea {
      width: ${({ isMatch }) => (isMatch ? "13rem" : "20rem")};
      background-color: ${({ templateTheme }) => (templateTheme === "white" ? " rgb(239, 239, 239)" : " rgb(38, 38, 38)")};
      color: ${({ templateTheme }) => (templateTheme === "white" ? "rgb(38, 38, 38)" : "rgb(239, 239, 239)")};
   }
`;

const Header = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1.5rem;
   margin: 3rem 0;
`;

const Image = styled.img`
   width: 5rem;
   height: 5rem;
   border-radius: 50%;
   border: 0.1rem solid var(--border-color);
`;

const HeaderTexts = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
`;

const HeaderUsername = styled.p`
   font-weight: 500;
`;

const Headerbutton = styled.button`
   border: none;
   background-color: transparent;
   cursor: pointer;
   color: var(--blueBtn-color);
   font-weight: 700;
   font-size: ${({ isMatch }) => (isMatch ? "1.3rem" : "1.6rem")};
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

const TextArea = styled.textarea`
   resize: vertical;
   padding: 0.5rem 1rem;
   height: 10rem;
   font-size: 1.4rem;
   border: 0.1rem solid black;
`;

const InputCheckbox = styled.input`
   width: 2.2rem !important;
   height: 2.2rem !important;
`;

const Select = styled.select`
   padding: 0.5rem 1rem;
   width: ${({ isMatch }) => (isMatch ? "15.5rem" : "22.4rem")};
   background-color: ${({ templateTheme }) => (templateTheme === "white" ? "rgb(239, 239, 239)" : "rgb(38, 38, 38)")};
   color: ${({ templateTheme }) => (templateTheme === "white" ? "rgb(38, 38, 38)" : "rgb(239, 239, 239)")};
`;

const Option = styled.option``;

const SubmitBtn = styled(LoadingButton)`
   font-size: 1.5rem !important;
   text-transform: none !important;
   margin: 1.5rem 0 3rem 0 !important;

   &:disabled {
      background-color: var(--border-color) !important;
   }
`;
