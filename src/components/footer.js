import React from "react"

import { Link } from "gatsby"
import styled from "styled-components"

const SectionFooter = styled.footer`
  background-color: var(--black);
  min-height: 3rem;
  padding: 1rem;
`;

const SectionFooterContainer = styled.div`
  align-items: center;
  display: grid;
  justify-content: center;
  margin: 0 auto;
  max-width: 1080px;

  h6 {
    color: var(--white);
    margin-bottom: 0;
  }
`;

const Footer = () => (
  <SectionFooter>
    <SectionFooterContainer>
      <h6>
        © {new Date().getFullYear()}, Mark Lopresto. All Rights Reserved
      </h6>
    </SectionFooterContainer>
  </SectionFooter>
)

export default Footer