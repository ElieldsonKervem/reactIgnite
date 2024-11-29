import styles from './Sidebar.module.css'

function Sidebar(){ 
    return (
        <aside className={styles.sidebar}>
             <div className={styles.backgroundDiv}>
                
             </div>
             <img src="womanSideBarPicture.jpg" alt="foto de uma mulher sorrindo" />
             <div className={styles.profile}>
                <strong>Fernanda Matarrazo</strong>
                <span>Web designer</span>
             </div>
              
              <div className={styles.horizontalRow}></div>

             <footer>
                <a href="#">
                    Editar seu perfil
                </a>
             </footer>
        </aside>
    )
}

export default Sidebar