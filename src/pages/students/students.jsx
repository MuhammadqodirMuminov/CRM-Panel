/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Layout, SearchBar } from '../../components';
import FormControl from '../../components/form-control/form-control';
import { Pagination } from '../../components/pagination/Pagination';
import styles from './students.module.css';


const Students = () => {
	let [page, setPage] = useState(1);

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
									Telefon nomer
								</th>
								<th className={styles.head} scope='col'>
									Yo’nalish
								</th>
								<th className={styles.head} scope='col'>
									Ota-ona(F.I.SH)
								</th>
								<th className={styles.head} scope='col'>
									Ota-ona (Tel)
								</th>
								<th className={styles.head} scope='col'></th>
							</tr>
						</thead>
						<tbody>
							<tr className={styles['table-row']}>
								<th className={styles.row} scope='row'>
									1
								</th>
								<td className={styles.row}>Mark</td>
								<td className={styles.row}>+998999741749</td>
								<td className={styles.row}>Dasturlash</td>
								<td className={styles.row}>sucerberg</td>

								<td className={styles.row}>+998911232332</td>
								<td className={styles.row}>
									<i className={`fas fa-trash ${styles.icon}`}></i>
								</td>
							</tr>
							<tr className={` ${styles.active} ${styles['table-row']}`}>
								<th className={styles.row} scope='row'>
									1
								</th>
								<td className={styles.row}>Mark</td>
								<td className={styles.row}>+998999741749</td>
								<td className={styles.row}>Dasturlash</td>
								<td className={styles.row}>sucerberg</td>

								<td className={styles.row}>+998911232332</td>
								<td className={styles.row}>
									<i className={`fas fa-trash ${styles.icon}`}></i>
								</td>
							</tr>
							<tr className={` ${styles.active} ${styles['table-row']}`}>
								<th className={styles.row} scope='row'>
									1
								</th>
								<td className={styles.row}>Mark</td>
								<td className={styles.row}>+998999741749</td>
								<td className={styles.row}>Dasturlash</td>
								<td className={styles.row}>sucerberg</td>

								<td className={styles.row}>+998911232332</td>
								<td className={styles.row}>
									<i className={`fas fa-trash ${styles.icon}`}></i>
								</td>
							</tr><tr className={` ${styles.active} ${styles['table-row']}`}>
								<th className={styles.row} scope='row'>
									1
								</th>
								<td className={styles.row}>Mark</td>
								<td className={styles.row}>+998999741749</td>
								<td className={styles.row}>Dasturlash</td>
								<td className={styles.row}>sucerberg</td>

								<td className={styles.row}>+998911232332</td>
								<td className={styles.row}>
									<i className={`fas fa-trash ${styles.icon}`}></i>
								</td>
							</tr><tr className={` ${styles.active} ${styles['table-row']}`}>
								<th className={styles.row} scope='row'>
									1
								</th>
								<td className={styles.row}>Mark</td>
								<td className={styles.row}>+998999741749</td>
								<td className={styles.row}>Dasturlash</td>
								<td className={styles.row}>sucerberg</td>

								<td className={styles.row}>+998911232332</td>
								<td className={styles.row}>
									<i className={`fas fa-trash ${styles.icon}`}></i>
								</td>
							</tr>
							<tr className={` ${styles.active} ${styles['table-row']}`}>
								<th className={styles.row} scope='row'>
									1
								</th>
								<td className={styles.row}>Mark</td>
								<td className={styles.row}>+998999741749</td>
								<td className={styles.row}>Dasturlash</td>
								<td className={styles.row}>sucerberg</td>

								<td className={styles.row}>+998911232332</td>
								<td className={styles.row}>
									<i className={`fas fa-trash ${styles.icon}`}></i>
								</td>
							</tr>
							<tr className={` ${styles.active} ${styles['table-row']}`}>
								<th className={styles.row} scope='row'>
									1
								</th>
								<td className={styles.row}>Mark</td>
								<td className={styles.row}>+998999741749</td>
								<td className={styles.row}>Dasturlash</td>
								<td className={styles.row}>sucerberg</td>

								<td className={styles.row}>+998911232332</td>
								<td className={styles.row}>
									<i className={`fas fa-trash ${styles.icon}`}></i>
								</td>
							</tr>
							
							
						</tbody>
					</table>
				</div>
			</section>
			<Pagination setPage={setPage} page={1000} />

		</Layout>
	);
};

export default Students;
