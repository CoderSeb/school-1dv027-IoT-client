import styles from './styles/Header.module.css'
function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Terra Temp</h1>
      <p className={styles.description}>
        Welcome to Terra Temp, the place to find out the temperatures in the
        home of Otto the ballpython
      </p>
      <p>
        <a
          className={styles.instaLink}
          href='https://www.instagram.com/otto.the.ballpython/'
          target='_blank'
          rel='noreferrer'>
          <img src='./img/IG.png' alt='Instagram logo' />
          <p>@otto.the.ballpython</p>
        </a>
      </p>
    </div>
  )
}

export default Header
