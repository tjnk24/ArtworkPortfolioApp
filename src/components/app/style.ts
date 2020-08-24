import styled, { createGlobalStyle } from 'styled-components';

import RalewayRegular from './fonts/Raleway-Regular.ttf';
import RalewayBold from './fonts/Raleway-Bold.ttf';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'raleway';
        src: url(${RalewayRegular}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'raleway';
        src: url(${RalewayBold}) format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    * {
    margin: 0;
    padding: 0;
    }

    html, body {
        height: 100%;
        scrollbar-width: none; /* Firefox 64 */
    }

    body {
        background: #fafafa;
        overflow: auto;
        -ms-overflow-style: none; /* IE 11 */

        &::-webkit-scrollbar {
            display: none;
        }
    }

    div, h1, p {
        font-family: 'raleway', sans-serif;
    }

    ul {
        padding-inline-start: 0;
    }

    li {
        list-style-type: none;
    }

    a, button {
        cursor: pointer;
        outline: none;
    }
    input:focus, textarea:focus, select:focus, button:focus {
        outline: none!important;
    }
`;

export const MainWrap = styled.div`
    min-width: 320px;
`;
