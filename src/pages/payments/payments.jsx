import { FormControlPayment, Layout, SearchBar } from '../../components';
import classes from './payments.module.css';
import styles from '../students/students.module.css';

const Payments = () => {
	return (
		<Layout head={'To’lov'}>
			<div className={classes.payment}>
				<section className={classes['payment__section']}>
					<FormControlPayment />
				</section>

				<section className={classes['table__section']}>
					<SearchBar title={'To’lov qilganlar (shu oy bo’yicha) '} />
					<div className={`w-100  text-center ${styles.tableMain}`}>
						<table className='table'>
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
									O’qituvchisi
									</th>
									<th className={styles.head} scope='col'>
									To’lov vaqti
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
									<td className={styles.row}>O’qituvchi (F.I.SH)</td>

									<td className={styles.row}>06.02.2022</td>
									<td className={styles.row}>
										<i className={`fas fa-check-double text-primary ${styles.icon}`}></i>
									</td>
								</tr>
								<tr className={` ${styles.active} ${styles['table-row']}`}>
									<th className={styles.row} scope='row'>
										1
									</th>
									<td className={styles.row}>Mark</td>
									<td className={styles.row}>+998999741749</td>
									<td className={styles.row}>Dasturlash</td>
									<td className={styles.row}>O’qituvchi (F.I.SH)</td>

									<td className={styles.row}>06.02.2022</td>
									<td className={styles.row}>
										<i className={`fas fa-check-double text-primary ${styles.icon}`}></i>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default Payments;
