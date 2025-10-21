// // ProgressBar.jsx
// import React from 'react';

// const ProgressBar = ({
//   progress = 95,
//   showPercentage = true,
//   height = "h-6",
//   backgroundColor = "bg-gray-200",
//   fillColor = "bg-gradient-to-r from-[#920259] to-[#7a004a]",
//   textColor = "text-gray-800",
//   className = ""
// }) => {
//   // Убеждаемся что прогресс в пределах 0-100
//   const normalizedProgress = Math.min(Math.max(progress, 0), 100);

//   return (
//     <div className={`flex items-center gap-4 ${className} relative mb-6`}>
//       {/* Прогресс бар */}
//       <div className={`flex-1 ${backgroundColor} rounded-full ${height} relative `}>
//         {/* Заполненная часть */}
//         <div
//           className={`${fillColor} ${height} rounded-full transition-all duration-300 ease-out`}
//           style={{ width: `${normalizedProgress}%` }}
//         >
//         </div>
//       </div>

//       {/* Медицинская иконка в большом кружке - абсолютное позиционирование */}
//       <div
//         className="absolute top-1/2 transform -translate-y-1/2 z-10"
//         style={{ left: `calc(${normalizedProgress}% - 136px)` }}
//       >
//         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
//           {/* <svg
//             className="w-8 h-8"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M9 12H15" stroke="#920259" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             <path d="M12 9L12 15" stroke="#920259" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="#920259" strokeWidth="2" />
//           </svg> */}
//           <svg className="w-8 h-8 ml-[-3px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#920259" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#920259" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
//         </div>
//       </div>

//       {/* Процент */}
//       {showPercentage && (
//         <div className={`text-4xl font-bold ${textColor} min-w-[80px]`}>
//           {normalizedProgress}%
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProgressBar;



import React from 'react';

const ProgressBar = ({
  progress = 95,
  showPercentage = true,
  className = ""
}) => {
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={`flex items-center gap-4 ${className} relative mb-8`}>
      {/* Прогресс бар */}
      <div className="flex-1 bg-gray-100 rounded-full h-3 relative overflow-hidden shadow-inner">
        {/* Заполненная часть с градиентом и анимацией */}
        <div
          className="bg-gradient-to-r from-[#920259] via-[#a80364] to-[#920259] h-3 rounded-full transition-all duration-500 ease-out relative"
          style={{ width: `${normalizedProgress}%` }}
        >
          {/* Анимированный блик */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
        </div>
      </div>

      {/* Иконка с чекмарком */}
      <div
        className="absolute top-1/2 transform -translate-y-1/2 z-10 transition-all duration-500"
        style={{ left: `calc(${normalizedProgress}% - 20px)` }}
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#920259]">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#920259" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#920259" strokeWidth="2" strokeLinecap="round"></path>
          </svg>
        </div>
      </div>

      {/* Процент с градиентом */}
      {showPercentage && (
        <div className="text-3xl font-bold bg-gradient-to-r from-[#920259] to-[#7a004a] bg-clip-text text-transparent min-w-[70px]">
          {normalizedProgress}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;