import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Header from '../Spells/Header';
import SaveIcon from '@material-ui/icons/Save';
import requests from '../../Utils/Requests.js'
import cookies from '../../Utils/cookies.js'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

class Spell extends Component {

    username = cookies.getCookies().username

    spellSomething = () => {
        let text = document.getElementById('text').value
        requests.tweet(text)
        window.location.href = `/${this.username}`
    }

    render = () => {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Header title="Spell" />
                    <br />
                    <main>
                        <TextareaAutosize
                            rowsMax={20}
                            rowsMin={10}
                            style={{ width: '1000px' }}
                            aria-label="Spell anything in your mind"
                            placeholder="Spell anything in your mind"
                            defaultValue="Hello Spell"
                            id="text"
                        />{this.props.username}
                        <br/>
                        <Button
                            onClick={this.spellSomething}
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<SaveIcon />}
                        >
                            Spell
                        </Button>
                    </main>
                </Container>
            </React.Fragment>
        );
    }
};

export default Spell