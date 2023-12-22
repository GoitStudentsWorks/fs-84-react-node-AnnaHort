import styled from 'styled-components';

export const RecommendedFoodContainer = styled.div`
  width: 676px;
  height: 230px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const RecommendedFoodFrame = styled.li`
  width: 328px;
  height: 86px;
  padding: 20px 108px 20px 24px;
  border-radius: 12px;
  background: var(--color-primary-black-2);
  display: block;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
`;

export const RecommendedFoodUnitName = styled.h2`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.45;
  text-align: center;
`;

export const RecommendedFoodName = styled.h3`
  color: var(--color-primary-white);
  /* Headline text/H3 */
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin-left: 20px;
`;

export const RecommendedFoodImg = styled.img`
  height: 46px;
  width: 46px;
`;

export const TextContainer = styled.div`
  display: flex;
`;

export const RecommendedFoodWeight = styled.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin-left: 20px;
`;

export const RecommendedFoodCalories = styled.p`
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  margin-left: 6px;
`;

export const RecomendedFoodButton = styled.a`
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  background-color: var(--color-primary-black);
  border: none;
  display: flex;
`;

export const ButtonPointer = styled.img`
  height: 16px;
  width: 16px;
  margin-left: 6px;
  margin-top: 3px;
  margin-bottom: 3px;
`;
