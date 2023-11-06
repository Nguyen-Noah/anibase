import { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { auth, provider } from "../services/firebase";

const Login = (props) => {

  const [action, setAction] = useState("Sign up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleAuth = () => {
    /* pop up a Google sign up 
    -> promise a result and log it if successful 
    => if there's an error, alert it*/
    auth.signInWithPopup(provider).then((result) => {
      console.log(result)
    }).catch((error) => {
      alert(error.message);
    })
  };

  const handleInputChange = (field, event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });

    if (event.target.value) {
      event.target.classList.add("has-value");
    } else {
      event.target.classList.remove("has-value");
    }
  };

  return (
    <Container>
      <Content><BgImage /></Content>
      <Border>
        <Header>
          <Text>{action}</Text>
          <Underline></Underline>
        </Header>
        <Inputs>
          {action === "Login" ? <div></div> : 
          <Input>
            <img src={"/images/user_login.svg"} alt="username" />
            <input type="text" onChange={(event) => handleInputChange("name", event)} />
            <Placeholder>Name</Placeholder>
          </Input>}
          <Input>
            <img src={"/images/email.svg"} alt="email" />
            <input type="text" onChange={(event) => handleInputChange("email", event)} />
            <Placeholder>Email</Placeholder>
          </Input>
          <Input>
            <img src={"/images/password.svg"} alt="password" />
            <input type="password" onChange={(event) => handleInputChange("password", event)} />
            <Placeholder>Password</Placeholder>
          </Input>
        </Inputs>
        {action === "Sign up" ? <div></div> : 
        <ForgotPassword>
          <span>Forgot Password?</span>
        </ForgotPassword>}
        <SubmitContainer>
          <Submit gray={action === "Login"} onClick={() => {setAction("Sign up")}}>Sign Up</Submit>
          <Submit gray={action === "Sign up"} onClick={() => {setAction("Login")}}>Login</Submit>
        </SubmitContainer>
        <AuthContainer onClick={handleAuth}>
          <img src={"/images/google.svg"} alt="google" />
          <GoogleAuth>
            {action} with Google
          </GoogleAuth>
        </AuthContainer>
      </Border>
    </Container>
  );
};

const GlobalStyles = createGlobalStyle`
* {
  border: 1px solid red;
}
`;

const Border = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 200px;
  border-radius: 20px;
  background: #fff;
  position: absolute;
  padding-bottom: 30px;
  width: 600px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
`;

const Text = styled.div`
  color: #1C305C;
  font-size: 48px;
  font-weight: 700;
`;

const Underline = styled.div`
  width: 61px;
  height: 6px;
  background: #1C305C;
  border-radius: 9px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  width: 100%;
  margin-top: 30px;
`;

const Inputs = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 480px;
  height: 80px;
  background: #EAEAEA;
  border-radius: 6px;

  img {
    margin: 0px 30px;
  }

  input {
    height: 40px;
    width: 300px;
    background: transparent;
    border: none;
    color: #797979;
    font-size: 19px;
    border-bottom: 2px solid #1C305C;
    border-radius: 0px;
    padding: 10px;
    outline: none;
    min-width: 40vmin;
  }

  input:focus {
    border-bottom: 2px solid #1C305C;
  }

  .has-value + span,
  input:focus ~ span {
    transform: translateX(-2px) translateY(-20px);
    font-size: 12px;
  }
`;

const Placeholder = styled.span`
  position: absolute;
  margin-left: 94px;
  font-size: 19px;
  color: #797979;
  padding: 10px;
  display: inline-block;
  font-weight: 300;
  transition: 0.4s;
  pointer-events: none;
`;

const ForgotPassword = styled.div`
  padding-right: 320px;
  margin-top: 27px;
  color: #1C305C;
  font-size: 18px;
  
  span {
    cursor: pointer;
  }
`;

const SubmitContainer = styled.div`
  display: flex;
  gap: 30px;
  margin: 40px auto;
`;

const Submit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 59px;
  color: #fff;
  background: ${props => (props.gray ? "#EAEAEA" : "#1C305C")};
  color: ${props => (props.gray ? "#676767" : "#fff")};
  border-radius: 50px;
  font-size: 19px;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
`;

const AuthContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 5px auto;
  cursor: pointer;
  padding: 10px 140px;
  border-style: solid;
  transition: 0.3s;
  border-radius: 10px;

  &:hover {
    border-radius: 30px;
  }
`;

const GoogleAuth = styled.a`
  display: flex;
  justify-content: center;
  color: #1C305C;
  font-size: 16px;
  font-weight: 500;
  margin-top: 3px;
`;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/messy-anime-room.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

export default Login