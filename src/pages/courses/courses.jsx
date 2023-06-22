import { useState } from 'react';
import { FormControlCourses, Layout, SearchBar } from '../../components';
import { Card } from '../../components/card/card.jsx';
import { Modal } from '../../components/modal/modal';
import styles from './courses.module.css';

const Courses = () => {
	const [isModalOpen, setModalIsOpen] = useState(true);

	return (
		<>
			<Layout head={'Barcha kurslar'}>
				<div className={styles.courses}>
					<section className={styles['course__add']}>
						<FormControlCourses />
					</section>
					<section className={styles.list}>
						<SearchBar title={'Barcha mavjud kurslar'} />

						<div className={styles['course__list']}>
							<div className={styles['card-item']}>
								<Card
									card={{
										course_name: 'Matematika',
										student_img: '',
										teacher_name: 'Muxamadaliyev Ibrohim',
										teacher_phone: '+998900113861',
										course_days: 'DU-CHOR-JUMA',
										course_time: '14:00-16:00',
										group_members: '25ta',
										payments_count: '10ta',
									}}
								/>
							</div>
							<div className={styles['card-item']}>
								<Card
									card={{
										course_name: 'Matematika',
										student_img: '',
										teacher_name: 'Muxamadaliyev Ibrohim',
										teacher_phone: '+998900113861',
										course_days: 'DU-CHOR-JUMA',
										course_time: '14:00-16:00',
										group_members: '25ta',
										payments_count: '10ta',
									}}
								/>
							</div>
							<div className={styles['card-item']}>
								<Card
									card={{
										course_name: 'Matematika',
										student_img: '',
										teacher_name: 'Muxamadaliyev Ibrohim',
										teacher_phone: '+998900113861',
										course_days: 'DU-CHOR-JUMA',
										course_time: '14:00-16:00',
										group_members: '25ta',
										payments_count: '10ta',
									}}
								/>
							</div>
							<div className={styles['card-item']}>
								<Card
									card={{
										course_name: 'Matematika',
										student_img: '',
										teacher_name: 'Muxamadaliyev Ibrohim',
										teacher_phone: '+998900113861',
										course_days: 'DU-CHOR-JUMA',
										course_time: '14:00-16:00',
										group_members: '25ta',
										payments_count: '10ta',
									}}
								/>
							</div>
							<div className={styles['card-item']}>
								<Card
									card={{
										course_name: 'Matematika',
										student_img: '',
										teacher_name: 'Muxamadaliyev Ibrohim',
										teacher_phone: '+998900113861',
										course_days: 'DU-CHOR-JUMA',
										course_time: '14:00-16:00',
										group_members: '25ta',
										payments_count: '10ta',
									}}
								/>
							</div>
						</div>
					</section>
				</div>
				<div>
					<button onClick={() => setModalIsOpen(prev => !prev)}>open</button>
				</div>
			</Layout>
			{!isModalOpen && <Modal isModalOpen={isModalOpen} setModalIsOpen={setModalIsOpen} />}
		</>
	);
};

export default Courses;