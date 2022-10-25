import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';


export default function AppFooter(props: { currentDate: number, AppVersion: string }) {
    return (
        <Grid container justifyContent="center">
            <b style={{color:"grey"}}>Varden Real Estate &nbsp;</b>
            <Typography variant="body1" color="grey">
                {'Copyright © '}
                {props.currentDate}
                &nbsp;&nbsp;
            </Typography>
            {props.AppVersion &&
                <Typography variant="body1" color="grey">
                    {`  Version ${props.AppVersion}`}
                    {' '}
                </Typography>}
        </Grid>
    );
}