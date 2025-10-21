// 'use client';
// import { useState, useRef, useEffect } from 'react';

// export default function CustomSelect({
//     value,
//     onChange,
//     options = [],
//     placeholder = "- Tanlang -",
//     required = false,
//     disabled = false,
//     label,
//     id,
//     displayMapping = null // Новый проп для маппинга отображения
// }) {
//     const [isOpen, setIsOpen] = useState(false);
//     const [searchTerm, setSearchTerm] = useState('');
//     const dropdownRef = useRef(null);

//     // Закрытие при клике вне
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//                 setSearchTerm('');
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     // Функция для получения отображаемого текста
//     const getDisplayText = (option) => {
//         return displayMapping && displayMapping[option] ? displayMapping[option] : option;
//     };

//     const filteredOptions = options.filter(option => {
//         const displayText = getDisplayText(option);
//         return displayText.toLowerCase().includes(searchTerm.toLowerCase());
//     });

//     const handleSelect = (option) => {
//         onChange(option); // Отправляем оригинальное значение (кириллицу)
//         setIsOpen(false);
//         setSearchTerm('');
//     };

//     const displayValue = value ? getDisplayText(value) : placeholder;

//     return (
//         <div className="relative" ref={dropdownRef}>
//             {label && (
//                 <label className="block text-sm font-semibold text-gray-800 mb-2">
//                     {label}
//                     {required && <span className="text-[#920259] ml-1">*</span>}
//                 </label>
//             )}

//             {/* Кнопка селекта */}
//             <button
//                 type="button"
//                 onClick={() => !disabled && setIsOpen(!isOpen)}
//                 disabled={disabled}
//                 className={`w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-left transition-all duration-200 ${disabled
//                     ? 'opacity-50 cursor-not-allowed'
//                     : 'hover:border-[#920259]/50 focus:bg-white focus:border-[#920259] focus:outline-none focus:ring-4 focus:ring-[#920259]/10'
//                     } ${!value ? 'text-gray-400' : 'text-gray-900'}`}
//             >
//                 <div className="flex items-center justify-between">
//                     <span>{displayValue}</span>
//                     <svg
//                         className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#920259]' : 'text-gray-400'}`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                     >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                     </svg>
//                 </div>
//             </button>

//             {/* Выпадающий список */}
//             {isOpen && (
//                 <div className="absolute z-50 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl max-h-64 overflow-hidden">
//                     {/* Поиск */}
//                     {options.length > 5 && (
//                         <div className="p-2 border-b border-gray-100">
//                             <input
//                                 type="text"
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                                 placeholder="Qidirish..."
//                                 className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#920259] focus:ring-2 focus:ring-[#920259]/10"
//                                 onClick={(e) => e.stopPropagation()}
//                             />
//                         </div>
//                     )}

//                     {/* Опции */}
//                     <div className="overflow-y-auto max-h-52 custom-scrollbar">
//                         {filteredOptions.length > 0 ? (
//                             filteredOptions.map((option, index) => {
//                                 const displayText = getDisplayText(option);
//                                 return (
//                                     <button
//                                         key={index}
//                                         type="button"
//                                         onClick={() => handleSelect(option)}
//                                         className={`w-full px-4 py-3 text-left transition-all duration-150 ${value === option
//                                             ? 'bg-gradient-to-r from-[#920259] to-[#7a004a] text-white font-medium'
//                                             : 'hover:bg-gray-50 text-gray-700'
//                                             }`}
//                                     >
//                                         {displayText}
//                                     </button>
//                                 );
//                             })
//                         ) : (
//                             <div className="px-4 py-3 text-gray-400 text-sm">Natija topilmadi</div>
//                         )}
//                     </div>
//                 </div>
//             )}

//             <style jsx>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 6px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: #f1f1f1;
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #920259;
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #7a004a;
//         }
//       `}</style>
//         </div>
//     );
// }








// OPTIMIZED VERSION
'use client';
import { useState, useRef, useEffect, useMemo, useCallback } from 'react';

export default function CustomSelect({
    value,
    onChange,
    options = [],
    placeholder = "- Tanlang -",
    required = false,
    disabled = false,
    label,
    id,
    displayMapping = null
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef(null);

    // Закрытие при клике вне
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen]);

    // Мемоизация функции получения отображаемого текста
    const getDisplayText = useCallback((option) => {
        return displayMapping && displayMapping[option] ? displayMapping[option] : option;
    }, [displayMapping]);

    // Мемоизация отфильтрованных опций
    const filteredOptions = useMemo(() => {
        if (!searchTerm) return options;

        return options.filter(option => {
            const displayText = getDisplayText(option);
            return displayText.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }, [options, searchTerm, getDisplayText]);

    // Мемоизация функции выбора
    const handleSelect = useCallback((option) => {
        onChange(option);
        setIsOpen(false);
        setSearchTerm('');
    }, [onChange]);

    // Мемоизация toggleOpen
    const toggleOpen = useCallback(() => {
        if (!disabled) {
            setIsOpen(prev => !prev);
        }
    }, [disabled]);

    // Мемоизация displayValue
    const displayValue = useMemo(() =>
        value ? getDisplayText(value) : placeholder,
        [value, placeholder, getDisplayText]
    );

    return (
        <div className="relative" ref={dropdownRef}>
            {label && (
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                    {label}
                    {required && <span className="text-[#920259] ml-1">*</span>}
                </label>
            )}

            {/* Кнопка селекта */}
            <button
                type="button"
                onClick={toggleOpen}
                disabled={disabled}
                className={`w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-left transition-all duration-200 ${disabled
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:border-[#920259]/50 focus:bg-white focus:border-[#920259] focus:outline-none focus:ring-4 focus:ring-[#920259]/10'
                    } ${!value ? 'text-gray-400' : 'text-gray-900'}`}
            >
                <div className="flex items-center justify-between">
                    <span>{displayValue}</span>
                    <svg
                        className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#920259]' : 'text-gray-400'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </button>

            {/* Выпадающий список */}
            {isOpen && (
                <div className="absolute z-50 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl max-h-64 overflow-hidden">
                    {/* Поиск */}
                    {options.length > 5 && (
                        <div className="p-2 border-b border-gray-100">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Qidirish..."
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#920259] focus:ring-2 focus:ring-[#920259]/10"
                                onClick={(e) => e.stopPropagation()}
                                autoFocus
                            />
                        </div>
                    )}

                    {/* Опции */}
                    <div className="overflow-y-auto max-h-52 custom-scrollbar">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option, index) => {
                                const displayText = getDisplayText(option);
                                const isSelected = value === option;

                                return (
                                    <button
                                        key={`${option}-${index}`}
                                        type="button"
                                        onClick={() => handleSelect(option)}
                                        className={`w-full px-4 py-3 text-left transition-all duration-150 ${isSelected
                                            ? 'bg-gradient-to-r from-[#920259] to-[#7a004a] text-white font-medium'
                                            : 'hover:bg-gray-50 text-gray-700'
                                            }`}
                                    >
                                        {displayText}
                                    </button>
                                );
                            })
                        ) : (
                            <div className="px-4 py-3 text-gray-400 text-sm">Natija topilmadi</div>
                        )}
                    </div>
                </div>
            )}

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #920259;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #7a004a;
                }
            `}</style>
        </div>
    );
}