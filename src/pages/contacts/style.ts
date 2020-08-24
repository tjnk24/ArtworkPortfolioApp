import styled from 'styled-components';

const ContactsWrap = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
      width: 50%;
      min-width: 240px;
      margin-top: 100px;
      overflow: auto;
      text-align: center;
  }

  h1 {
      font-size: 30px;
  }

  p {
      margin-top: 30px;
      font-size: 20px;
  }
`;

export default ContactsWrap;
