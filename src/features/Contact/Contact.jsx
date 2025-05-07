import './contact.scss'

export default function Contact () {

    

    return (
        <section className='section contact'>
            <h3 className='title'>Contactez moi pour un nouveau projet</h3>
            <form action="mailto:tibo.gleize@gmail.com" method='POST' encType="text/plain">
                <div className='contact-info'>
                    <label htmlFor="prénom">Prénom <input required name='prénom' id='prénom' type="text" /></label>
                    <label htmlFor="nom">Nom <input required name='nom' id='nom' type="text" /></label>
                    <label htmlFor="mail">E-mail <input required type="email" name='email' id='email'  /></label>
                </div>
                <label htmlFor="description">Dites moi tout sur votre futur projet</label>
                <div className='contact-request'>
                    <textarea required name="description" id="description"></textarea>
                </div>
                <input id='submit' type="submit" value="Envoyer" />
            </form>
        </section>
    )
}
