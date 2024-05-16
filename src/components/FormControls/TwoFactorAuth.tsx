import React from 'react';
import styled from 'styled-components';

type TwoFactorAuthProps = {
  authCode: string;
  setAuthCode: (authCode: string) => void;
};

const TwoFactorAuth: React.FC<TwoFactorAuthProps> = ({
  authCode,
  setAuthCode,
}) => {
  return (
    <>
      <label htmlFor="auth-code">Enter authorization code:</label>
      <Wrapper>
        <Input
          id="auth-code"
          type="text"
          required={true}
          maxLength={6}
          value={authCode}
          onChange={(event) => setAuthCode(event.target.value)}
        />
        <SubmitBtn type="submit">Validate</SubmitBtn>
      </Wrapper>
    </>
  );
};

export default TwoFactorAuth;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0px 6px;
  border: 1px solid black;
  border-radius: 2px;
`;

const SubmitBtn = styled.button`
  width: 100%;
  background-color: white;
  border: 1px solid black;
  border-radius: 2px;
`;
