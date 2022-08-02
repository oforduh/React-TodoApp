import Header from "./component/header/Header";
import styles from "./app.module.scss";
import Option from "./component/todolist/TodoList";


function App() {
  return (
    <div className={styles.app_container}>
      <Header />
     <Option/>
    </div>
  );
}

export default App;
