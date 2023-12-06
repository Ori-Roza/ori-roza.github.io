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

const BASE_COLOR = "#2B5E1B";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: 'transparent',
    color: BASE_COLOR,
    boxShadow: 'none',
    border: 0,
  }));

class MainPageComponent extends React.Component {
    render() {
        return (
            <Stack   
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            >
                <Item style={{width: "100%", padding: "1%", textAlign: 'center'}}>
                    <Box
                        component="img"
                        sx={{
                            width: "260px",
                            height: "260px",
                            borderRadius: "50%",
                        }}
                        src={profile}
                    />
                     <h1>Hi! I'm <b>Ori Roza</b></h1><br></br>
                </Item>
                <Item sx={{ maxWidth: 600 }}>
                <Typography
                    variant="body2"
                   component="p"
                   paragraph={true}
                   sx={{
                    whiteSpace: 'pre-line',
                    
                 }}
                 style={{ 
                    paddingLeft: '16%',
                    fontSize: "16px"
                }}
                >
                    I'm a senior software engineer from Tel Aviv, currently <a target="_blank" rel="noopener noreferrer" href="https://www.bluevine.com/" >@BlueVine</a>
                </Typography>
                <Typography
                    variant="body2"
                   component="p"
                   paragraph={true}
                   sx={{
                    whiteSpace: 'pre-line',
                 }}
                 style={{ 
                    paddingLeft: '16%',
                    fontSize: "16px"
                }}
                >
                I've been experiencing with security-research, web development, ML, and architecture using Python, JS (React and vanilla), C, C++, JAVA in multiple systems such as Windows, Linux, Android and IOS.
                </Typography>
                <Typography
                        variant="body2"
                       component="p"
                       paragraph={true}
                       sx={{
                        whiteSpace: 'pre-line',
                     }}
                     style={{
                        paddingLeft: '16%',
                        fontSize: "16px"
                    }}
                    >
                    Maintainer of: <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ori-Roza/drf-api-action" >drf-api-action</a>
                </Typography>

                <Typography
                    variant="body2"
                   component="p"
                   paragraph={true}
                   sx={{
                    whiteSpace: 'pre-line',
                 }}
                 style={{ 
                    paddingLeft: '16%',
                    fontSize: "16px"
                }}
                >
                    Flask • FastAPI • Django • SQLAlchemy • Pandas • Scipy • Sklearn • Pytorch
                </Typography>

                </Item>
                <Item>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center">
                    <IconButton style={{color: BASE_COLOR}} target="_blank" rel="noopener noreferrer" href="https://github.com/Ori-Roza">
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton style={{color: BASE_COLOR}} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ori-roza-37168413b/">
                        <LinkedInIcon/>
                    </IconButton>
                    <IconButton style={{color: BASE_COLOR}} href="mailto:ori75660@gmail.com">
                        <EmailIcon/>
                    </IconButton>
                    <IconButton style={{color: BASE_COLOR}} target="_blank" rel="noopener noreferrer" href="https://medium.com/@ori75660">
                    <Icon>
                        <img alt="" src={MediumSVG} height={25} width={25}/>
                    </Icon>
                    </IconButton>

                </Grid>

                </Item>
            </Stack>
        );
    }
}

export { MainPageComponent };