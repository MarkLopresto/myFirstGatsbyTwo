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
    "logo ."
    ". subhead1"
    "hline hline"
    ". subhead2";
    justify-content: space-between;
  margin: 0 auto;
  max-width: 1024px;

  img {
    grid-area: logo;
    max-width: 100%;
    height: auto;
  }

  h1 {
    color: #fefefe;
    font-size: 4rem;
  }

  h4 {
    color: #fefefe;
    margin: 0;
    &:first-of-type {
      grid-area: subhead1;
      margin-bottom: .5rem;
    }

    &:last-of-type {
      grid-area: subhead2;
      margin-top: .5rem;
      text-align: right;
    }
  }

  a {
    text-decoration: none;
  }

  .h-line {
    grid-area: hline;
    border: 2px solid #fefefe;
    height: 2px;
    /* max-width: 96vw; */
  }
`;

const Header = ({ siteTitle }) => (
  <SectionHeader>
    <SectionHeaderContainer>
        <Link to="/"><h1>Mark Lopresto</h1></Link>
        <h4>design[er] + develop[er] + deliver[er]</h4>
        <div className="h-line"></div>
        <h4>Cleveland OH + Beyond</h4>
    </SectionHeaderContainer>
  </SectionHeader>
)

export default Header
