import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Topo from "@/components/Topo";
import Capa from "@/components/Capa";


export default function Home() {
  return (
    <>
      <Head>
        <title>Celina Store</title>
        <meta name="description" content="Desenvolvendo site de venda de sapatos com React e Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
     
      <Topo/>
      <section>
        <Capa/>
      </section>
     
    </>
  );
}
