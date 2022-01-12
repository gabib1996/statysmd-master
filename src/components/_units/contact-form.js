import React from "react"
// import { useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"
import { join } from "hooks/use-array"
import styles from "./contact-form.module.less"

// const schema = yup.object().shape({
//   name: yup.string().required("Please provide your name"),
//   email: yup
//     .string()
//     .email("Please enter a valid email address")
//     .required("Please provide your email address"),
//   phone: yup.string().required("Please provide your phone number"),
//   message: yup.string().required("Please write your message"),
// })

// export default function ContactForm() {
//   const { register, handleSubmit, errors } = useForm({
//     resolver: yupResolver(schema),
//   })

//   const onSubmit = data => {
//     console.log(data)
//     fetch("https://formsubmit.co/ajax/498ba5471e64f7b6b3249affcec0c4eb", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then(response => {
//         if (response.ok) return response.json()
//         else throw new Error("Network error")
//       })
//       // .then(res => res.json())
//       .then(json => console.log("Submission response:", json, "Data:", data))
//       .catch(err => console.error(err))
//   }

//   const [subject] = React.useState("Form submission from StatysMd.com")

//   return (
//     <>
//       <h2>Connect with us</h2>
//       <p>
//         Schedule a meeting or send us your questions or comments. We will
//         respond within one business day.
//       </p>
//       <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
//         <input type="hidden" name="_subject" value={subject} />
//         <input type="text" name="_honey" style={{ display: "none" }} />
//         <label htmlFor="name">Your full name</label>
//         <input
//           className={join(styles.input, errors.name && styles.error)}
//           type="text"
//           name="name"
//           ref={register({ required: true })}
//         />
//         <div className={join(styles.hint, styles.error)}>
//           {errors.name?.message}
//         </div>
//         {/* {errors.name && <div>This field is required</div>} */}
//         <label htmlFor="email">Email address</label>
//         <input
//           className={join(styles.input, errors.email && styles.error)}
//           type="email"
//           name="email"
//           ref={register({ required: true })}
//         />
//         <div className={join(styles.hint, styles.error)}>
//           {errors.email?.message}
//         </div>
//         {/* {errors.email && <div>This field is required</div>} */}
//         <label htmlFor="phone">Your phone number</label>
//         <input
//           className={join(styles.input, errors.phone && styles.error)}
//           type="tel"
//           name="phone"
//           ref={register({ required: true })}
//         />
//         <div className={join(styles.hint, styles.error)}>
//           {errors.phone?.message}
//         </div>
//         {/* {errors.phone && <div>This field is required</div>} */}
//         <label htmlFor="message">Your question or comment</label>
//         <textarea
//           className={join(styles.input, errors.message && styles.error)}
//           name="message"
//           ref={register({ required: true })}
//         />
//         <div className={join(styles.hint, styles.error)}>
//           {errors.message?.message}
//         </div>
//         {/* {errors.message && <div>This field is required</div>} */}
//         <button type="submit">Send</button>
//       </form>
//     </>
//   )
// }

import { useForm, ValidationError } from "@formspree/react"

export default function ContactForm() {
  const defaults = {
    _subject: "Form submission from StatysMD.com",
  }

  const [state, handleSubmit] = useForm("contactForm", defaults)

  return state.succeeded ? (
    <div className={styles.root}>
      <p>Thank you for your message. We will respond within one business day.</p>
    </div>
  ) : (
    <form className={styles.root} onSubmit={handleSubmit}>
      {/* <input type="hidden" name="_subject" value="New submission" /> */}
      <label htmlFor="name">Your name</label>
      <input type="text" name="name" className={styles.input} />
      <ValidationError
        className={join(styles.hint, styles.error)}
        prefix="Name"
        field="name"
        errors={state.errors}
      />
      <label htmlFor="name">Your email address</label>
      <input type="email" name="email" className={styles.input} />
      <ValidationError
        className={join(styles.hint, styles.error)}
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="name">Your phone number</label>
      <input type="tel" name="phone" className={styles.input} />
      <ValidationError
        className={join(styles.hint, styles.error)}
        prefix="Phone"
        field="phone"
        errors={state.errors}
      />
      <label htmlFor="message">Your question or comment</label>
      <textarea name="message" />
      <ValidationError
        className={join(styles.hint, styles.error)}
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit">Send</button>
    </form>
  )
}

//  info@statysmd.com
//  https://reedbarger.com/how-to-use-react-hook-form-for-dead-simple-forms/
