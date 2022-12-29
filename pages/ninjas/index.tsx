import Head from "next/head";
import styles from "../../styles/Ninjas.module.css"
// special function to get data
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
}

const Ninjas = ({ninjas}: any) => {
  return (
    <>
      <Head>
        <title>Ninja List</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja: any)=>(
            <div key={ninja.id}>
                <a className={styles.single}>
                    <h3>{ninja.name}</h3>
                </a>
            </div>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
<div>
  <h1></h1>All Ninjas
</div>;
