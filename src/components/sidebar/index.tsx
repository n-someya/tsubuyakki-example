import { AccountBox, ViewTimeline } from "@mui/icons-material"
import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from "@mui/material"
import { API, graphqlOperation } from "aws-amplify"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CreateTsubuyakiInput } from "../../API"
import { createTsubuyaki } from "../../graphql/mutations"

export const SideBar = () => {
    const nav = useNavigate()
    const [tsubuyaki, setTsubuyaki] = useState("")
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTsubuyaki(event.target.value)
    }
    const postTsubuyaki = async () => {
        try {
            await API.graphql(
                graphqlOperation(
                    createTsubuyaki, {
                    input: {
                        year: "2022",
                        content: tsubuyaki,
                    } as CreateTsubuyakiInput
                }
                )
            )
            setTsubuyaki("")
        } catch (error) {
            console.log("create tsubuyaki error", error)
        }
    }
    return (
        <Box sx={{ overflow: 'auto' }}>
            <List>
                {[
                    { to: "/", primary: "Timeline", icon: <ViewTimeline /> },
                    { to: "/help", primary: "Help", icon: <AccountBox /> }
                ].map(({ to, primary, icon }) => (
                    <ListItem key={primary} disablePadding>
                        <ListItemButton
                            onClick={() => { nav(to) }}
                        >
                            <ListItemIcon>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={primary} />
                        </ListItemButton>
                    </ListItem>
                ))
                }
            </List>
            <Divider />
            <List>
                <ListItem key='tsubuyaki-input-field'>
                    <ListItemText primary={
                        <TextField
                            id="tsubuyakiPost"
                            label="Tsubuyakiを投稿する"
                            fullWidth
                            onChange={handleChange}
                            value={tsubuyaki}
                            multiline
                        />
                    } />
                </ListItem>
                <ListItem key='tsubuyaki-post-button'>
                    <ListItemText primary={
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={postTsubuyaki}>投稿する</Button>
                    } />
                </ListItem>
            </List>
        </Box>
    )
}