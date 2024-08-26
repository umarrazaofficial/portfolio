import styled, { keyframes } from 'styled-components';
export const MyAnim = keyframes`
     0% {
        opacity: 0;
        transform: translateY(45px);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
      }

`;
export const WhatsappWarapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  position: fixed;
  bottom: 50px;
  right: 30px;
  z-index: 20;
  @media screen and (max-width: 576px) {
    right: 10px;
  }
`;
export const StyledChat = styled.div`
  position: relative;
  background: url(${({ bg }) => bg});
  background-position: center;
  background-size: 100%;
  background-color: #232b2e;
  background-repeat: no-repeat;
  width: 370px;
  height: 320px;
  border-radius: 30px;
  overflow: hidden;
  @media screen and (max-width: 576px) {
    width: 350px;
  }

  animation: ${MyAnim} 0.5s;
`;

export const WhatsappIcon = styled.div`
  cursor: pointer;
  .pulsating-circle {
    position: relative;

    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #25d366;
    border-radius: 50%;

    &:before {
      content: '';
      z-index: -1;
      position: absolute;
      display: block;
      width: 130px;
      height: 130px;
      box-sizing: border-box;
      border-radius: 50%;
      background-color: #25d366;
      animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    }
  }

  @keyframes pulse-ring {
    0% {
      transform: scale(0.33);
    }
    80%,
    100% {
      opacity: 0;
    }
  }
`;
export const WhatsAppHead = styled.div`
  position: relative;
  background: #075e54;
  height: 76px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  padding: 0 20px;
  .dp {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid #fff;
    &::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #25d366;
      border-radius: 50%;
      border: 1px solid #fff;
      right: -4px;
      bottom: 5px;
    }
    .image {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 40px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .text {
    color: #fff;

    h1 {
      font-size: 1rem;
      font-weight: 700;
    }
    p {
      font-size: 0.8rem;
      color: #f0f0f0;
    }
  }
  .cross {
    cursor: pointer;
    position: absolute;
    right: 15px;
  }
`;
export const WhatsAppBody = styled.div`
  max-width: 220px;
  padding: 30px 20px 20px;
  .loading {
    height: 57px;
    width: 215px;
    background-color: #056162;
    border-radius: 0px 15px 15px 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 10px;
    h4 {
      font-size: 13px;
      font-weight: 700;
      line-height: 18px;
      color: rgb(255 255 255 / 50%);
    }
    p {
      font-size: 14px;
      line-height: 19px;
      margin-top: 4px;
      color: rgb(241 241 242 / 90%);
      white-space: pre-wrap;
    }
  }
`;
export const WhatsAppMessage = styled.div`
  position: absolute;
  bottom: 0;
  padding: 5px 10px;
  background-color: #1e2428;
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  input {
    border: none;
    outline: none;
    height: 50px;
    width: 100%;
    border-radius: 25px;
    background-color: #33383b;
    color: #fff;
    padding-left: 20px;
    font-size: 14px;
    line-height: 19px;
  }

  .icon {
    cursor: pointer;
  }
`;
