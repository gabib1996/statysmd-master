import React from "react"
import { Link } from "gatsby"
import Block from "components/_boxes/block"
import Grid from "components/_boxes/grid"
import Shelf from "components/_boxes/shelf"
import LinkedIn from "components/_items/linkedin"
import styles from "./footer.module.less"

export default function Footer() {
  const classes = {
    root: styles.root,
  }

  return (
    <footer className={classes.root}>
      <Block settings={{ paint: "secondary" }}>
        <Grid>
          <div>
            <p>
              <strong>Statys Medical Development</strong>
            </p>
            <p>
              <Link to="/about/">About us</Link>
            </p>
            <p>
              <Link to="/team/">Our team</Link>
            </p>
            <p>
              <Link to="/services/">Our services</Link>
            </p>
            <p>
              <Link to="/contact/">Contact us</Link>
            </p>
            <p>
              <Link to="/careers/">Careers</Link>
            </p>
            <p>
              <Link to="/privacy/">Privacy statement</Link>
            </p>
          </div>
          <div>
            <p>
              <strong>Head office</strong>
            </p>
            <p>
              2540 Matheson Blvd East
              <br />
              Suite 209
              <br />
              Mississauga, Ontario
              <br />
              L4W 4Z2
            </p>
            <p>
              Phone: <a href="tel:+1-800-688-7347">1-800-688-7347</a>
              <br />
              Fax: <a href="tel:+1-844-622-6790">1-844-622-6790</a>
            </p>
          </div>
          <div>
            <p>
              <strong>Thunder Bay office</strong>
            </p>
            <p>
              1000 Fort William Road
              <br />
              Unit 205A
              <br />
              Thunder Bay, Ontario
              <br />
              P7B 6B9
            </p>
            <p>
              Phone: <a href="tel:+1-800-688-7347">1-800-688-7347</a>
              <br />
              Fax: <a href="tel:+1-844-622-6790">1-844-622-6790</a>
            </p>
          </div>
          <div>
            <p>
              <strong>Connect with us</strong>
            </p>
            <p><a href="mailto:info@statysmd.com">info@statysmd.com</a></p>
            <p>
              <LinkedIn theme="ondark" />
            </p>
          </div>
        </Grid>
      </Block>
      <div
        className={styles.banner}
        settings={{ paint: "secondary", inset: "minor", space: false }}
      >
        <Shelf>
          <div>
            <div>© {new Date().getFullYear()} Statys Medical Development.</div>
          </div>
          <div>
            <code>&lt;/&gt;</code> by Statys Digital
          </div>
        </Shelf>
      </div>
    </footer>
  )
}
