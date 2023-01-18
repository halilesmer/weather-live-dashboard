import React from "react";
import styles from '@/styles/ToggleDegreeUnit.module.css'

const ToggleDegreeUnit = ({ label }) => {
    label = 'no-label'
    return (
        <div className={styles.container}>

            <div className={styles.toggle_switch}>
                <input type="checkbox" className={styles.checkbox}
                    name='no-label' id='no-label' />
                <label className={styles.label} htmlFor={label}>
                    <span className={styles.inner} />
                    <span className={styles.switch} />
                </label>
            </div>
        </div>
    );
};

export default ToggleDegreeUnit;
