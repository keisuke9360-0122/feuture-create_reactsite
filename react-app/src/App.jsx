import "./App.css";
import { Mv } from "./component/Atoms/Mvimage/Mv.jsx";
import { Layout } from "./component/Template_layout/defalute";
import { IndexList } from "./component/Molecules/IndexList";
export default function App() {
  return (
    <>
      <Layout>
        <div>PHOTO BOOK2</div>
        <Mv></Mv>
      </Layout>
      <IndexList></IndexList>
    </>
  );
}
