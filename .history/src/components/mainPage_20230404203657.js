import React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Paper} from '@mui/material';
import bg from '../../assets/background.jpeg'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "#1b5e20",
    boxShadow: 'none',
    border: 0
  }));

class Wrapper extends React.Component {
    render() {
        return (
            <Stack   
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            >
                <Item style={{width: "100%", color: "white", paddingBottom: "3%", backgroundImage: `url(${bg})`}}>
                    <h1>URL DETECTOR</h1>
                </Item>
                <Item>
                </Item>
                {this.props.wrapped}
            </Stack>
        );
    }
}

export {MainPageComponent };