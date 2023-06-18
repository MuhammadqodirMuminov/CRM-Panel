import styles from "./card.module.css"
//<Card card={{course_name: 'Matematika', student_img: '', teacher_name: 'Muxamadaliyev Ibrohim', teacher_phone: '+998900113861', course_days: 'DU-CHOR-JUMA', course_time: '14:00-16:00', group_members: '25ta', payments_count: '10ta'}}/>
export const Card = (card) => {
  const { course_name, student_img, teacher_name, teacher_phone, course_days, course_time, group_members, payments_count  } = card.card

  return <div className={styles.card}>
    <h3 className={styles.card__title}>{course_name}</h3>
    <div className={styles.card__inner}>
      <div className={styles.top}>
        <div className="d-flex">
          <img className={`${styles.card__img} shadow`} src={student_img} width={80} height={80} alt={teacher_name} />
          <div>
            <p className={styles.text}>{"O'qituvchi"}: <span>{teacher_name}</span></p>
            <p className={styles.text}>Tel raqam: <span>{teacher_phone}</span></p>
          </div>
        </div>
        <ul className={styles.card__list}>
          <li>
            <p className={styles.text}>Dars kunlari:<span>{course_days}</span></p>
          </li>
          <li>
            <p className={styles.text}>Dars vaqti:<span>{course_time}</span></p>
          </li>
          <li>
            <p className={styles.text}>O’quvchilar soni<span>{group_members}</span></p>
          </li>
          <li>
            <p className={styles.text}>To’lov qilganlar<span>{payments_count}</span></p>  
          </li>
        </ul>
      </div>
    </div>
  </div>
}
