import React, { useContext } from "react";

import { AppContext } from "@/context/AppContext";
import styles from '@/styles/ToggleDegreeUnit.module.css'

const ToggleDegreeUnit = ({ label }) => {
    label = 'no-label'
    const { handleToggleDegreeClick } = useContext(AppContext);
    return (
        <div className={styles.container} >

            <div className={styles.toggle_switch}>
                <input type="checkbox" className={styles.checkbox}
                    name='no-label' id='no-label' onClick={handleToggleDegreeClick} />
                <label className={styles.label} htmlFor={label}>
                    <span className={styles.inner} />
                    <span className={styles.switch} />
                </label>
            </div>
        </div>
    );
};

export default ToggleDegreeUnit;
