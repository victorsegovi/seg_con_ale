const Contact = ()=>{
    return(
        <section id="contacto" className="bg-phone flex flex-col p-4 pb-0 md:flex-row justify-between md:p-0 items-center md:items-stretch lg:items-center">
            <div className="flex flex-col gap-4 w-full max-w-[400px] md:w-1/2 md:p-8 lg:pl-16">
                <h2 className="text-[#F81842] font-bold text-2xl">Envíame un mensaje</h2>
                <form className="flex flex-col gap-4" ata-netlify="true" name="contact" method="post">
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="text"  placeholder="Nombre" name="name" className="p-3 rounded-md border border-[#40020E] placeholder:text-[#40020E] placeholder:font-semibold bg-[#F8F7F7]" required/>
                    <input type="email"  placeholder="Email" name="email" className="p-3 rounded-md border border-[#40020E] placeholder:text-[#40020E] placeholder:font-semibold bg-[#F8F7F7]" required/>
                    <textarea name="message" id="mensaje" placeholder="Message" className="resize-none run de p-3 rounded-md h-48 border border-[#40020E] placeholder:text-[#40020E] placeholder:font-semibold bg-[#F8F7F7]" required></textarea>
                    <button type="submit" className="font-bold text-[#F8F7F7] bg-[#F81842] rounded-md p-4">Enviar Correo</button>
                </form>
            </div>
            <div className="md:max-w-[unset] md:w-1/2 lg:w-2/3 lg:self-end">
                <img src="./padre-hijo.png" alt="Padre e Hijo" className="md:h-full" />
            </div>
        </section>
    )
}

export default Contact