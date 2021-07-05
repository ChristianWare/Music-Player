import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <NavContainer>
      <h1>Waves</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </NavContainer>
  );
};
export default Nav;

const NavContainer = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    border: 2px solid rgb(65, 65, 65);
    padding: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
        background: rgb(65, 65, 65);
        color: white;
  }
}
`;
