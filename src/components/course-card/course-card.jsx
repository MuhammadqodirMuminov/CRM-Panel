/* eslint-disable react/prop-types */
import styles from './card.module.css';
//<Card card={{course_name: 'Matematika', student_img: '', teacher_name: 'Muxamadaliyev Ibrohim', teacher_phone: '+998900113861', course_days: 'DU-CHOR-JUMA', course_time: '14:00-16:00', group_members: '25ta', payments_count: '10ta'}}/>

const Card = ({ card, setModalIsOpen }) => {

	return (
		<div className={styles.card}>
			<h3 className={styles.card__title}>{card.course_name}</h3>
			<div className={styles.card__inner}>
				<div className={styles.top}>
					<div className='d-flex'>
						<img
							className={`${styles.card__img} shadow`}
							src={'http://localhost:5000/' + card.course_image}
							width={'100%'}
							height={'250px'}
							alt={card.course_name}
						/>
					</div>
					<ul className={styles.card__list}>
						<li>
							<p className={styles.text}>
								Kurs narxi:<span>{card.course_price} $ </span>
							</p>
						</li>
						<li>
							<p className={styles.text}>
								Dars vaqti:<span>{'18:30'}</span>
							</p>
						</li>
						<li>
							<p className={styles.text}>
								Kurs o’tkazilish joyi : <span>{card.branch_name}</span>
							</p>
						</li>
						<li>
							<p className={styles.text}>
								Markaz raqami : <span>{card.branch_phone}</span>
							</p>
						</li>
						<li>
							<p className={styles.text}>
								manzili : <span>{card.branch_address}</span>
							</p>
						</li>
					</ul>
				</div>
				<div className={`btn-group btn-group-lg w-100 ${styles.footer} rounded rounded-4 `}>
					<button type='button' className='btn btn-primary m-0 fs-1'>
						<i className='fas fa-plus ' />
					</button>
					<button
						onClick={() => setModalIsOpen(prev => !prev)}
						type='button'
						className='btn btn-yellow m-0'
					>
						<i className='fas fa-pen' />
					</button>
					<button type='button' className='btn btn-danger m-0'>
						<i className='fas fa-trash' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
