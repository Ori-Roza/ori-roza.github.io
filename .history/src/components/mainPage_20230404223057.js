import React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Paper} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import profile from './static/profile.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import MediumSVG from './static/medium.svg'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    backgroundColor: 'transparent',
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
                <Item style={{width: "100%", paddingTop: "2%"}}>
                    <Box
                        component="img"
                        sx={{
                            width: "350px",
                            height: "320px",
                            borderRadius: "50%",
                        }}
                        src={profile}
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
                <Box sx={{ textAlign: 'center' }}>I've been expriencing with research, web development and architecture using Python, JS (React and vanilla), C, C++, JAVA in multiple system such as Windows, Linux, Android and IOS.</Box>
                </Typography>
                </Item>
                <Item>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center">
                    <IconButton style={{color: "#1b5e20"}} target="_blank" rel="noopener noreferrer" href="https://github.com/Ori-Roza">
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton style={{color: "#1b5e20"}} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ori-roza-37168413b/">
                        <LinkedInIcon/>
                    </IconButton>
                    <IconButton style={{color: "#1b5e20"}} href="mailto:ori75660@gmail.com">
                        <EmailIcon/>
                    </IconButton>
                    <IconButton style={{color: "#1b5e20"}} target="_blank" rel="noopener noreferrer" href="https://medium.com/@ori75660">
                    <Icon>
                        <img src={MediumSVG} height={25} width={25}/>
                    </Icon>
                    </IconButton>

                </Grid>

                </Item>
            </Stack>
        );
    }
}

export { MainPageComponent };