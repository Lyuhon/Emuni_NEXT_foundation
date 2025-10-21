// app/old/registration/components/Footer.js
export default function Footer() {
    return (
        <footer className="mt-16 bg-gradient-to-br from-[#920259] via-[#7a004a] to-[#5a0038] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Biz bilan bog&apos;laning</h2>
                    <p className="text-white/80 text-lg">Savollaringiz bormi? Biz sizga yordam berishga tayyormiz</p>
                </div>

                <div className="grid grid-cols-3 gap-8 mb-12">
                    <a href="https://yandex.uz/maps/-/CLFVrZpE" target="_blank" rel="noopener noreferrer" className="group text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2">Manzil</h3>
                        <p className="hidden md:block text-white/80">Muqimiy ko&apos;chasi 7/1,<br />Toshkent, O&apos;zbekiston</p>
                    </a>

                    <a href="tel:+998781470007" className="group text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2">Telefon</h3>
                        <p className="hidden md:block text-white/80 hover:text-white transition-colors text-lg">
                            +998(78) 147-00-07
                        </p>
                    </a>

                    <a href="https://t.me/emuintash" target="_blank" rel="noopener noreferrer" className="group text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"></path>
                            </svg>
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2">Telegram</h3>
                        <p className="hidden md:block text-white/80 hover:text-white transition-colors text-lg">
                            @emuintash
                        </p>
                    </a>
                </div>

                <div className="h-px bg-white/20 mb-8"></div>

                <div className="text-center text-white/60 text-sm">
                    <p>&copy; 2025 EMU University. Barcha huquqlar himoyalangan.</p>
                </div>
            </div>
        </footer>
    );
}