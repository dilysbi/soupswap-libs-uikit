/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Menu } from "antd";
import "antd/dist/antd.css";

import { PanelProps, PushedProps } from "../types";
import { MenuEntryNav } from "./MenuEntry";
import MenuLink from "./MenuLink";
import Attach from "./Attach";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const StyledBody = styled.div`
  color: black;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-left: 25px;

  ul {
    border-bottom: unset;
    background: transparent;
  }

  li.ant-menu-item {
    margin: 0 !important;
    position: relative;

    &:hover {
      border-bottom: 2px solid #f9ae2e !important;
    }
  }

  li.ant-menu-item-selected {
    border-bottom: 2px solid #f9ae2e !important;
  }

  .ant-menu-submenu-title {
    color: #f9ae2e;
  }
`;

const BlockIcon = styled.div`
  position: absolute;
  top: -10px;
  right: 0px;
  font-size: 10px;
  color: #fc0909;
`;

const ContentNav: React.FC<Props> = ({ links }) => {
  const location = useLocation();

  const [current, setCurrent] = useState(() => "1");

  function changeMenu(value: number) {
    setCurrent(value.toString());
  }

  return (
    <StyledBody>
      <Menu selectedKeys={[current]} defaultSelectedKeys={["1"]} mode="horizontal">
        {links.map((entry, key) =>
          entry.items ? (
            <Menu.SubMenu key={key} title={entry.label} onTitleClick={() => changeMenu(key)}>
              {entry.items.map((item, key1) => (
                <Menu.Item key={key1} onClick={() => changeMenu(key1)}>
                  <MenuEntryNav key={item.href} secondary isActive={item.href === location.pathname}>
                    <MenuLink href={item.href}>{item.label}</MenuLink>
                  </MenuEntryNav>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ) : (
            <Menu.Item key={key}>
              <BlockIcon>{entry.att && <Attach att={entry.att} />}</BlockIcon>
              <MenuEntryNav
                key={entry.href}
                secondary
                isActive={entry.href === location.pathname}
                onClick={() => changeMenu(key)}
              >
                <MenuLink href={entry.href}>{entry.label}</MenuLink>
              </MenuEntryNav>
            </Menu.Item>
          )
        )}
      </Menu>
    </StyledBody>
  );
};

export default ContentNav;
