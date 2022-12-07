import React from 'react'
import './login.scss';
import { Grid,Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Login=({loginBtnHandler})=>{
    return(
      <div className='login'>
        <Grid>
            <Paper elevation={10} className='paper'>
                <Grid align='center'>
                     <Avatar className='avatar'><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <div>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                </div>
                <div>
                <FormControlLabel
                    control={<Checkbox name="checkedB" /> }
                    label="Remember me"
                 />
                <Button type='submit' variant="contained" className='signinBtn' fullWidth onClick={loginBtnHandler}>Sign in</Button>
                </div>
            </Paper>
        </Grid>
      </div>
    )
}

export default Login