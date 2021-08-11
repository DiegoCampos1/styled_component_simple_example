import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 700;
  font-size: 29px;
  line-height: 35px;
  text-align: center;
  color: ${(props) => (props.primary ? '#666' : 'red')};
`;

export const BannerContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 550px;
  margin: 0;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.color ? props.color : '#939')};
  border-radius: 28px;
  border: 1px solid #666;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '17px')};
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #666;
  &:hover {
    background-color: #000;
  }
`;

export const FlexContainer = styled.div`
  margin-top: 10px;
  display: flex;
  place-content: center;
  flex-direction: ${(props) => props.column ? 'column' : 'row'};
  gap: ${(props) => props.column ? '10px' : '80px'};
`;
