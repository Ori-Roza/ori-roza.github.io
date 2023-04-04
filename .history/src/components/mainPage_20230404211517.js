import React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Paper} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import oval_profile from './static/oval_profile.png'

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
            spacing={2}
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
                <Typography component="div" style={{"width": "600px"}}>
                    <Box sx={{ textAlign: 'left', m: 1 }}><h2>How do we handle privacy?</h2></Box>
                    <Box sx={{ textAlign: 'left', m: 1 }}>
                </Typography>
                    <h1>Hi! I'm <b>Ori Roza</b>!</h1><br></br>
                    <p>{"I'm a software engineer from Tel Aviv."}</p>
                    <p>{"I've been expriencing with research, web development and architecture"}</p>
                    <p>{"using Python, JS (React & vanilla), C, C++, JAVA in multiple system such as Windows, Linux, Android and IOS"}</p>
                </Item>
            </Stack>
        );
    }
}

export { MainPageComponent };