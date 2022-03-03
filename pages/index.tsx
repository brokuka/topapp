import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
  return (
    <div className='container'>
      <Htag tag="h1">Text</Htag>
      <Button appearance='primary' arrow="right" className="123">Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
    </div>
  );
}
