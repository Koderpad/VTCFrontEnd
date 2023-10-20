import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import { Label_welcome } from "../../pages/Login";
import { Link } from "react-router-dom";

function LoginForm() {
  function handleSubmit() {
    console.log("submit");
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email Id">
        <Input
          type="email"
          id="email"
          icon="/public/sms.png"
          placeholder="Email"
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          icon="/public/lock.png"
          placeholder="Password"
        />
      </FormRowVertical>

      <Label_forgot>
        <Link>Forgot Your Password?</Link>
      </Label_forgot>

      <ButtonContainer>
        <Button_Login>Login</Button_Login>
      </ButtonContainer>

      <Label_Regis>
        <p className="don-t-have-account">
          <span className="text-wrapper">Don’t have account? </span>
          <Link className="span">Register Now</Link>
        </p>
      </Label_Regis>
    </Form>
  );
}

const Label_Regis = styled.div`
  height: 300px;
  width: 500px;
  display: flex;
  position: fixed;
  white-space: nowrap;
  flex-direction: column-reverse;
  justify-content: space-around;
  margin-left: 70px;

  & .don-t-have-account {
    color: #000000;
    font-family: "Cabinet Grotesk-Medium", Helvetica;
    font-size: 14px;
    font-weight: 400;
    /* left: 0; */
    letter-spacing: 0;
    line-height: normal;
    /* top: 0; */
    width: 209px;
  }

  & .text-wrapper {
    font-weight: 500;
  }

  & .span {
    font-family: "Cabinet Grotesk-Bold", Helvetica;
    font-weight: 700;
  }
`;

const Label_forgot = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: row-reverse;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const Button_Login = styled.button`
  height: 48px;
  width: 125px;

  background-color: #009ee2;
  border: 1px solid;
  border-color: #ffffff26;
  border-radius: 5px;
  box-shadow: 0px 16px 32px #009ee21a;
  height: 48px;
  left: 0;
  position: relative;
  top: 0;
  width: 125px;
`;

export default LoginForm;
