import React from "react"
import styles from "./tags.module.less"

export default function Tags() {
  return (
    <ul className={styles.root}>
      <li className={styles.item}>Oncology</li>
      <li className={styles.item}>ICU (Intensive Care Unit)</li>
      <li className={styles.item}>Emergency Medicine</li>
      <li className={styles.item}>Anesthesia</li>
      <li className={styles.item}>General Surgery</li>
      <li className={styles.item}>Plastic Surgery</li>
      <li className={styles.item}>Pediatrics</li>
      <li className={styles.item}>Cardiology</li>
      <li className={styles.item}>Urology</li>
      <li className={styles.item}>Internal Medicine</li>
      <li className={styles.item}>Gastroenterology</li>
      <li className={styles.item}>ENT/Otolarygology</li>
      <li className={styles.item}>Neurosurgery</li>
      <li className={styles.item}>Neurology</li>
      <li className={styles.item}>Oral Oncology</li>
      <li className={styles.item}>Psychiatry</li>
      <li className={styles.item}>Palliative Care</li>
      <li className={styles.item}>Family Medicine/General Practice</li>
      <li className={styles.item}>Optometry</li>
    </ul>
  )
}
