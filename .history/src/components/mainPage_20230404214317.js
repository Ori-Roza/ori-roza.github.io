import React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Paper} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import oval_profile from './static/oval_profile.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "#1b5e20",
    boxShadow: 'none',
    border: 0
  }));

class MainPageComponent extends React.Component {
    render() {
        return (
            <Stack   
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            >
                <Item style={{width: "100%", paddingTop: "3%"}}>
                    <Box
                        component="img"
                        sx={{
                        height: 320,
                        width: 300,
                        }}
                        src={oval_profile}
                    />
                </Item>
                <Item>
                    <h1>Hi! I'm <b>Ori Roza</b>!</h1><br></br>
                </Item>
                <Item sx={{ maxWidth: 400 }}>
                <Typography>
                    <Box sx={{ textAlign: 'center', m: 1 }}>I'm a software engineer from Tel Aviv.</Box>
                </Typography>
                <Typography
                   component="p"
                   paragraph={true}
                   sx={{
                    whiteSpace: 'pre-line',
                 }}
                >
                <Box sx={{ textAlign: 'center' }}>I've been expriencing with research, web development and architecture using Python, JS (React and vanilla), C, C++, JAVA in multiple system such as Windows, Linux, Android and IOS</Box>
                </Typography>
                </Item>
                <Item>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center">
                    <IconButton style={{color: "#1b5e20"}}><GitHubIcon/></IconButton>
                    <IconButton style={{color: "#1b5e20"}}><GitHubIcon/></IconButton>
                </Grid>

                </Item>
            </Stack>
        );
    }
}

export { MainPageComponent };