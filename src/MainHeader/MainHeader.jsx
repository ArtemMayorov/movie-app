import React, { Component } from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import "./MainHeader.css";

export default class MainHeader extends Component {
  state = {
    selectedPage: "search",
  };

  handleSelect = (page) => {
    this.setState(() => ({ selectedPage: page.key }));
    this.props.getSelectedPage(page.key);
  };

  render() {
    const menuItems = [
      {
        key: "search",
        className: "menu-item",
        label: "search",
      },
      {
        key: "rated",
        className: "menu-item",
        label: "rated",
      },
    ];

    return (
      <Menu
        selectedKeys={[this.state.selectedPage]}
        inlineIndent={0}
        className="menu-container"
        mode="horizontal"
        onSelect={this.handleSelect}
        items={menuItems}
      />
    );
  }
}
