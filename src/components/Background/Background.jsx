import {
  ImageWrapper,
  UpCabbage,
  DownCabbage,
  Container,
} from '../../styles/Background.styled';

const CabbagesBg = () => {
  return (
    <Container>
      <ImageWrapper>
        <UpCabbage />
      </ImageWrapper>
      <DownCabbage />
    </Container>
  );
};

export default CabbagesBg;
