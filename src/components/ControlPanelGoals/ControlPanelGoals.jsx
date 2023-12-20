import {
  Container,
  Description,
  IconButton,
  // Img,
  // ImgArrowDown,
  // ImgArrowRight,
  ImgBox,
  SelectPanel,
  StyledArrowDown,
  StyledArrowRight,
  Title,
} from './ControlPanelGoals.styled';

import { ReactComponent as LoseFatMen } from '../../Emoji/LoseFatMen.svg';

const ControlPanelGoals = () => {
  return (
    <Container>
      <ImgBox>
        <LoseFatMen />
      </ImgBox>
      <SelectPanel>
        <Title>Goal</Title>
        <Description>
          Lose fat
          <IconButton>
            {/* <ImgArrowDown
              src="/src/components/ControlPanelGoals/Img/arrow-down-min.svg"
              alt="Arrow bown"
            />
            <ImgArrowRight
              src="/src/components/ControlPanelGoals/Img/arrow-right-min.svg"
              alt="Arrow right"
            /> */}

            <StyledArrowDown>
              <use href="/src/Sprites/icons/symbol-defs.svg#icon-arrow-down"></use>
            </StyledArrowDown>
            <StyledArrowRight>
              <use href="/src/Sprites/icons/symbol-defs.svg#icon-arrow-right-2"></use>
            </StyledArrowRight>
          </IconButton>
        </Description>
      </SelectPanel>
    </Container>
  );
};

export default ControlPanelGoals;
