import React from "react"
import styles from "./testimonials.module.less"

export default function Testimonials() {
  return (
    <div className={styles.root}>
      <div className={styles.quote}>
        Our working relationship with this company has been very positive. The
        level of professionalism is seen in their ability to adapt to our needs
        in the current environment. I am particularly impressed with the forward
        thinking and improvements with process efficiencies developed for our
        complex group of Academic Neurosurgeons.
      </div>
      <div className={styles.source}>
        <strong>Eric M. Massicotte</strong> MD, MSc, MBA, FRCSC
      </div>
      <div className={styles.roles}>
        Associate Professor of Surgery, Faculty of Medicine, and Director of
        Undergraduate Teaching, Division of Neurosurgery (University of
        Toronto); Staff Neurosurgeon (University Health Network); Medical
        Director, Back &amp; Neck Program (Altum Health)
      </div>
    </div>
  )
}
