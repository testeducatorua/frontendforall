import styles from './footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          &copy; {currentYear}{' '}
          <a 
            href="https://www.youtube.com/@itmentor" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            НАВЧАЄМОСЯ РАЗОМ
          </a>
          . Всі права захищені.
        </div>
        <div className={styles.license}>
          <p>
            Ліцензія MIT
          </p>
          <p>
            Цей контент доступний для вільного використання та розповсюдження.
            Ви можете використовувати, модифікувати та розповсюджувати матеріали
            для особистих та комерційних цілей.
          </p>
          <p className={styles.disclaimer}>
            КОНТЕНТ НАДАЄТЬСЯ "ЯК Є", БЕЗ БУДЬ-ЯКИХ ГАРАНТІЙ.
            Автор не несе відповідальності за будь-які наслідки,
            пов'язані з використанням цих матеріалів.
          </p>
        </div>
      </div>
    </footer>
  )
}
