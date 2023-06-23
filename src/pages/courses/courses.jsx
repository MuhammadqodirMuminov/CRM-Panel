import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, FormControlCourses, Layout, SearchBar } from '../../components';
import { Modal } from '../../components/modal/modal';
import courseService from '../../service/course.service';
import { getCourseFailore, getCoursesSuccess } from '../../slice/courseSlice';
import styles from './courses.module.css';

const Courses = () => {
	const [isModalOpen, setModalIsOpen] = useState(true);
	const { courses } = useSelector(state => state.course);
	const dispatch = useDispatch();

	const initialfetch = async () => {
		try {
			const branch = await courseService.getBranches();
			const course = await courseService.getCourses();

			dispatch(getCoursesSuccess([branch.data, course.data]));
		} catch (error) {
			dispatch(getCourseFailore(error.message));
		}
	};

	useEffect(() => {
		initialfetch();
	}, []);

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
							{courses ? (
								courses.map((course, i) => {
									return (
										<div className={styles['card-item']} key={i}>
											<Card card={course} setModalIsOpen={setModalIsOpen} />
										</div>
									);
								})
							) : (
								<div className='d-flex justify-content-center'>
									<div
										className='spinner-border'
										style={{ width: '3rem', height: '3rem' }}
										role='status'
									>
										<span className='visually-hidden'></span>
									</div>
								</div>
							)}
						</div>
					</section>
				</div>
			</Layout>
			{!isModalOpen && <Modal isModalOpen={isModalOpen} setModalIsOpen={setModalIsOpen} />}
		</>
	);
};

export default Courses;
