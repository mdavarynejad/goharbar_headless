import { WrapperCallToAction, Wrapper, TextBox, Caption, Title, Subtitle } from './styles';

export const CallToAction = ({
  caption,
  title,
  subtitle,
  button,
  sectionChildren,
  isFullViewport,
}) => (

  <WrapperCallToAction>
    <Wrapper isFullViewport={isFullViewport}>
      <TextBox>
        {caption && <Caption>{caption}</Caption>}
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {button}
      </TextBox>
      {sectionChildren}
    </Wrapper>
  </WrapperCallToAction>
  
);
