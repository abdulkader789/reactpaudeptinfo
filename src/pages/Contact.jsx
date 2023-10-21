import '../styles/contact.css'
const Contact = () => {
    return (

        <section className="contact_us ">
            <div className="contact_form_inner ">
                <div className="contact_field">
                    <h3>Contatc Us</h3>
                    <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                    <div>
                        <input type="text" className="form-control w-1/2 form-group" placeholder="Name" />
                        <input type="text" className="form-control form-group w-1/2" placeholder="Email" />
                    </div>
                    <textarea rows={5} className="form-control  w-full form-group relative" placeholder="Message"></textarea>
                    <button className="contact_form_submit">Send</button>
                </div>
            </div>
        </section>



    );
};

export default Contact;