import styled from 'styled-components';

// $laptop: 1280px;
// $mobile-large: 640px;

export const ViewWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const View = styled.div`
  max-width: 90vw;
  display: flex;
  justify-content: center;

  @media(max-width: $mobile-large) {
    max-width: 90%;
    flex-direction: column;
    align-items: center;
  }

  img {
    max-width: 70%;
    max-height: 90vh;
    border-right: 14px solid #b3aa9f;

    @media(max-width: $laptop) {
        max-width: 60%;
    }

    @media(max-width: $mobile-large) {
        border: none;
        max-width: 100%;
        max-height: 75vh;
    }
  }
`;
