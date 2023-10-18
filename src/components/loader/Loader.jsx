import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center ">
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loader;
