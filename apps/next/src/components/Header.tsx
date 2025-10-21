'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          書籍管理アプリ
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} href="/">
            ホーム
          </Button>
          <Button color="inherit" component={Link} href="/add">
            書籍追加
          </Button>
          <Button color="inherit" component={Link} href="/favorites">
            お気に入り
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
