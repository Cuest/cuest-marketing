// https://loading.io/#_=_

import React from 'react'

const Ripple = (props) => {
  const { size = 100 } = props
  const inner = `
  <div class="lds-css ng-scope"><div style="width:100%;height:100%" class="lds-ripple"><div></div><div></div></div><style type="text/css">@keyframes lds-ripple {
    0% {
      top: ${96 * size * 0.005}px;
      left: ${96 * size * 0.005}px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: ${18 * size * 0.005}px;
      left: ${18 * size * 0.005}px;
      width: ${156 * size * 0.005}px;
      height: ${156 * size * 0.005}px;
      opacity: 0;
    }
  }
  @-webkit-keyframes lds-ripple {
    0% {
      top: ${96 * size * 0.005}px;
      left: ${96 * size * 0.005}px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: ${18 * size * 0.005}px;
      left: ${18 * size * 0.005}px;
      width: ${156 * size * 0.005}px;
      height: ${156 * size * 0.005}px;
      opacity: 0;
    }
  }
  .lds-ripple {
    position: relative;
  }
  .lds-ripple div {
    box-sizing: content-box;
    position: absolute;
    border-width: ${4 * size * 0.005}px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    -webkit-animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(1) {
    border-color: #ffffff;
  }
  .lds-ripple div:nth-child(2) {
    border-color: #ffffff;
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
  }
  .lds-ripple {
    width: ${200 * size * 0.005}px !important;
    height: ${200 * size * 0.005}px !important;
    -webkit-transform: translate(-${100 * size * 0.005}px, -${100 * size * 0.005}px) scale(1) translate(${100 * size * 0.005}px, ${100 * size * 0.005}px);
    transform: translate(-${100 * size * 0.005}px, -${100 * size * 0.005}px) scale(1) translate(${100 * size * 0.005}px, ${100 * size * 0.005}px);
  }
  </style></div>`

  return <div dangerouslySetInnerHTML={{__html: inner}} />
}

export default Ripple
