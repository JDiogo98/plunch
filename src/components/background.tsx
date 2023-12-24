import styled from "styled-components";

const BackgroundDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
  opacity: 0.22;
  background-image: url("https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRq1mQLx2tcZ4owspN_OxqcHZBIc0f1F6NfiqBYgGnwEkdc3tbUGKETWmBH2PNppLs-dJJAt92vs2I16Eno7ks");
`;

export const Backgroud = () => {
  return (
    <>
      <BackgroundDiv></BackgroundDiv>
    </>
  );
};
