import React, { useEffect, useRef, useState } from 'react';
import styles from './Dropdown.module.css';

const dropdownList = [
	{ option: 'Test 1', value: 1 },
	{ option: 'Test 2', value: 2 },
	{ option: 'Test 3', value: 3 },
	{ option: 'Test 4', value: 4 },
	{ option: 'Test 5', value: 5 },
	{ option: 'Test 6', value: 6 },
];
const Dropdown = () => {
	const [selected, setSelected] = useState(dropdownList[0].value);
	const [isOpen, setIsOpen] = useState(false);
	const refContainer = useRef(null);
	console.log(selected);

	useEffect(() => {
		window.addEventListener('orientationchange', (event) => {
			setIsOpen(false);
      setSelected(dropdownList[0].value);
		});
		return () => {};
	}, []);
  	console.log(isOpen);
	return (
		<div className={styles.root}>
			<select
				ref={refContainer}
				className={styles.dropdown}
				onChange={(e) => setSelected(e.target.value)}
        onClick={()=>setIsOpen(true)}
			>
				{dropdownList.map(({ option, value },i) => {
					return isOpen && i > 0 ? (
						<option value={value}>{option}</option>
					) : (
						<option value={value}>{option}</option>
					);
				})}
			</select>
		</div>
	);
};

export default Dropdown;
