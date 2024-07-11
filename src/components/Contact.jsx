const Contact = ()=>{
    return(
        <section>
            <div>
                <h2>Envíame un mensaje</h2>
                <form action="">
                    <input type="text"  placeholder="Nombre"/>
                    <input type="email"  placeholder="Email"/>
                    <textarea name="Mensaje" id="mensaje" placeholder="Mensaje"></textarea>
                    <button>Enviar Correo</button>
                </form>
            </div>
            <div>
                <img src="./src/assets/padre-hijo.png" alt="Padre e Hijo" />
            </div>
        </section>
    )
}

export default Contact