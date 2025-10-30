import { NextResponse } from 'next/server';

export async function POST(request) {
    console.log('=== API Route Called ===');

    try {
        // Шаг 1: Парсинг тела запроса
        console.log('Step 1: Parsing request body...');
        const body = await request.json();
        console.log('Request body:', body);

        const { name, phone, education, program, language, url } = body;

        // Шаг 2: Проверка переменных окружения
        console.log('Step 2: Checking environment variables...');
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        console.log('Bot token exists:', !!botToken);
        console.log('Bot token length:', botToken?.length);
        console.log('Chat ID exists:', !!chatId);
        console.log('Chat ID value:', chatId);

        if (!botToken || !chatId) {
            console.error('❌ Missing credentials!');
            console.error('TELEGRAM_BOT_TOKEN:', botToken ? 'EXISTS' : 'MISSING');
            console.error('TELEGRAM_CHAT_ID:', chatId ? 'EXISTS' : 'MISSING');
            return NextResponse.json(
                { error: 'Server configuration error - Missing credentials' },
                { status: 500 }
            );
        }

        // Шаг 3: Формирование сообщения
        console.log('Step 3: Building message...');
        const educationLabels = {
            ru: {
                school: 'Школа (10-11 класс)',
                lyceum: 'Лицей/Колледж',
                graduated: 'Выпускник средней школы'
            },
            uz: {
                school: 'Maktab (10-11 sinf)',
                lyceum: 'Litsey/Kollej',
                graduated: 'O\'rta maktab bitiruvchisi'
            }
        };

        const programLabels = {
            ru: {
                '6month': '6 месяцев - Интенсивная программа',
                '3month': '3 месяца - Ускоренная программа'
            },
            uz: {
                '6month': '6 oy - Intensiv dastur',
                '3month': '3 oy - Tezlashtirilgan dastur'
            }
        };

        const educationText = educationLabels[language]?.[education] || education;
        const programText = programLabels[language]?.[program] || program;

        const message = `
<b>ЗАЯВКА - EMU Pre-Foundation</b>

<b>ФИО:</b> ${name}
<b>Телефон:</b> ${phone}
<b>Образование:</b> ${educationText}
<b>Период обучения:</b> ${programText}
<b>Язык:</b> ${language.toUpperCase()}

<b>URL:</b> ${url}

<b>Дата:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' })}
        `.trim();

        console.log('Message prepared, length:', message.length);

        // Шаг 4: Отправка в Telegram
        console.log('Step 4: Sending to Telegram...');
        const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        console.log('Telegram API URL constructed');

        const telegramPayload = {
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML' // Включаем HTML форматирование
        };

        console.log('Telegram payload:', JSON.stringify(telegramPayload, null, 2));

        const telegramResponse = await fetch(telegramApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(telegramPayload),
        });

        console.log('Telegram response status:', telegramResponse.status);

        const responseData = await telegramResponse.json();
        console.log('Telegram response data:', responseData);

        if (!telegramResponse.ok) {
            console.error('❌ Telegram API error:', responseData);

            // Детальная информация об ошибке
            if (responseData.description) {
                console.error('Error description:', responseData.description);
            }

            return NextResponse.json(
                {
                    error: 'Failed to send message to Telegram',
                    details: responseData.description || 'Unknown error',
                    telegram_error: responseData
                },
                { status: 500 }
            );
        }

        console.log('✅ Message sent successfully!');

        return NextResponse.json(
            { success: true, message: 'Form submitted successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('❌ Error processing form submission:', error);
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);

        return NextResponse.json(
            {
                error: 'Failed to process form submission',
                errorMessage: error.message,
                errorName: error.name
            },
            { status: 500 }
        );
    }
}