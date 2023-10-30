import styled, { css } from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  /* background-color: var(--color-grey-0); */
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  background-color: transparent;
  height: 54px;
  width: 364px;

  //icon
  padding-left: 40px; // Để tạo không gian cho icon
  /* background-image: url("path_to_your_icon"); */
  background-repeat: no-repeat;
  background-position: 10px center; // Điều chỉnh vị trí của icon

  ${(props) =>
    props.icon !== null &&
    css`
      background-image: url(${props.icon});
    `}
`;

export default Input;
