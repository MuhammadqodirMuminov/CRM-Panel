import { Layout } from '../../components';
import FormControl from '../../components/form-control/form-control';
import styles from './students.module.css';

const Students = () => {
	function toggleShow() {
		var el = document.getElementById('box');
		el.classList.toggle('show');
	}

	return (
		<Layout head={"O'quvchilar"}>
			<section className={styles['form-control']}>
				<FormControl />
			</section>

			<section className={styles.table}>
				<div className={styles['table-top']}>
					<h2 className={styles['table__title']}>Bizning o’quvchilar</h2>
					<div className={styles.container}>
						<input
							type='text'
							id='box'
							placeholder='Search anything...'
							className={styles['search__box']}
						/>
						<i
							className={`fas fa-search ${styles['search__icon']}`}
							id='icon'
							onClick={toggleShow}
						></i>
					</div>
				</div>
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
						</tbody>
					</table>
				</div>
			</section>
		</Layout>
	);
};

export default Students;
