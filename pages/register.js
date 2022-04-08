import { Button } from "../components/form/Button";
import { Input } from "../components/form/Input";

export default function Login() {
  return (
    <>
      <h2>Nýskráning</h2>
      <Input label="Nafn" name="name" />
      <Input label="Notendanafn" name="username" />
      <Input label="Lykilorð" name="password" />
      <Button>Skrá mig</Button>

      <p>&nbsp;</p>
      <a href="/">Til baka</a>
    </>
  )
}