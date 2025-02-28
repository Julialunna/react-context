import { Button } from '@material-ui/core';
import {
  Container,
  Titulo,
  InputContainer
} from './styles';
import {
  Input,
  InputLabel,
  InputAdornment
} from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import { UsuarioContext  } from 'common/context/Usuario';
import {useContext} from 'react';

function Login() {
  const history = useHistory();
  const {nome, setNome, saldo, setSaldo}=useContext(UsuarioContext);
  return (
    <Container>
      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
          type="number"
          value={saldo}
          onChange={(event)=>setSaldo(event.target.value)}
          startAdornment={
            <InputAdornment position="start">
              R$
            </InputAdornment>
          }
        />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={()=>{history.push('/feira')}}
        disabled={nome.length<4}
      >
        Avançar
      </Button>
    </Container>
  )
};

export default Login;