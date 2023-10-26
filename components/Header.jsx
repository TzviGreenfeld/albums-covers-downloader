import * as React from 'react';
import { useRouter } from 'next/router';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ImageIcon from '@mui/icons-material/Image';
import MoreIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import { useChosenImages } from '../context/ChosenImagesContext';
import DownloadImagesAsZip from './DownloadImagesAsZip';

export default function Header() {
    const [chosenImages, setChosenImages] = useChosenImages();
    const router = useRouter();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const navigateToDownload = () => {
        router.push('/download');
    };

    const navigateHome = () => {
        router.push('/');
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <Badge badgeContent={chosenImages.length} color="error">
                        <ImageIcon />
                    </Badge>
                </IconButton>
                <p>images</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <DownloadImagesAsZip imageUrls={chosenImages.map(i => i.img)} />

                </IconButton>
                <p>download</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1, position: 'sticky', top: 0, zIndex: 1000 }}>
            {/* <AppBar position="static"> */}
            <AppBar style={{ position: 'sticky', top: 0 }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        onClick={navigateHome}
                        sx={{ display: { xs: 'flex', sm: 'block' }, cursor: 'pointer' }}
                    >
                        MILNER HAFRRAYIER
                    </Typography>
                    <Box
                        // sx={{ display: { xs: 'none', md: 'flex' } }}
                        sx={{ display: { xs: 'flex', md: 'flex' } }}
                        onClick={navigateHome}>
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                            <SearchIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box
                        // sx={{ display: { xs: 'none', md: 'flex' } }}
                        sx={{ display: { xs: 'flex', md: 'flex' } }}
                        onClick={navigateToDownload}>
                        <IconButton
                            size="large"
                            // aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={chosenImages.length} color="error">
                                <ImageIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                    {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}> */}
                    <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                            <DownloadImagesAsZip imageUrls={chosenImages.map(i => i.img)} />
                        </IconButton>
                    </Box>
                    {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}> */}
                    {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box> */}
                </Toolbar>
            </AppBar>
            {/* {renderMobileMenu} */}
            {renderMenu}
        </Box>
    );
}
