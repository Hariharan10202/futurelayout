import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: rgb(51, 51, 51);
  /* height: 64px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Open sans;
  font-size: 13px;
  padding: 0 40px;
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  font-weight: 600;
  text-decoration: none;
  font-size: 13px;
  padding: 20px;
  cursor: pointer;
  border-bottom: 2px solid #333;
  &.active {
    color: #42a5f5;
    border-bottom: 2px solid #42a5f5;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  font-family: Open sans;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  font-family: Open sans;
  font-size: 13px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #f7961d;
  font-size: 13px;
  padding: 10px 22px;
  color: #000000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font: Open Sans;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const Logo = styled.img`
  max-width: 135px;
  max-height: 45px;
  padding-right: 20px;
`;

export const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const CreateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px 16px;
  height: 36px;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600px;

  &:hover {
    background-color: white;
    color: #333;
  }
`;
