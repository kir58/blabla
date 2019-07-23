import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

export default () => {
	return (
		<ul className={styles.list}>
			 <NavLink to="/" className={styles.link} activeClassName={styles.active}>
			 		<li className={styles.item}>Текущие курсы валют</li>
				</NavLink>
				<NavLink to="/convert_currency" className={styles.link} activeClassName={styles.active}>
					<li className={styles.item}>Конвертация валют</li>
				</NavLink>
		</ul>
	)
}