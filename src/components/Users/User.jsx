import React from "react";
import userPhoto from '../../assets/images/user.jpg'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
      },
    cardMedia: {
        paddingTop: "56.25%"
    },
    cardContent: {
        flexGrow: 1
    },
    cardGreed: {
        marginTop: theme.spacing(4)
    }
}))

const User = (props) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card >
                <CardMedia className={classes.cardMedia}
                    component={Link} to={'/profile/' + props.user.id}
                    image={props.user.photos.large != null ? props.user.photos.large
                        : userPhoto}>
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <Typography variant="subtitle2" gutterBottom>
                        {props.user.name}
                    </Typography>
                    <Typography>
                        Status: {props.user.status? props.user.status : "No status"}
                    </Typography>
                </CardContent>
                <CardActions>
                    {props.user.followed ?
                        <Button size="small" variant="contained" color="secondary" disabled={props.followingInProgress
                            .some(id => id === props.user.id)} onClick={() => {
                                props.unfollow(props.user.id)
                            }} >Unfollow</Button>
                        : <Button size="small" variant="contained" color="primary" disabled={props.followingInProgress
                            .some(id => id === props.user.id)} onClick={() => {
                                props.follow(props.user.id)
                            }} >Follow</Button>}
                </CardActions>
            </Card>
        </Grid>
    )
}






export default User;