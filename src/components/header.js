import React from "react"

import { Link } from "gatsby"
import styled from "styled-components"

const SectionHeader = styled.section`
  background-color: #121421;
  padding: 3rem 1rem;
`;

const SectionHeaderContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template:
    "logo subhead1"
    "hline hline"
    ". subhead2";
    justify-content: space-between;
  margin: 0 auto;
  max-width: 1024px;

  @media only screen and (max-width: 940px) {
    grid-template:
    "logo ."
    "subhead1 subhead1"
    "hline hline"
    "subhead2 subhead2";
  }

  img {
    grid-area: logo;
    max-width: 100%;
    height: auto;
  }

  h1 {
    color: var(--white);
    font-size: 4rem;

    @media only screen and (max-width: 767px) {
      font-size: 3rem;
    }
    @media only screen and (max-width: 384px) {
      font-size: 2.5rem;
    }
    @media only screen and (max-width: 338px) {
      font-size: 2rem;
    }
  }

  h4 {
    color: #fefefe;
    line-height: 1.4;
    margin: 0;
    text-align: right;

    @media only screen and (max-width: 338px) {
      font-size: 0.875rem;
    }

    &:first-of-type {
      align-self: flex-end;
      grid-area: subhead1;
      margin-bottom: .5rem;
    }

    &:last-of-type {
      grid-area: subhead2;
      margin-top: .5rem;
    }
  }

  a {
    text-decoration: none;
  }

  .h-line {
    grid-area: hline;
    border: 2px solid #fefefe;
    height: 2px;
  }
`;

const Header = ({ siteTitle }) => (
  <SectionHeader>
    <SectionHeaderContainer>
        <Link to="/"><h1 className="header-white">Mark Lopresto</h1></Link>
        <h4>design[er] + develop[er] + deliver[er]</h4>
        <div className="h-line"></div>
        <h4>Cleveland OH + Beyond</h4>
    </SectionHeaderContainer>
  </SectionHeader>
)

export default Header
