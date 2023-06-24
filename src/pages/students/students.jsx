/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Layout, SearchBar } from '../../components';
import FormControl from '../../components/form-control/form-control';
import { Pagination } from '../../components/pagination/Pagination';
import styles from './students.module.css'
import axios from 'axios';
import StudentService from '../../service/student.service';



const Students = () => {
	let [page, setPage] = useState(1);

	const [student, setStudent] = useState()

	const fetchs = async () => {
		const students = await StudentService.studentAll()
		setStudent(students.data.students);
		return students.data.students
	}

	useEffect(() => {
		fetchs()
	}, [])

	console.log(student);

	return (
		<Layout head={"O'quvchilar"}>
			<section className={styles['form-control']}>
				<FormControl />
			</section>

			<section className={styles.table}>
				<SearchBar title={'Bizning o’quvchilar'} />

				<div className={`w-100  text-center ${styles.tableMain}`}>
					<table className='table m-0'>
						<thead className='p-0'>
							<tr className={styles['table-primary']}>
								<th className={styles.head} scope='col'>
									№
								</th>
								<th className={styles.head} scope='col'>
									O’quvchi ismi
								</th>
								<th className={styles.head} scope='col'>
								O’quvchi familiyasi
								</th>
								<th className={styles.head} scope='col'>
									Yo’nalish
								</th>
								<th className={styles.head} scope='col'>
									Tel. Raqami
								</th>
								<th className={styles.head} scope='col'>
									Ota-ona (Tel)
								</th>
								<th className={styles.head} scope='col'></th>
							</tr>
						</thead>
						<tbody>
							{student?.length ? 
							student?.map(item => (
								<>
								<tr className={styles['table-row']}>
								<th className={styles.row} scope='row'>
									{item.student_id}
								</th>
								<td className={styles.row}>{item.student_name}</td>
								<td className={styles.row}>{item.student_last_name}</td>
								<td className={styles.row}>Nodejs</td>
								<td className={styles.row}>{item.student_phone}</td>

								<td className={styles.row}>{item.student_family_phone}</td>
								<td className={styles.row}>
									<i className={`fas fa-trash ${styles.icon}`}></i>
								</td>
							</tr>		
							</>
							)) : 'Ma`lumot yo`q'}					
						</tbody>
					</table>
				</div>
			</section>
			{/* <Pagination setPage={setPage} page={1000} /> */}

		</Layout>
	);
};

export default Students;
