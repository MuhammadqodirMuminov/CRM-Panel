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
						<thead className='table-primary'>
							<tr>
								<th scope='col'>№</th>
								<th scope='col'>First</th>
								<th scope='col'>Last</th>
								<th scope='col'>Handle</th>
								<th scope='col'>Handle</th>
								<th scope='col'>Handle</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope='row'>1</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
								<td>@mdo</td>

								<td>@mdo</td>
							</tr>
							<tr>
								<th scope='row'>2</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>@fat</td>
								<td>@fat</td>

								<td>@fat</td>
							</tr>
							<tr>
								<th scope='row'>3</th>
								<td>Larry</td>
								<td>the Bird</td>
								<td>@twitter</td>
								<td>@twitter</td>

								<td>@twitter</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</Layout>
	);
};

export default Students;
