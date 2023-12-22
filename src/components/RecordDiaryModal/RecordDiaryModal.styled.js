import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  padding: 16px 12px 40px 12px;
  background: var(--color-primary-black-2);
  border-radius: 12px;
`;

export const FatAndCalories = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 125% */
  margin-bottom: 24px;
`;

export const Img = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-primary-grey);
`;

export const ImgDescription = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 16px;
`;
export const Description = styled.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
`;

export const AddButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 64px;
`;

export const AddText = styled.p`
  color: var(--color-primary-green-lite);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;
export const Label = styled.label``;

export const InputProduct = styled.input`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  border: 1px solid var(--color-primary-green-lite);
  border-radius: 12px;
  background: transparent;
  color: var(--color-primary-grey);
  outline: none;

  @media (min-width: 834px) {
  }
`;

export const InputCarbonoh = styled.input`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  border: 1px solid var(--color-primary-green-lite);
  border-radius: 12px;
  background: transparent;
  color: var(--color-primary-grey);
  outline: none;

  @media (min-width: 834px) {
  }
`;

export const InputProtein = styled.input`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  border: 1px solid var(--color-primary-green-lite);
  border-radius: 12px;
  background: transparent;
  color: var(--color-primary-grey);
  outline: none;

  @media (min-width: 834px) {
  }
`;

export const InputFat = styled.input`
  width: 120px;
  height: 36px;
  padding: 8px 10px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  border: 1px solid var(--color-primary-green-lite);
  border-radius: 12px;
  background: transparent;
  color: var(--color-primary-grey);
  outline: none;

  @media (min-width: 834px) {
  }
`;

export const InputCalories = styled.input`
  width: 120px;
  height: 36px;
  padding: 8px 10px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  border: 1px solid var(--color-primary-green-lite);
  border-radius: 12px;
  background: transparent;
  color: var(--color-primary-grey);
  outline: none;

  @media (min-width: 834px) {
  }
`;

export const BtnConfirm = styled.button`
  width: 276px;
  height: 36px;
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
  margin-bottom: 16px;

  @media (min-width: 834px) {
  }

  @media (min-width: 1440px) {
  }
`;

export const BtnCancel = styled.button`
  width: 276px;
  margin: 0;
  color: var(--color-primary-grey);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  display: block;
`;
