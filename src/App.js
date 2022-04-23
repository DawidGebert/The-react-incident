import React, { useState, useEffect } from 'react';
import { Container,AppBar,Typography,IconButton,Drawer, Toolbar,Box,CssBaseline, Divider, List, ListItem, ListItemText, ListItemIcon} from '@mui/material';
import { useDispatch } from 'react-redux';
import {Routes, Route, useNavigate} from "react-router-dom"
import Home from './components/Home/Home';
import Passives from './components/Passives/Passives';
import Classes from './components/Classes/Classes';
import Spells from './components/Spells/Spells';
import Races from './components/Races/Races';
import { getPosts } from './actions/posts';
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const App = (props) => {
  const { window } = props;
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

  const navigate = useNavigate();

  const menu = (
    <div>
      <List className='navbar' sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} position="static" color="primary">
        <ListItem button onClick={() => {navigate("/"); handleDrawerToggle();}}>Home</ListItem>
        <ListItem button onClick={() => {navigate("/classes"); handleDrawerToggle();}}>Classes</ListItem>
        <ListItem button onClick={() => {navigate("/races"); handleDrawerToggle();}}>Races</ListItem>
        <ListItem button onClick={() => {navigate("/spells"); handleDrawerToggle();}}>Spells</ListItem>
        <ListItem button onClick={() => {navigate("/passives"); handleDrawerToggle();}}>Passives</ListItem>
      </List>
      </div>
  )
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				className='navbar'
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
						<MenuIcon className='white'/>
					</IconButton>
					<Typography className='white' variant="h5" noWrap component="div" onClick={() => navigate("/")}>
						RPGProject
					</Typography>
				</Toolbar>
			</AppBar>
			<Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="navigation panel">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
					}}
					PaperProps={{
						sx: {
							backgroundColor: "#e6e6e6",
						},
					}}
				>
					{menu}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
					}}
					PaperProps={{
						sx: {
							backgroundColor: "#e6e6e6",
						},
					}}
					open
				>
					{menu}
				</Drawer>
			</Box>
			<Box className='white' component="main" sx={{ flexGrow: 1, pt: 3, width: `calc(100% - ${drawerWidth}px)` }}>
				<Toolbar />
        <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/passives" element={<Passives/>}/>
          <Route path="/classes" element={<Classes/>}/>
          <Route path="/spells" element={<Spells/>} />
          <Route path="/races" element={<Races/>}/>
        </Routes>
			</Box>
		</Box>
    </Container>
  );
};

export default App;
