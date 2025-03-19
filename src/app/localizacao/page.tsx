const Localizacao = () => {
    return (
        <main className="bg-[#5BC7CA] w-full flex flex-col items-center justify-center p-12 md:p-16 gap-8">
            <h2 className="text-2xl font-bold text-black">Essa é a sua localização atual</h2>
            <iframe
                        id="mapIframe"
                        width="100%"
                        height="700"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/view?key=AIzaSyC5QsQ9OvxX1V-V0sKoGMmBCDgBbJ1FO44&center=-23.55052,-46.633308&zoom=12"
                    />
        </main>
    )
}

export default Localizacao;