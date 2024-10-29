const skills = function () {
    return {
        languages: [
            {
                name: 'HTML',
                image: 'images/html5.svg',
                description:
                    'HTML is essential for creating web content with a wide range of applications, constantly evolving to meet changing needs and remaining vital.',
            },
            {
                name: 'CSS',
                image: 'images/css.svg',
                description: 'CSS is critical for creating visually appealing and consistent web designs across devices and platforms.',
            },
            {
                name: 'JavaScript',
                image: 'images/js.svg',
                description:
                    'JavaScript has grown to become one of the most popular programming languages in the world, with a large and active developer community.',
            },
            {
                name: 'PHP',
                image: 'images/php.svg ',
                description:
                    'PHP is a popular server-side scripting language for web development, known for its simplicity, flexibility, and strong support for database integration.',
            },
            {
                name: 'Kotlin',
                image: 'images/kotlin.svg ',
                description:
                    'Kotlin is a modern, concise programming language that is fully compatible with Java, designed to improve productivity and safety, especially for Android development.',
            },
            {
                name: 'Java',
                image: 'images/java.svg ',
                description:
                    'Java is a versatile, object-oriented programming language known for its portability, scalability, and extensive use in enterprise applications and Android development.',
            },
            {
                name: 'TypeScript',
                image: 'images/typescript.svg ',
                description:
                    'TypeScript is a superset of JavaScript that adds static typing, enhancing code reliability, readability, and scalability for large-scale web applications.',
            },

        ],
        async load() {
            try {
                const res = await fetch('https://nextjs-wakatime-tool.vercel.app/api/wakatime/WesleyDSantos', { method: 'GET' });

                // Ensure the response was successful
                if (!res.ok) {
                    console.error("Error fetching data:", res.status, res.statusText);
                    return;
                }

                const stats = await res.json();
                console.log("This is what I am receiving", JSON.stringify(stats));

                // Extract languages directly, as this is what the API returns
                const languages = stats.languages;
                const languagesIWant = ['HTML', 'CSS', 'JavaScript'];

                const languageStatsList = languages.filter(l => languagesIWant.includes(l.name));

                for (let i = 0; i < languageStatsList.length; i++) {
                    const languageStats = languageStatsList[i];
                    const targetLanguage = this.languages.find(l => l.name === languageStats.name);

                    // Only set properties if targetLanguage exists
                    if (targetLanguage) {
                        targetLanguage.hours = languageStats.hours;
                        targetLanguage.decimal = languageStats.decimal;
                    }
                }
            } catch (error) {
                console.error("Error in load function:", error);
            }
        },
        progress(language) {
            const percentage = (language.decimal / 320) * 100;
            return `${percentage}%`;
        },
    };
};

// Assign skills to window object
window.skills = skills();
