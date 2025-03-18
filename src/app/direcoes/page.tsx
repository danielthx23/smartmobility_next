const Page = () => {
    return (
        <main>
            <div className="flex bg-gray-200 flex-col items-center md:flex-row">
                {/* Sidebar */}
                <div className="bg-white m-1 sm:m-0">
                    <aside className="w-24 md:w-full">
                        {/* Navigation Links */}
                        <div className="flex items-end h-8 px-2 w-full bg-neutral-800 text-white">
                            <a href="./direcoes.html" className="w-full text-white no-underline">
                                <h3 className="w-full sm:text-md text-center">Direções</h3>
                            </a>
                            <a href="./direcoes_linhas.html" className="w-full text-white no-underline">
                                <h3 className="w-full sm:text-md text-center">Linhas</h3>
                            </a>
                        </div>

                        {/* Route Form */}
                        <form id="routeForm" className="flex gap-2 p-3">
                            <div className="flex flex-col gap-2 items-center justify-center">
                                <i className="fa-solid fa-circle"></i>
                                <span className="absolute border-dotted border-b-2 w-1 h-full"></span>
                                <i className="fa-solid fa-circle text-red-500"></i>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        id="startLocation"
                                        placeholder="Escolha seu local de partida"
                                        className="sm:text-sm w-full py-2 border-none rounded border-b"
                                        required
                                    />
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        id="endLocation"
                                        placeholder="Escolha o seu destino"
                                        className="sm:text-sm w-full py-2 border-none rounded border-b"
                                        required
                                    />
                                </label>
                            </div>
                        </form>
                        <p className="text-center px-4 mb-4 sm:text-md">
                            Adicione seu local de origem e seu destino para obter uma lista das melhores rotas.
                        </p>
                    </aside>
                </div>

                {/* Map Section */}
                <div className="m-1 bg-gray-200 w-full">
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
                </div>
            </div>
        </main>
    );
};

export default Page;
