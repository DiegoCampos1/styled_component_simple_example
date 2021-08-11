import { useState } from 'react';
import { Title, BannerContainer, Button, FlexContainer } from './AppStyled';
import hollowKnight from './hollowKnight.jpg';
import oriAndWill from './oriAndWill.jpg';

const App = () => {
  const [imageContainer, setImageContainer] = useState(hollowKnight);
  return (
    <div>
      <Title primary>Styled Components + React</Title>
      <BannerContainer image={imageContainer}>
        <Title>Styled Components + React</Title>
      </BannerContainer>
      <FlexContainer column>
        <Button
          fontSize={'30px'}
          color={'#334296'}
          onClick={() => setImageContainer(hollowKnight)}
        >
          Hollow Knight
        </Button>
        <Button onClick={() => setImageContainer(oriAndWill)}>Ori</Button>
      </FlexContainer>
    </div>
  );
};

export default App;
