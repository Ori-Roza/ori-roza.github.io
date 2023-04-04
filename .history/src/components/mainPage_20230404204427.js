import React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Paper} from '@mui/material';
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
            spacing={1}
            >
                <Item style={{width: "100%"}}>
                <Box
                    component="img"
                    sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                />


                    <img src={`url(${oval_profile})`}/>
                </Item>
            </Stack>
        );
    }
}

export { MainPageComponent };