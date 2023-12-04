import './App.css';
import { Button, TextField } from '@mui/material';

function App() {
    return (
        <div className='Container'>
            <div className="App">
                <TextField style={{margin: ".5rem"}} id="outlined-basic" label="Usuário" variant="outlined" />
                <TextField style={{margin: ".5rem"}} id="outlined-basic" label="Senha" variant="outlined" type='password' />
                <Button style={{margin: "2rem", width: "12rem"}} variant="contained">Entrar</Button>
            </div>
        </div>
    );
}

export default App;
