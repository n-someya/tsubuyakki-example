import { useAuthenticator } from "@aws-amplify/ui-react";
import { AppBar, Box, Button, Drawer, Toolbar, Typography } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet, RouteObject, useRoutes } from "react-router-dom";
import { SideBar } from "../components/sidebar";
import { Help } from "../features/help";
// import { Help } from "../features/help";
import Home from "../features/home";

const drawerWidth = '30%';

const Layout = () => {
    const { signOut } = useAuthenticator((context) => [context.user])
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >

                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Tsubuyakki-
                    </Typography>
                    <Button color="inherit" onClick={signOut}>Logout</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                open
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth, boxSizing: 'border-box'
                    }
                }}
            >
                {/* 高さ合わせ */}
                <Toolbar />
                {/* 高さ合わせ */}
                <SideBar />
            </Drawer>
            <Box sx={{ overflow: 'auto', width: '100%' }}>
                {/* 高さ合わせ */}
                <Toolbar />
                {/* 高さ合わせ */}
                <Outlet />
            </Box>
        </Box>
    )
}

export const AppRoute = () => {
    const routes: RouteObject[] = [
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: '/help',
                    element: <Help />
                }
            ]
        }
    ]
    const element = useRoutes(routes)
    return (
        <>{element}</>
    )
}