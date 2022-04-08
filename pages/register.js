import { useState } from "react";
import { Button } from "../components/form/Button";
import { Input } from "../components/form/Input";

export default function Register() {
    const [name, setName] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    async function onSubmit(e) {
        e.preventDefault();
        console.log(username);
        console.log(password);
        const result = await fetch('https://vef2-20222-v3-synilausn.herokuapp.com/users/register', 
            {
                method: 'POST',
                body: {name, username, password}
            }
        )
        const data = result.json();
        console.log(data);
    }
  return (
    <>
        <h2>Nýskráning</h2>
        <form onSubmit={e => onSubmit(e)}>
            <Input label="Nafn" name="name" onInput={e => setName(e.target.value)}/>
            <Input label="Notendanafn" name="username" onInput={e => setUsername(e.target.value)} />
            <Input label="Lykilorð" name="password" type="password"  onInput={e => setPassword(e.target.value)} />
            <Button>Skrá mig</Button>
        </form>

      <p>&nbsp;</p>
      <a href="/">Til baka</a>
    </>
  )
}