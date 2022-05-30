import './App.css';

function App() {
  return (
    <div className="App">
      <LightTheme>
      <MenuList style={{
    width: '250px'
  }} id="menu-list-grow" disablePadding={true}>
        <ListItem alignItems="flex-start" className="header">
            Menu header
        </ListItem>
        <MenuItem>
          <ListItemText primary="Default menu item" />
        </MenuItem>
        <MenuItem selected={true}>
          <ListItemText primary="Selected menu item" />
        </MenuItem>
        <MenuItem disabled={true} divider={true}>
          <ListItemText divider primary="Disabled menu item" />
        </MenuItem>
        <ListItem alignItems="flex-start" className="header">
            Menu header
        </ListItem>
        <MenuItem>
          <ListItemText primary="Default menu item" />
        </MenuItem>
        <MenuItem selected={true}>
          <ListItemText primary="Selected menu item" />
        </MenuItem>
        <MenuItem disabled={true}>
          <ListItemText primary="Disabled menu item" />
        </MenuItem>
      </MenuList>
    </LightTheme>
    </div>
  );
}

export default App;
