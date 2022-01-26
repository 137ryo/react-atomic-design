import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { Input } from "../atoms/input/Input";
import styled from "styled-components";
export const SearchInput = () => {
  return (
    <SContainer>
      <SButtonWrapper>
        <Input placeholder="検索条件を入力" />
        <SecondaryButton>検索</SecondaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
