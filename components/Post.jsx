import Comments from './Comments';
import styles from './Post.module.css'

function Post (){
    return (
      <article className={styles.post}>
          <header>
              <div className={styles.author}>
                 <img  className={styles.avatar} src="https://avatars.githubusercontent.com/u/107755009?v=4" alt="" />
                 <div className={styles.authorInfo}>
                     <strong>Elieldson kervem</strong>
                     <span>Web Developer</span>
                 </div>
              </div>

              <time dateTime="2024/11/29">
                publicado há 1h
              </time>
          </header>

          <div className={styles.content}>
              <p>
                Fala pessoal, beleza? Estou fazendo esse post para     testar o css module. Não é incrível?
              </p>
               <p>
               <a href="https://github.com/ElieldsonKervem" target='_blank'> Segue o link para meu github </a>
               </p>
              <p> <a href="#">Novo projeto no Inginite</a> </p>
          </div>
            
          <div className={styles.horizontalRow}>
             
          </div>

           <form  className={styles.form}>
             <strong>Deixe seu feed back</strong>
             <textarea className={styles.textArea} placeholder='deixe seu comentario'></textarea>
             <button>Comentar</button>
            </form>

            <div className={styles.CommentList}>
                <Comments/>
            </div>    
          
      </article>
    )
}

export default Post;