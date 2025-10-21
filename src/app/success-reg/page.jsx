// // app/success/page.js
// 'use client';
// import Link from 'next/link';

// export default function SuccessPage() {
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
//             {/* Декоративные элементы фона */}
//             <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#920259]/5 to-transparent rounded-full blur-3xl -z-10"></div>
//             <div className="fixed bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#7a004a]/5 to-transparent rounded-full blur-3xl -z-10"></div>

//             <div className="max-w-2xl mx-auto px-4 py-8">
//                 {/* Логотип и заголовок */}
//                 <div className="text-center mb-8">
//                     <div className="inline-block mb-6 relative">
//                         <div className="absolute inset-0 bg-gradient-to-r from-[#920259] to-[#7a004a] rounded-2xl blur-xl opacity-20"></div>
//                         {/* <img
//                             src="/emu-logo.jpg"
//                             alt="EMU University"
//                             className="relative w-60 h-auto rounded-2xl shadow-lg border border-gray-100"
//                         /> */}
//                     </div>
//                 </div>

//                 {/* Карточка успеха */}
//                 <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 mb-8 border border-gray-100">
//                     {/* Иконка успеха */}
//                     <div className="text-center mb-8">
//                         <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-100 to-green-50 rounded-full mb-6 relative group">
//                             <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
//                             <svg className="relative w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                             </svg>
//                         </div>

//                         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                             Tabriklaymiz!
//                         </h1>
//                         <p className="text-lg text-gray-600 mb-6">
//                             Muvaffaqiyatli ro'yxatdan o'tdingiz
//                         </p>

//                         {/* Информационный блок */}
//                         <div className="mt-12 px-4">
//                             <div className="flex items-start gap-3">
//                                 <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#920259] to-[#7a004a] rounded-xl flex items-center justify-center shadow-lg">
//                                     <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                                     </svg>
//                                 </div>
//                                 <div className="text-left">
//                                     <p className="text-gray-700 text-base leading-relaxed">
//                                         Siz bilan <span className="font-bold text-[#920259]">24 soat ichida</span> qabul bo'limi mutaxassislari bog'lanishadi.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Контактная информация */}
//                     <div className="mt-12">
//                         <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Savollaringiz bormi?</h2>

//                         <div className="space-y-4">
//                             {/* Telefon */}
//                             <a href="tel:+998781470007" className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group border border-gray-100">
//                                 <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                                     <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-sm font-semibold text-gray-700 mb-1">Telefon</h3>
//                                     <p className="text-base text-[#920259] hover:text-[#7a004a] font-semibold transition-colors">
//                                         +998(78) 147-00-07
//                                     </p>
//                                 </div>
//                             </a>

//                             {/* Telegram */}
//                             <a href="https://t.me/emuintash" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group border border-gray-100">
//                                 <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                                     <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"></path>
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-sm font-semibold text-gray-700 mb-1">Telegram orqali aloqa</h3>
//                                     <p className="text-base text-[#920259] hover:text-[#7a004a] font-semibold transition-colors">
//                                         @emuintash
//                                     </p>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>

//                     {/* Кнопка возврата */}
//                     <div className="mt-8">
//                         <Link
//                             href="/"
//                             className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#920259] to-[#7a004a] text-white font-semibold rounded-xl shadow-lg shadow-[#920259]/30 hover:shadow-xl hover:shadow-[#920259]/40 transition-all duration-300 hover:-translate-y-0.5 group"
//                         >
//                             <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
//                             </svg>
//                             <span className="relative">
//                                 {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div> */}
//                                 Bosh sahifaga qaytish
//                             </span>
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer на всю ширину */}
//             <footer className="mt-16 bg-gradient-to-br from-[#920259] via-[#7a004a] to-[#5a0038] relative overflow-hidden">
//                 {/* Декоративные элементы */}
//                 <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
//                 <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

//                 <div className="relative max-w-7xl mx-auto px-4 py-16">
//                     {/* Заголовок секции */}
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Biz bilan bog'laning</h2>
//                         <p className="text-white/80 text-lg">Savollaringiz bormi? Biz sizga yordam berishga tayyormiz</p>
//                     </div>

//                     {/* Контактная информация */}
//                     <div className="grid grid-cols-3 gap-8 mb-12">
//                         {/* Manzil */}
//                         <a href="https:yandex.uz/maps/-/CLFVrZpE" target="_blank" rel="noopener noreferrer" className="group text-center">
//                             <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
//                                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                                 </svg>
//                             </div>
//                             <h3 className="text-white font-semibold text-lg mb-2">Manzil</h3>
//                             <p className="hidden md:block text-white/80">Muqimiy ko'chasi 7/1,<br />Toshkent, O'zbekiston</p>
//                         </a>

//                         {/* Telefon */}
//                         <a href="tel:+998781470007" className="group text-center">
//                             <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
//                                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
//                                 </svg>
//                             </div>
//                             <h3 className="text-white font-semibold text-lg mb-2">Telefon</h3>
//                             <p className="hidden md:block text-white/80 hover:text-white transition-colors text-lg">
//                                 +998(78) 147-00-07
//                             </p>
//                         </a>

//                         {/* Telegram */}
//                         <a href="https:t.me/emuintash" target="_blank" rel="noopener noreferrer" className="group text-center">
//                             <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
//                                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"></path>
//                                 </svg>
//                             </div>
//                             <h3 className="text-white font-semibold text-lg mb-2">Telegram</h3>
//                             <p className="hidden md:block text-white/80 hover:text-white transition-colors text-lg">
//                                 @emuintash
//                             </p>
//                         </a>
//                     </div>

//                     {/* Разделитель */}
//                     <div className="h-px bg-white/20 mb-8"></div>

//                     {/* Нижняя часть футера */}
//                     <div className="text-center text-white/60 text-sm">
//                         <p>&copy; 2025 EMU University. Barcha huquqlar himoyalangan.</p>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// }


// app/success/page.js
'use client';
import Link from 'next/link';

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Декоративные элементы */}
            <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#920259]/5 to-transparent rounded-full blur-3xl -z-10"></div>
            <div className="fixed bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#7a004a]/5 to-transparent rounded-full blur-3xl -z-10"></div>

            {/* Header */}
            <header className="bg-[#920259] border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm">
                <div className="bg-[#920259] max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img
                                src="https://www.emuni.uz/_next/image?url=https%3A%2F%2Fnext.emu.web-perfomance.uz%2Fwp-content%2Fuploads%2F2025%2F04%2Fnew_emu_logo-min.png&w=320&q=75"
                                alt="EMU"
                                className="relative w-32 md:w-40 h-auto rounded-[5px]"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <section className="relative overflow-hidden py-20">
                <div className="relative max-w-4xl mx-auto px-6">

                    {/* Success Card */}
                    <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 md:p-12 mb-8 border border-gray-100 relative overflow-hidden">
                        {/* Декоративные элементы внутри карточки */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#920259]/5 to-transparent rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#7a004a]/5 to-transparent rounded-full blur-3xl"></div>

                        <div className="relative">
                            {/* Иконка успеха */}
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-green-50 to-green-100 rounded-full mb-6 relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                    <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>

                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                    Tabriklaymiz!
                                </h1>
                                <p className="text-xl text-gray-600 mb-8">
                                    Sizning arizangiz muvaffaqiyatli qabul qilindi
                                </p>

                                {/* Информационный блок */}
                                <div className="mt-8 p-6 bg-white border-2 border-gray-200 rounded-2xl">
                                    <div className="flex items-start gap-4 justify-center">
                                        {/* <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#920259] to-[#7a004a] rounded-xl flex items-center justify-center shadow-lg">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div> */}
                                        <div className="text-left">
                                            <p className="text-gray-700 text-lg leading-relaxed">
                                                Siz bilan <span className="font-bold text-[#920259]">24 soat ichida</span> qabul bo&apos;limi mutaxassislari bog&apos;lanishadi va keyingi qadamlar haqida ma&apos;lumot berishadi.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Контактная информация */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                    Savollaringiz bormi?
                                </h2>
                                <p className="text-center text-gray-600 mb-8">
                                    Biz bilan bog&apos;laning va barcha savollaringizga javob oling
                                </p>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {/* Telefon */}
                                    <a
                                        href="tel:+998781470007"
                                        className="group p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-[#920259] hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                                </svg>
                                            </div>
                                            <div className="text-left">
                                                <h3 className="text-sm font-semibold text-gray-600 mb-2 tracking-wide">Telefon</h3>
                                                <p className="text-lg text-[#920259] group-hover:text-[#7a004a] font-bold transition-colors">
                                                    +998(78) 147-00-07
                                                </p>
                                            </div>
                                        </div>
                                    </a>

                                    {/* Telegram */}
                                    <a
                                        href="https://t.me/emuintash"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-[#920259] hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"></path>
                                                </svg>
                                            </div>
                                            <div className="text-left">
                                                <h3 className="text-sm font-semibold text-gray-600 mb-2 tracking-wide">Telegram</h3>
                                                <p className="text-lg text-[#920259] group-hover:text-[#7a004a] font-bold transition-colors">
                                                    @emuintash
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Кнопка возврата */}
                            <div className="mt-10">
                                <Link
                                    href="/"
                                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#920259] to-[#7a004a] text-white font-semibold rounded-xl shadow-lg shadow-[#920259]/30 hover:shadow-xl hover:shadow-[#920259]/40 transition-all duration-300 hover:-translate-y-0.5 group"
                                >
                                    <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                    </svg>
                                    <span>Bosh sahifaga qaytish</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Дополнительная информация */}
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#920259] to-[#7a004a] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <span className="text-white font-bold text-lg">1</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Ariza qabul qilindi</h3>
                            <p className="text-sm text-gray-600">Ma&apos;lumotlaringiz qayta ko&apos;rib chiqiladi</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#920259] to-[#7a004a] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <span className="text-white font-bold text-lg">2</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Aloqa o&apos;rnatamiz</h3>
                            <p className="text-sm text-gray-600">24 soat ichida siz bilan bog&apos;lanamiz</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#920259] to-[#7a004a] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <span className="text-white font-bold text-lg">3</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Qabul jarayoni</h3>
                            <p className="text-sm text-gray-600">Keyingi qadamlar haqida ma&apos;lumot beramiz</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-[#920259] via-[#7a004a] to-[#5a0038] relative overflow-hidden mt-16">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-6 py-16 pb-10">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <div>
                                    <h4 className="text-xl font-bold text-white">EMU University</h4>
                                    <p className="text-white/60 text-sm">Excellence in Education</p>
                                </div>
                            </div>
                            <p className="text-white/80 leading-relaxed mb-6">
                                Bizni tanlang va Toshkent shahrida nufuzli ta&apos;lim oling! Bizda buyuk shifokorlarning munosib vorislari – ajoyib insonlar, dunyoga mashhur olimlar, ajoyib mutaxassislar va yetuk pedagoglar faoliyat olib boradilar.
                            </p>
                            <div className="flex gap-3">
                                <a href="https://t.me/emuintash" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"></path>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/emu_university" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="https://www.facebook.com/emuuniversityuz" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h5 className="font-semibold text-white mb-4">Aloqa</h5>
                            <ul className="space-y-3 text-white/80">
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
                                    </svg>
                                    <span>Muqimiy ko&apos;chasi 7/1<br />Toshkent, O&apos;zbekiston</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    +998(78) 147-00-07
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10">
                        <p className="text-white/60 text-sm text-center">
                            &copy; 2025 EMU University. Barcha huquqlar himoyalangan.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}