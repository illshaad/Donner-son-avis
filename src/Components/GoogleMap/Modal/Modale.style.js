import styled, { css, keyframes } from "styled-components";

const gradualAppearance = keyframes`
  from { opacity: 0.4;}
  to {opacity: 1;}
    `;
export const TransparentBg = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  max-width: 100vw;
  height: 100vh;
  background: rgba(30, 29, 29, 0.75);
  ${(props) =>
    props.showUp
      ? css`
          animation: ${gradualAppearance} 0.4s linear;
        `
      : css`
          animation: none;
        `};
`;
export const Container = styled.div`
  color: ${(props) => props.theme.palette.black};
  padding: 39px 24px 54px 50px;
  position: absolute;
  width: 611px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(30, 29, 29, 0.2);
  border-radius: 15px;
  p {
    margin-top: 1.1875rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;
export const H3 = styled.h3`
  font-weight: 500;
  font-size: 1.375rem;
  line-height: 1rem;
`;
