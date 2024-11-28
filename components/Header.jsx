import styles from './Header.module.css'; 

function Header(){
    return(
        <header className={styles.header}>
            <h1>React Feed</h1>
        </header>
    )
}
//preciso usar variavel css para usar o css module no react
export default Header;