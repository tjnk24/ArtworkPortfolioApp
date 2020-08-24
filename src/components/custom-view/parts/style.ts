import styled from 'styled-components';

// $mobile-large: 640px;

const SideBlockView = styled.div`
  display: flex;
  max-width: 300px;
  background-color: #e9e9e9;
  overflow: auto;
  scrollbar-width: none; /* Firefox 64 */
  -ms-overflow-style: none; /* IE 11 */

  &::-webkit-scrollbar {
      display: none;
  }

  @media(max-width: $mobile-large) {
      width: 100%;
      max-width: 100%;
      max-height: 20vh;
      padding: 0;
  }

  div {
      font-size: 16px;
      margin: 0 20px;
      flex-grow: 1;
      height: 0;

      @media(max-width: $mobile-large) {
          width: 0;
          height: auto;
      }

      b, p {
          margin: 20px 0;
      }

      b {
          display: block;
          font-size: 18px;

          @media(max-width: $mobile-large) {
              text-align: center;
          }
      }
  }
`;

export default SideBlockView;
