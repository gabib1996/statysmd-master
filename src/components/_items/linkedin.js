import React from "react"
import { join } from "hooks/use-array"
import styles from "./icons.module.less"

export default function Linkedin({ theme }) {
  return (
    <a
      href="https://www.linkedin.com/company/statys-medical-development/"
      rel="noopener nofollow"
      target="_blank"
    >
      <svg
        className={styles.linkedin}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448.1 512"
      >
        <path
          className={join(styles.path1, theme && styles[theme])}
          d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z"
        />
      </svg>
    </a>
  )
}
