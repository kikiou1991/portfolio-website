// "use server"

// import { Resend } from "resend"

// const resend =  new Resend(process.env.RESEND_API_KEY);

// export const sendEmail =  async (formData: FormData) => {
//   console.log("running on server")
//   console.log(formData.get("email"))
//   console.log(formData.get("message"))

//   resend.emails.send({
//     from: 'onboarding@resend.dev',
//     to: 'gadorjani@windowslive.com',
//     subject: 'Hello from Resend',
//     text: 'Hello world!',
//   })
// };
