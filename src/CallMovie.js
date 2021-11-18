import { Counter } from './Counter';
import { useState } from 'react';
import Button from '@mui/material/Button';
import InfoButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import InfoIcon from '@mui/icons-material/Info';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function CallMovie({ mv, id, movies, setMovies }) {
    const [show, setShow] = useState(true)
    const history = useHistory();
    const styles = {
        color: movies.rating < 8 ? "crimson" : "green", fontWeight: "bold"
    };
    const summarystyles = {
        display: show ? "block" : "none"
    };


    return (
        <Card sx={{ maxWidth: 400, minWidth: 400 }}>
            <CardHeader className="movie-title"
                title={mv.title}
            />
            <CardMedia
                component="img"
                height="194"
                image={mv.picture}
                alt={mv.title}
            />
            <InfoButton
                color="secondary"
                onClick={() => {
                    console.log(id)
                    history.push("/Mvs/" + id)
                }}>
                <InfoIcon />
            </InfoButton>
            <h3 className="movie-rating" style={styles}> 🌟: {mv.rating} </h3>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <Button onClick={() => setShow(!show)} variant="outlined">{show ? "Hide" : "Show"} Description</Button>
                    <p style={summarystyles}> {mv.summary} </p>
                </Typography>
                <InfoButton

                    onClick={() => {
                        console.log(id)
                        history.push("/Edit/" + id)
                    }}>
                    <EditSharpIcon />
                </InfoButton>
                <InfoButton
                    onClick={() => {
                        const rem = movies.filter((mvx, idx) => idx !== id);
                        setMovies(rem);

                    }}>
                    <DeleteSharpIcon />
                </InfoButton>
                <Counter />
            </CardContent>
        </Card>
    );
}