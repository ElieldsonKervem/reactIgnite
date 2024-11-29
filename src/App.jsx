

import Header from "../components/header"
import Sidebar from "../components/SideBar"
import styles from "./app.module.css"

function App() {


  return (
    <>
     <Header/>
     <div className={styles.wrapper}>
         <aside>
            <Sidebar/>
         </aside>
          <main>
              <h2>main</h2>
          </main>
           
     </div>
   </>
  )
}

export default App

//comoponents são funções que retornam JSX e são usado para reutilizar código.
//as propiedades servem para passar informações para os componentes. sem elas, os componentes seriam estáticos.