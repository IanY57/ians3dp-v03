import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <div>
      <section className={styles.contact}>
        <Title title="contact" subtitle="us" />
        <div className={styles.center}>
          <form
            className={styles.form}
            action="https://formspree.io/sales@ians3dp.com.au"
            method="POST"
          >
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className={styles.formControl}
                placeholder="John Smith"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className={styles.formControl}
                placeholder="email@email.com"
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="10"
                className={styles.formControl}
                placeholder="Message here"
              />
              <div>
                <input
                  type="submit"
                  value="Submit message"
                  className={styles.submit}
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
