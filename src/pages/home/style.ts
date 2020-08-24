import styled from 'styled-components';

const HomeWrap = styled.div`
  margin: 0 auto;
  max-width: 725px;
  padding: 25px;
  overflow: auto;

  img:hover {
      animation: light-up 0.1s ease-in forwards;
  }

  @keyframes light-up {
    60% { opacity: 0.8; }
    100% { opacity: 0.7; }
  }
`;

export default HomeWrap;
