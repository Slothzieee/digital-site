import { Formik } from 'formik';

const Contact = () => {
    return(
        <div className='contact'>
            <h1>GET IN TOUCH</h1>
            <p>Contact me for any business query</p>
            <Formik
                initialValues={{ email: ''}}
            >{({values}) => (
                <form>
                    <div className='contact__field'>
                        <p>Your Name:</p>
                        <input type="text" name="name" placeholder='Your Full Name'/>
                    </div>

                    <div className='contact__field'>
                        <p>Your Email:</p>
                        <input type="email" name="email" placeholder='email@email.com'/>
                    </div>

                    <div className='contact__field'>
                        <p>Your Query:</p>
                        <textarea type="textarea" rows={10} name="query" placeholder='Details...'/>
                    </div>

                    <button type="submit">
                        SUBMIT
                    </button>
                </form>
              )}
            </Formik>
        </div>
    )
}

export default Contact