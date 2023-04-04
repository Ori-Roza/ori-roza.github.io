import React from 'react';
import Stack from '@mui/material/Stack';
import { Grid, TextField, Button} from '@mui/material';
import {register_user} from '../core/server_api'
import { Link } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';import Checkbox from '@mui/material/Checkbox';
import { Wrapper, Item } from '../core/wrapper'
import { withRouter } from '../core/with_router' 



class RegisterationComponent extends React.Component {
    