import React, { useContext } from "react";

import { AppContext } from "@/context/AppContext";
import styles from '@/styles/DegreeUnitSwitcher.module.css'

// Komponente um das Gradeinheit zw. Celsius und Fahrenheit zu ändern
const DegreeUnitSwitcher = ({ label }) => {
    label = 'no-label'
    const { handleDegreeSwitcherClick } = useContext(AppContext);
    return (
        <div className={styles.container} >

            <div className={styles.toggle_switch}>
                <input type="checkbox" className={styles.checkbox}
                    name='no-label' id='no-label' onClick={handleDegreeSwitcherClick} />
                <label className={styles.label} htmlFor={label}>
                    <span className={styles.inner} />
                    <span className={styles.switch} />
                </label>
            </div>
        </div>
    );
};

export default DegreeUnitSwitcher;
