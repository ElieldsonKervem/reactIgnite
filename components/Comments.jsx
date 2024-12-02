import styles from './Comments.module.css';
import { Trash2, ThumbsUp} from 'react-feather';
function Comments(){
    return(
        <div className={styles.comment}>
             <img src="https://avatars.githubusercontent.com/u/103?v=4" alt="" />
             <div className={styles.commentBox}>
                <header>
                    <div className={styles.commentHeader}>
                      <strong>Diego Fernandes</strong>
                      <time dateTime="2024/11/29"> Cerca de 3h atrás</time>
                    </div>
                    <button title='Deletar comentário'>
                        <Trash2/>
                    </button>
                </header>
                <p>Muito bom Devon, Parabéns</p>
                <footer>
                    <button>
                        <ThumbsUp className={styles.thumbsUp}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
             </div>

            
        </div>
    )
}


export default Comments;