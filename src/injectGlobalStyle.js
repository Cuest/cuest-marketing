import { injectGlobal } from 'styled-components'

export default () => injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Rubik:400,700');

  html, *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: Rubik, sans-serif
  }

  body:before {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-image:
      linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
      url(/img/dark-pix-overlay.png),
      url(https://images.unsplash.com/photo-1523438097201-512ae7d59c44?w=1920);
    background-size:
      cover,
      auto,
      cover;
    background-position:
      left top,
      left top,
      center center;
    background-repeat:
      repeat,
      repeat,
      no-repeat;
    background-attachment: fixed;
    
  }
`
