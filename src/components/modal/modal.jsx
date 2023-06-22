import { useEffect } from 'react';
import styles from './modal.module.css';

// eslint-disable-next-line react/prop-types
export const Modal = ({ isModalOpen, setModalIsOpen }) => {
	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				setModalIsOpen(!isModalOpen);
			}
		}

		// Prevent scolling
		document.body.style.overflow = 'hidden';
		document.addEventListener('keydown', onKeyDown);

		// Clear things up when unmounting this component
		return () => {
			document.body.style.overflow = 'visible';
			document.removeEventListener('keydown', onKeyDown);
		};
	});

	return (
		<div className={styles['modal__backdrop']}>
			<div className={styles['modal__container']}>
				<h3 className={styles['modal__title']}>Im a modal!</h3>

				<button
					className={styles.button}
					type='button'
					onClick={() => setModalIsOpen(prev => !prev)}
				>
					Close this modal
				</button>
			</div>
		</div>
	);
};
