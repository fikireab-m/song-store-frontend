import styled from "@emotion/styled"
import React from "react"

const LoaderContainer = styled.div`

  display: flex;
  align-items: center;

span {
  display: inline-block;
  width: 3px;
  height: 20px;
  background-color: rgba(255, 255, 255, .5);
  border-radius: 10px;
  animation: scale-up4 1s linear infinite;
}

span:nth-child(2) {
  height: 35px;
  margin: 0 5px;
  animation-delay: .25s;
}

span:nth-child(3) {
  animation-delay: .5s;
}

@keyframes scale-up4 {
  20% {
    background-color: #ffff;
    transform: scaleY(1.5);
  }

  40% {
    transform: scaleY(1);
  }
}
`;
const Loader = () => {
    return (
        <LoaderContainer>
            <span></span>
            <span></span>
            <span></span>
        </LoaderContainer>
    )
}

export default Loader