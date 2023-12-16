import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-primary-black-2);
  min-width: 320px;
  height: 744px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    min-width: 834px;
    height: 1194px;
  }

  @media (min-width: 1024px) {
    max-width: 1440px;
    height: 800px;
    flex-direction: row;
    gap: 104px;
  }
`;

export const Img = styled.img`
  display: flex;
  width: 300px;
  height: 290px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 24px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    display: flex;
    width: 380px;
    height: 368px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin-top: 40px;
    margin-bottom: 60px;
  }

  @media (min-width: 1024px) {
    display: flex;
    width: 592px;
    height: 574px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin-left: 140px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 404px;
    align-items: center;
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  padding-bottom: 16px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 36px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

export const Description = styled.p`
  color: var(--color-primary-grey);
  padding-bottom: 24px;
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: center;
    font-size: 20px; //22 має бути
    font-weight: 400;
    line-height: 1.45; /* 145.455% */
  }

  @media (min-width: 1024px) {
    text-align: start;
    flex-direction: row;
    font-size: 22px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    width: 360px;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    display: flex;
    width: 192px;
    flex-direction: column;
  }
`;

export const BtnNext = styled.button`
  width: 100%;
  color: var(--color-primary-black-2);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border-radius: 12px;
  background: var(--color-primary-green-lite);
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: none;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 360px;
  }

  @media (min-width: 1024px) {
    width: 192px;
  }
`;

export const BtnBack = styled.button`
  width: 100%;
  color: var(--color-primary-grey);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  margin: 0; 
  display: block;

  @media (min-width: 768px) {
    width: 192px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    width: 192px;
    margin: 0; 
    display: flex;
    justify-content: center;
  }
`;

export const RadioItem = styled.li`
  display: flex;
  gap: 8px;
`;

export const CustomRadio = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  opacity: 0;
`;

export const Label = styled.label`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  position: relative;
  padding-left: 16px;
  cursor: pointer;
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 0;
    width: 16px;
    height: 16px;
    border: 1px solid #b6b6b6;
    background: #0f0f0f;
    border-radius: 50%;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #e3ffa8;
    border-radius: 50%;
    opacity: 0;
    transition: 0.2s ease-in;
  }

  input[type='radio']:checked + &::after {
    opacity: 1;
  }
`;
