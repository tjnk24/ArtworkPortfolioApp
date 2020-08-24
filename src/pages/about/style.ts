import styled from 'styled-components';

const AboutWrap = styled.div`
  height: 600px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 50%;
        margin: auto;
        margin-top: 50px;
        overflow: auto;
        text-align: center;
    }

    h1 {
        margin-bottom: 25px;
        font-size: 30px;
    }

    p {
        font-size: 18px;
    }
`;

export default AboutWrap;
