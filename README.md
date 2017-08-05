# react-overlay-menu
An overlay side menu React component using CSS transitions.

# install

``` bash
yarn install or npm install
```

# usage

``` javascript
import React, { Component } from 'react';
import OverlayMenu from 'react-overlay-menu';
import MyMenu from './components/ui/MyMenu';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.toggleMenu}>Open menu</button>
        <OverlayMenu 
          open={this.state.isOpen} 
          onClose={this.toggleMenu}
        >
          <MyMenu />
        </OverlayMenu>
      </div>
    );
  }
}

export default Example;

```

# options

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `open` | `bool` | false | Is the menu opened or not. |
| `right` | `bool` | false | Fix the overlay menu to the right. |
| `onClose` | `func` | undefined | Callback function to close it. |
