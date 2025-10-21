// CustomSelect.jsx - Пример компонента для быстрого старта
// Разместите этот файл в components/CustomSelect.jsx

'use client';
import { useState, useRef, useEffect } from 'react';

export default function CustomSelect({
    id,
    value,
    onChange,
    options = [],
    displayMapping = null,
    placeholder = '- Tanlang -',
    required = false
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef(null);

    // Закрытие при клике вне компонента
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Фильтрация опций по поиску
    const filteredOptions = options.filter(option => {
        const displayText = displayMapping?.[option] || option;
        return displayText.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleSelect = (option) => {
        onChange(option);
        setIsOpen(false);
        setSearchTerm('');
    };

    const displayValue = value ? (displayMapping?.[value] || value) : placeholder;

    return (
        <div ref={dropdownRef} className="relative">
            {/* Кнопка селекта */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full px-4 py-3.5 bg-gray-50 border-2 rounded-xl text-left transition-all duration-200 focus:bg-white focus:border-[#920259] focus:outline-none focus:ring-4 focus:ring-[#920259]/10 ${value ? 'text-gray-900' : 'text-gray-400'
                    } ${isOpen ? 'border-[#920259] bg-white ring-4 ring-[#920259]/10' : 'border-gray-200'}`}
            >
                <div className="flex items-center justify-between">
                    <span className="truncate">{displayValue}</span>
                    <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            {/* Скрытый input для HTML5 валидации */}
            {required && (
                <input
                    type="text"
                    value={value}
                    onChange={() => { }}
                    required
                    className="absolute inset-0 opacity-0 pointer-events-none"
                    tabIndex={-1}
                />
            )}

            {/* Dropdown меню */}
            {isOpen && (
                <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl border-2 border-gray-200 overflow-hidden">
                    {/* Поле поиска */}
                    {options.length > 5 && (
                        <div className="p-3 border-b border-gray-200">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Qidirish..."
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#920259]/20 focus:border-[#920259]"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    )}

                    {/* Список опций */}
                    <div className="max-h-64 overflow-y-auto">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option, index) => {
                                const displayText = displayMapping?.[option] || option;
                                const isSelected = value === option;

                                return (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => handleSelect(option)}
                                        className={`w-full px-4 py-3 text-left transition-colors ${isSelected
                                                ? 'bg-gradient-to-r from-[#920259] to-[#7a004a] text-white font-medium'
                                                : 'hover:bg-gray-50 text-gray-900'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{displayText}</span>
                                            {isSelected && (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </div>
                                    </button>
                                );
                            })
                        ) : (
                            <div className="px-4 py-8 text-center text-gray-500">
                                Hech narsa topilmadi
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

/* 
АЛЬТЕРНАТИВА: Простой нативный select (если не нужна кастомизация)

export default function CustomSelect({ 
  id, 
  value, 
  onChange, 
  options = [], 
  displayMapping = null,
  placeholder = '- Tanlang -', 
  required = false 
}) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 appearance-none transition-all duration-200 focus:bg-white focus:border-[#920259] focus:outline-none focus:ring-4 focus:ring-[#920259]/10"
      >
        <option value="">{placeholder}</option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {displayMapping?.[option] || option}
          </option>
        ))}
      </select>
      
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
*/