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
  padding: 0 25px;

  ul {
    border-bottom: unset;
  }

  li.ant-menu-item {
    margin: 0 !important;
    position: relative;
  }

  .ant-menu-submenu-title {
    color: #f9ae2e;
  }
`;

const ContentNav: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  const [current, setCurrent] = useState("");

  return (
    <StyledBody>
      <Menu selectedKeys={[current]} mode="horizontal">
        {links.map((entry, key) =>
          entry.items ? (
            <Menu.SubMenu key={key} title={entry.label}>
              {entry.items.map((item, key1) => (
                <Menu.Item key={key1}>
                  <MenuEntryNav key={item.href} secondary isActive={item.href === location.pathname}>
                    <MenuLink href={item.href}>{item.label}</MenuLink>
                  </MenuEntryNav>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ) : (
            <Menu.Item key={key}>
              {entry.att && <Attach att={entry.att} />}
              <MenuEntryNav key={entry.href} secondary isActive={entry.href === location.pathname}>
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
