import styled from "@emotion/styled";

const LoaderContainer = styled.div`
margin-left:15rem;
margin-right:19rem;
margin-top:12rem;
display: flex;
justify-content:center;
align-items: center;

&>div{
  display: flex;
  align-items: center;

  span {
  display: inline-block;
  width: 0.175rem;
  height: 1.25rem;
  background-color: #dfdfdf;
  border-radius: 0.75rem;
  animation: scale-up4 1s linear infinite;
}

span:nth-child(2) {
  height: 2.25rem;
  margin: 0 0.3rem;
  animation-delay: .3s;
}

span:nth-child(3) {
  animation-delay: .6s;
}
}

@keyframes scale-up4 {
  20% {
    background-color: #7360DF;
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
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </LoaderContainer>
  )
}

export default Loader