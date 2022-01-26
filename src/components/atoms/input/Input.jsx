import styled from "styled-components";

export const Input = (props) => {
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder}></SInput>;
};

const SInput = styled.input`
  padding: 6px 24px;
  border-radius: 9999px;
`;
