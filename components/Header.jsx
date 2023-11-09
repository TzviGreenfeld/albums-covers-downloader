import * as React from 'react';
import { useRouter } from 'next/router';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import ImageIcon from '@mui/icons-material/Image';
import SearchIcon from '@mui/icons-material/Search';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';

import { useChosenImages } from '../context/ChosenImagesContext';
import DownloadImagesAsZip from './DownloadImagesAsZip';




export default function Header() {
    const [chosenImages, setChosenImages] = useChosenImages();
    const router = useRouter();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const linkedIcon = (icon, link) => {

        return <Box
            sx={{ display: { xs: 'flex', md: 'flex' } }}
            onClick={() => router.push(link)}>
            <IconButton
                size="large"
                color="inherit"
            >
                {icon}
            </IconButton>
        </Box>;
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

    return (
        <Box sx={{ flexGrow: 1, position: 'sticky', top: 0, zIndex: 1000 }}>
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

                    {linkedIcon(<SearchIcon />, '/')}
                    <Box sx={{ flexGrow: 1 }} />

                    {linkedIcon(<ImageIcon />, '/download')}

                    {linkedIcon(<AutoAwesomeMosaicIcon />, '/collage')}

                    <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                            <DownloadImagesAsZip imageUrls={chosenImages.map(i => i.img)} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}
