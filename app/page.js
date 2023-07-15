import styles from "@styles/page.module.css";
import Header from "@components/header";
import SearchBar from "@app/search/search.bar";
import ItemProfile from "@components/item.profile"

export default function Home() {
  return (
    <>
      <section className={styles.main}>
        <section>
          <Header />
        </section>
        <section>
          <SearchBar/>
        </section>
          <ItemProfile/>
        </section>
    </>
  );
}