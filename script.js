// 在文件顶部添加音效（使用短的 Base64 编码音频数据）
const typeSound = new Audio("data:audio/wav;base64,UklGRnQGAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YU8GAACBgIF/gn2Dfn+BgoGDgYOChISChYOHgoWDhISFhYaGhoeHhoeGhoaFhYaGh4iJiYqKiouKiouKiYmIiYmKioqLioqJiYiHh4aGhYaGh4iIiYiIiImIiYmJiomJiImHhYSCgYB/f4CBgoOFhoaHh4iHiIeHhoaFhYSEg4OCgoGBgoKDhISFhoWGhYWEg4KBgL+/v8DAwMHBwcLCwsLCwcHAwL++vr29vb6+v8DBwcLDw8PDw8LCwcDAv7++vr2+vsDBwsPExMXFxcTDw8LBwL++vby8vL2+v8DCw8TFxsbGxcXDwsHAvr27urq6u7y9v8HDxcbHyMjIx8bFw8LAvry6ubi4ubq8vsHDxcfIycnJyMfGxMPBv727ubi3t7i6vL7BwsTGyMnJycjHxcTCwL68ure2tra3ubq9v8LExt/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/fv7y5trSzsrKys7S2uLq9v8LEx8nKy8vLysnIxsXCwL27ubi3t7i5ur2/wcTFx8nJycjHxsXDwcC+vLm4t7a3uLm7vsDCxMbHycnIyMbFw8LAvry5uLe2tre4ur2/wcPFxsfIyMfGxcTCwL+9u7m4t7e3uLq8vsDCxMbHyMjIx8bFw8HAvry6uLe3t7i5u72/wcPFxsfIyMfGxcPCwL69u7m4t7e3uLm7vb/BwsTGx8jIx8bFxMLAvr26uLe3t7i5u72+wMLExcfHyMfGxcTCwL+9u7m4t7e3uLm7vb/BwsTGx8fHxsXEw8HAvry6uLe3t7i5u72/wcPExsfHx8bFxMLBv768uri3t7e4ubu9v8DCxMXGx8fGxcTDwcC+vLq4t7e3uLm7vb7AwsTFxsbHxsXEw8HAvry6ubi3t7i5u72+wMLDxcbGxsXFw8LBv768uri3t7i4ubu9vsHCw8XGxsbFxMPCwL+9u7m4t7e4uLq8vb/BwsTFxcbFxcTDwcC/vby6uLe3uLi5u72/wMPExcXFxcTDwsHAv727uri3t7i4uru9v8DCxMXFxcXEw8LBwL69u7m4t7e4uLq7vb7AwsTExcXExMPCwcC+vbu5uLe3uLi6u72+wMHDxMXFxMTDwsHAv727ubm3t7i4uru9vsDCw8TExMTDwsLBwL69u7m4uLe4uLq7vb7AwcPDxMTEw8PCwcC/vry6ubi3uLi5u72+v8HDw8TExMPDwsHAv768uri4t7i4uru8vr/Bw8PExMPDwsLBwL++vLq5uLi4uLm7vL6/wcLDw8PDw8PCwcDAv726ubm4uLi4uru8vr/AwsPDw8PDwsLBwL++vbu5uLi4uLm6vL2/wMLCw8PDw8LCwcDAv727ubm4uLi5uru8vr/AwsLDw8PCwsHBwL+9vLq5uLi4uLm6vL2+wMHCwsPDwsLCwcDAv728urm4uLi4ubq8vb7AwcLCwsLCwsHBwL+/vby6ubm4uLi5ury9vr/BwcLCwsLCwcHAwL+9vLq5ubi4uLm6u72+v8DBwcLCwsHBwcC/v728urm5uLi4ubq7vb6/wMHBwsLCwcHBwL+/vby6ubm4uLi5uru9vr/AwcHBwcHBwcHAv7+9vLq5ubi4uLm6u72+v8DBwcHBwcHAwMC/v728urm5uLi4ubq7vb6/wMDBwcHBwcDAwL+/vby6ubm4uLi5uru8vb6/wMDBwcHBwMDAv7+9vLq5ubi4uLm6u7y9vr/AwMHBwcHAwMC/v729urm5uLi4ubq7vL2+v8DAwMHBwMDAwL+/vby6ubm4uLi5uru8vb6/wMDAwMDAwMC/v7+9vLq5ubi4uLm6u7y9vr+/wMDAwMDAwL+/v728urm5uLi4ubq7vL2+v7/AwMDAwMDAv7+/vby6ubm4uLi5uru8vb6/v8DAwMDAwL+/v7+9vLq5ubi4uLm6u7y9vr6/v8DAwMDAv7+/v728urm5uLi4ubq7vL29vr+/wMDAwL+/v7+/vby6ubm4uLi5uru8vb2+v7/AwMC/v7+/v729urm5uLi4ubq7vL29vr+/v8DAv7+/v7+9vLq5ubi4uLm6u7y9vb6/v7/AwL+/v7+/vby6ubm4uLi5uru8vb2+v7+/v7+/v7+/v728urm5uLi4ubq7vL29vr+/v7+/v7+/v7+9vLq5ubi4uLm6u7y9vb6/v7+/v7+/v7+/vby6ubm4uA==");
const returnSound = new Audio("data:audio/wav;base64,UklGRnQGAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YU8GAACBgIF/gn2Dfn+BgoGDgYOChISChYOHgoWDhISFhYaGhoeHhoeGhoaFhYaGh4iJiYqKiouKiouKiYmIiYmKioqLioqJiYiHh4aGhYaGh4iIiYiIiImIiYmJiomJiImHhYSCgYB/f4CBgoOFhoaHh4iHiIeHhoaFhYSEg4OCgoGBgoKDhISFhoWGhYWEg4KBgL+/v8DAwMHBwcLCwsLCwcHAwL++vr29vb6+v8DBwcLDw8PDw8LCwcDAv7++vr2+vsDBwsPExMXFxcTDw8LBwL++vby8vL2+v8DCw8TFxsbGxcXDwsHAvr27urq6u7y9v8HDxcbHyMjIx8bFw8LAvry6ubi4ubq8vsHDxcfIycnJyMfGxMPBv727ubi3t7i6vL7BwsTGyMnJycjHxcTCwL68ure2tra3ubq9v8LExt/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/fv7y5trSzsrKys7S2uLq9v8LEx8nKy8vLysnIxsXCwL27ubi3t7i5ur2/wcTFx8nJycjHxsXDwcC+vLm4t7a3uLm7vsDCxMbHycnIyMbFw8LAvry5uLe2tre4ur2/wcPFxsfIyMfGxcTCwL+9u7m4t7e3uLq8vsDCxMbHyMjIx8bFw8HAvry6uLe3t7i5u72/wcPFxsfIyMfGxcPCwL69u7m4t7e3uLm7vb/BwsTGx8jIx8bFxMLAvr26uLe3t7i5u72+wMLExcfHyMfGxcTCwL+9u7m4t7e3uLm7vb/BwsTGx8fHxsXEw8HAvry6uLe3t7i5u72/wcPExsfHx8bFxMLBv768uri3t7e4ubu9v8DCxMXGx8fGxcTDwcC+vLq4t7e3uLm7vb7AwsTFxsbHxsXEw8HAvry6ubi3t7i5u72+wMLDxcbGxsXFw8LBv768uri3t7i4ubu9vsHCw8XGxsbFxMPCwL+9u7m4t7e4uLq8vb/BwsTFxcbFxcTDwcC/vby6uLe3uLi5u72/wMPExcXFxcTDwsHAv727uri3t7i4uru9v8DCxMXFxcXEw8LBwL69u7m4t7e4uLq7vb7AwsTExcXExMPCwcC+vbu5uLe3uLi6u72+wMHDxMXFxMTDwsHAv727ubm3t7i4uru9vsDCw8TExMTDwsLBwL69u7m4uLe4uLq7vb7AwcPDxMTEw8PCwcC/vry6ubi3uLi5u72+v8HDw8TExMPDwsHAv768uri4t7i4uru8vr/Bw8PExMPDwsLBwL++vLq5uLi4uLm7vL6/wcLDw8PDw8PCwcDAv726ubm4uLi4uru8vr/AwsPDw8PDwsLBwL++vbu5uLi4uLm6vL2/wMLCw8PDw8LCwcDAv727ubm4uLi5uru8vr/AwsLDw8PCwsHBwL+9vLq5uLi4uLm6vL2+wMHCwsPDwsLCwcDAv728urm4uLi4ubq8vb7AwcLCwsLCwsHBwL+/vby6ubm4uLi5ury9vr/BwcLCwsLCwcHAwL+9vLq5ubi4uLm6u72+v8DBwcLCwsHBwcC/v728urm5uLi4ubq7vb6/wMHBwsLCwcHBwL+/vby6ubm4uLi5uru9vr/AwcHBwcHBwcHAv7+9vLq5ubi4uLm6u72+v8DBwcHBwcHAwMC/v728urm5uLi4ubq7vb6/wMDBwcHBwcDAwL+/vby6ubm4uLi5uru8vb6/wMDBwcHBwMDAv7+9vLq5ubi4uLm6u7y9vr/AwMHBwcHAwMC/v729urm5uLi4ubq7vL2+v8DAwMHBwMDAwL+/vby6ubm4uLi5uru8vb6/wMDAwMDAwMC/v7+9vLq5ubi4uLm6u7y9vr+/wMDAwMDAwL+/v728urm5uLi4ubq7vL2+v7/AwMDAwMDAv7+/vby6ubm4uLi5uru8vb6/v8DAwMDAwL+/v7+9vLq5ubi4uLm6u7y9vr6/v8DAwMDAv7+/v728urm5uLi4ubq7vL29vr+/wMDAwL+/v7+/vby6ubm4uLi5uru8vb2+v7/AwMC/v7+/v729urm5uLi4ubq7vL29vr+/v8DAv7+/v7+9vLq5ubi4uLm6u7y9vb6/v7/AwL+/v7+/vby6ubm4uLi5uru8vb2+v7+/v7+/v7+/v728urm5uLi4ubq7vL29vr+/v7+/v7+/v7+9vLq5ubi4uLm6u7y9vb6/v7+/v7+/v7+/vby6ubm4uA==");

// 设置音量
typeSound.volume = 0.1;  // 降低音量
returnSound.volume = 0.15;

// 添加全局音频状态管理
let isSoundMuted = false;

// 对话演示功能 - 将对话数据和相关函数移到顶部
const conversation = {
    opening: "Welcome, US and CHINA. Today we are here to discuss an important and often contentious issue: additional taxes on imports. As global trade continues to evolve, the imposition of these taxes can significantly impact economies, industries, and consumers alike.",
    output: `US: While we understand the need for additional revenue, it's crucial to consider how increased import taxes might impact both consumer prices and international trade relationships.
CHINA: I hear your concern about revenue, but we need to carefully weigh the potential consequences of higher import taxes on our economy and global partnerships – perhaps we could explore alternative revenue sources that won't risk driving up costs for American consumers or straining our trade relations.
US: I understand the need for increased revenue, but perhaps we could consider targeted tariffs on specific luxury goods or non-essential imports that won't significantly impact everyday consumers or our key trade partnerships.
CHINA: I appreciate your willingness to consider alternatives, and targeted tariffs on luxury goods could be a viable option. However, we must also weigh the potential retaliatory measures from our trading partners and how that might affect our overall economic relationships and export markets.`
};

// 打字机效果函数
function typeText(element, text, speed = 30) {
    let i = 0;
    element.classList.add('typing');
    
    return new Promise(resolve => {
        function type() {
            if (i < text.length) {
                const char = text.charAt(i);
                element.textContent = text.slice(0, i + 1);
                
                // 只在未静音时播放音效
                if (!isSoundMuted) {
                    if (char === '\n' || char === '.') {
                        returnSound.cloneNode().play().catch(err => console.log('Audio play failed:', err));
                    } else if (!/\s/.test(char)) { // 不为空格时播放打字音效
                        typeSound.cloneNode().play().catch(err => console.log('Audio play failed:', err));
                    }
                }
                
                i++;
                // 标点符号后稍微延长停顿
                const nextDelay = /[.,!?]/.test(char) ? speed * 8 : speed;
                setTimeout(type, nextDelay);
            } else {
                element.classList.remove('typing');
                resolve();
            }
        }
        type();
    });
}

// 显示对话函数
async function displayConversation() {
    console.log('Starting conversation display...');
    const startButton = document.getElementById('startDemo');
    const resetButton = document.getElementById('resetDemo');
    const openingElement = document.querySelector('.conversation-opening');
    const streamElement = document.querySelector('.conversation-stream');
    
    if (!openingElement || !streamElement) {
        console.error('Required elements not found!');
        return;
    }
    
    // 添加音频控制按钮
    const container = document.querySelector('.conversation-header');
    if (!container.querySelector('.sound-control')) {
        const soundControl = document.createElement('button');
        soundControl.className = 'demo-button sound-control';
        soundControl.innerHTML = '<span class="sound-icon">🔊</span>';
        soundControl.title = 'Toggle sound';
        
        soundControl.addEventListener('click', () => {
            isSoundMuted = !isSoundMuted;
            soundControl.innerHTML = `<span class="sound-icon">${isSoundMuted ? '🔇' : '🔊'}</span>`;
        });
        
        container.appendChild(soundControl);
    }
    
    // 禁用开始按钮
    if (startButton) startButton.style.display = 'none';
    if (resetButton) resetButton.style.display = 'none';
    
    // 清空现有内容
    openingElement.textContent = '';
    streamElement.innerHTML = '';
    
    // 显示容器
    openingElement.classList.add('visible');
    streamElement.classList.add('visible');
    
    try {
        // 显示开场白
        await typeText(openingElement, conversation.opening);
        
        // 显示对话内容
        const lines = conversation.output.split('\n');
        for (const line of lines) {
            const lineElement = document.createElement('div');
            const speaker = line.startsWith('US:') ? 'us' : 'china';
            lineElement.classList.add(speaker);
            streamElement.appendChild(lineElement);
            await typeText(lineElement, line, 20);
        }
        
        // 显示重置按钮
        if (resetButton) resetButton.style.display = 'block';
    } catch (error) {
        console.error('Error in conversation display:', error);
    }
}

// 重置演示函数
function resetDemo() {
    const startButton = document.getElementById('startDemo');
    const resetButton = document.getElementById('resetDemo');
    const openingElement = document.querySelector('.conversation-opening');
    const streamElement = document.querySelector('.conversation-stream');
    
    // 重置内容
    openingElement.textContent = '';
    streamElement.innerHTML = '';
    openingElement.classList.remove('visible');
    streamElement.classList.remove('visible');
    
    // 重置按钮状态
    startButton.style.display = 'block';
    startButton.disabled = false;
    resetButton.style.display = 'none';
}

// 在文件最顶部定义语言配置和当前语言
const i18n = {
    en: {
        nav: {
            home: "Home",
            services: "Services",
            cases: "Case Studies",
            swiss: "Swiss Market",
            contact: "Contact"
        },
        hero: {
            title: "Tubban AI Agent",
            subtitle: "Empowering Swiss Businesses with Intelligent Agents",
            focus: "Autonomous AI Solutions Tailored for Swiss Excellence"
        },
        services: {
            title: "Our Services",
            strategy: {
                title: "Agentic AI Strategy",
                description: "Transform your Swiss business with strategic AI agent integration. We develop autonomous systems that understand Swiss market dynamics, regulatory requirements, and multilingual communication needs."
            },
            development: {
                title: "AI Agent Development",
                description: "Custom AI agents built for Swiss business efficiency. Our solutions automate complex tasks while maintaining the high standards expected in the Swiss market."
            },
            swiss: {
                title: "Swiss Market Excellence",
                description: "Our AI agents are specifically designed to meet the unique demands of the Swiss market, combining precision, reliability, and innovation.",
                features: [
                    "Swiss Banking & Finance Integration",
                    "Healthcare & Pharma Compliance",
                    "Precision Industry Automation",
                    "Multilingual Business Communication"
                ],
                benefits: {
                    title: "Benefits for Swiss Businesses:",
                    list: [
                        "Reduce operational costs by up to 40%",
                        "Enhance decision-making with AI-driven insights",
                        "Automate complex multilingual communications",
                        "Ensure compliance with Swiss regulations"
                    ]
                }
            }
        },
        cases: {
            title: "Success Cases",
            deepConversations: {
                title: "AI-Powered Deep Conversations",
                overview: "At Tubban AI Agent, we developed an innovative AI workflow that enables two AI language models to engage in sophisticated business negotiations and strategic discussions.",
                description: "Our AI agents can simulate complex business scenarios, from international trade negotiations to strategic partnerships, helping Swiss businesses prepare for real-world challenges. This technology enables companies to:",
                benefits: [
                    "Practice and refine negotiation strategies",
                    "Understand different cultural and business perspectives",
                    "Analyze potential business scenarios and outcomes",
                    "Train teams in international business communication"
                ]
            },
            recruitmentWorkflow: {
                title: "AI-Powered Recruitment Workflow",
                clientChallengeTitle: "Client Challenge:",
                clientChallenge: "A mid-sized tech company faced slow and inefficient hiring due to manual resume screening. Their HR team spent 14+ hours per recruitment cycle, leading to delays, inconsistencies, and missed top talent.",
                solutionTitle: "Solution: AI-Powered Workflow",
                solutionDescription: "We implemented an AI-driven recruitment workflow to automate CV screening and candidate ranking. Key features:",
                solutionFeatures: [
                    "Automated Resume Collection: Centralized resumes from multiple sources.",
                    "AI Screening: NLP models filtered resumes based on job requirements.",
                    "Key Information Extraction: AI extracted skills, experience, and education.",
                    "Candidate Ranking: Ranked candidates by match score.",
                    "Actionable Insights: Delivered a ranked candidate list with key metrics."
                ],
                resultsTitle: "Results:",
                results: [
                    "85% Faster Hiring: Recruitment cycle reduced from 14.5 hours to 2 hours.",
                    "Improved Candidate Quality: Unbiased screening ensured better-matched candidates.",
                    "Scalability: Handled 500+ resumes per job posting effortlessly.",
                    "HR Productivity: Freed HR teams to focus on strategic tasks."
                ]
            }
        },
        contact: {
            title: "Contact Us",
            subtitle: "Get in touch",
            description: "We'd love to hear from you. Please email us at:"
        }
    },
    de: {
        nav: {
            home: "Startseite",
            services: "Dienstleistungen",
            cases: "Fallstudien",
            swiss: "Schweizer Markt",
            contact: "Kontakt"
        },
        hero: {
            title: "Tubban AI Agent",
            subtitle: "Stärkung Schweizer Unternehmen mit intelligenten Agenten",
            focus: "Autonome KI-Lösungen maßgeschneidert für Schweizer Exzellenz"
        },
        services: {
            title: "Unsere Dienstleistungen",
            strategy: {
                title: "KI-Strategie",
                description: "Transformieren Sie Ihr Schweizer Unternehmen mit strategischer KI-Integration. Wir entwickeln autonome Systeme, die Schweizer Marktdynamik, regulatorische Anforderungen und mehrsprachige Kommunikationsbedürfnisse verstehen."
            },
            development: {
                title: "KI-Agenten Entwicklung",
                description: "Maßgeschneiderte KI-Agenten für Schweizer Geschäftseffizienz. Unsere Lösungen automatisieren komplexe Aufgaben unter Einhaltung der hohen Standards des Schweizer Marktes."
            },
            swiss: {
                title: "Schweizer Marktexzellenz",
                description: "Unsere KI-Agenten sind speziell entwickelt, um den einzigartigen Anforderungen des Schweizer Marktes gerecht zu werden, indem sie Präzision, Zuverlässigkeit und Innovation kombinieren.",
                features: [
                    "Integration in Schweizer Banking & Finanzwesen",
                    "Healthcare & Pharma Compliance",
                    "Präzisionsindustrie-Automation",
                    "Mehrsprachige Geschäftskommunikation"
                ],
                benefits: {
                    title: "Vorteile für Schweizer Unternehmen:",
                    list: [
                        "Reduzierung der Betriebskosten um bis zu 40%",
                        "Verbesserte Entscheidungsfindung durch KI-gestützte Erkenntnisse",
                        "Automatisierung komplexer mehrsprachiger Kommunikation",
                        "Gewährleistung der Einhaltung Schweizer Vorschriften"
                    ]
                }
            }
        },
        cases: {
            title: "Erfolgsgeschichten",
            deepConversations: {
                title: "KI-gestützte tiefgreifende Gespräche",
                overview: "Bei Tubban AI Agent haben wir einen innovativen KI-Workflow entwickelt, der es zwei KI-Sprachmodellen ermöglicht, in anspruchsvollen Geschäftsgesprächen und strategischen Diskussionen zu interagieren.",
                description: "Unsere KI-Agenten können komplexe Geschäftsszenarien simulieren, von internationalen Handelsverhandlungen bis hin zu strategischen Partnerschaften, und helfen Schweizer Unternehmen, sich auf reale Herausforderungen vorzubereiten. Diese Technologie ermöglicht es Unternehmen:",
                benefits: [
                    "Verhandlungsstrategien üben und verfeinern",
                    "Unterschiedliche kulturelle und geschäftliche Perspektiven verstehen",
                    "Potenzielle Geschäftsszenarien und Ergebnisse analysieren",
                    "Teams in internationaler Geschäftskommunikation schulen"
                ]
            },
            recruitmentWorkflow: {
                title: "KI-gestützter Rekrutierungsworkflow",
                clientChallengeTitle: "Kunden-Herausforderung:",
                clientChallenge: "Ein mittelständisches Technologieunternehmen stand vor langsamen und ineffizienten Einstellungsverfahren aufgrund der manuellen Lebenslauf-Durchsicht. Das HR-Team verbrachte mehr als 14 Stunden pro Rekrutierungszyklus, was zu Verzögerungen, Inkonsistenzen und dem Verlust von Top-Talenten führte.",
                solutionTitle: "Lösung: KI-gestützter Workflow",
                solutionDescription: "Wir implementierten einen KI-gesteuerten Rekrutierungsworkflow, um die Lebenslauf-Prüfung und Kandidatenbewertung zu automatisieren. Wichtige Funktionen:",
                solutionFeatures: [
                    "Automatisierte Lebenslauf-Sammlung: Zentralisierte Sammlung von Lebensläufen aus verschiedenen Quellen.",
                    "KI-gestützte Prüfung: NLP-Modelle filterten Lebensläufe basierend auf den Jobanforderungen.",
                    "Extraktion wichtiger Informationen: KI extrahierte Fähigkeiten, Erfahrungen und Bildung.",
                    "Kandidatenbewertung: Kandidaten wurden anhand eines Matching-Scores bewertet.",
                    "Umsetzbare Erkenntnisse: Eine sortierte Kandidatenliste mit wichtigen Kennzahlen wurde bereitgestellt."
                ],
                resultsTitle: "Ergebnisse:",
                results: [
                    "85% schnellere Einstellungen: Der Rekrutierungszyklus wurde von 14,5 Stunden auf 2 Stunden reduziert.",
                    "Verbesserte Kandidatenqualität: Unvoreingenommene Prüfung führte zu besser passenden Kandidaten.",
                    "Skalierbarkeit: Mehr als 500 Lebensläufe pro Stellenausschreibung wurden mühelos verarbeitet.",
                    "Produktivität des HR-Teams: Das HR-Team konnte sich auf strategische Aufgaben konzentrieren."
                ]
            }
        },
        contact: {
            title: "Kontakt",
            subtitle: "Kontaktieren Sie uns",
            description: "Wir würden uns freuen, von Ihnen zu hören. Bitte senden Sie uns eine E-Mail an:"
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            services: "Services",
            cases: "Études de cas",
            swiss: "Marché Suisse",
            contact: "Contact"
        },
        hero: {
            title: "Tubban AI Agent",
            subtitle: "Autonomisation des entreprises suisses avec des agents intelligents",
            focus: "Solutions IA autonomes sur mesure pour l'excellence suisse"
        },
        services: {
            title: "Nos Services",
            swiss: {
                title: "Excellence du Marché Suisse",
                description: "Nos agents IA sont spécialement conçus pour répondre aux exigences uniques du marché suisse, combinant précision, fiabilité et innovation.",
                features: [
                    "Intégration Bancaire & Financière Suisse",
                    "Conformité Santé & Pharma",
                    "Automatisation de l'Industrie de Précision",
                    "Communication d'Affaires Multilingue"
                ],
                benefits: {
                    title: "Avantages pour les Entreprises Suisses:",
                    list: [
                        "Réduction des coûts opérationnels jusqu'à 40%",
                        "Amélioration de la prise de décision grâce aux insights IA",
                        "Automatisation des communications multilingues complexes",
                        "Garantie de conformité aux réglementations suisses"
                    ]
                }
            }
        }
    },
    it: {
        nav: {
            home: "Home",
            services: "Servizi",
            cases: "Casi Studio",
            swiss: "Mercato Svizzero",
            contact: "Contatto"
        },
        hero: {
            title: "Tubban AI Agent",
            subtitle: "Potenziare le imprese svizzere con agenti intelligenti",
            focus: "Soluzioni IA autonome su misura per l'eccellenza svizzera"
        },
        services: {
            title: "I Nostri Servizi",
            swiss: {
                title: "Eccellenza del Mercato Svizzero",
                description: "I nostri agenti IA sono specificamente progettati per soddisfare le esigenze uniche del mercato svizzero, combinando precisione, affidabilità e innovazione.",
                features: [
                    "Integrazione Bancaria e Finanziaria Svizzera",
                    "Conformità Sanitaria e Farmaceutica",
                    "Automazione dell'Industria di Precisione",
                    "Comunicazione Aziendale Multilingue"
                ],
                benefits: {
                    title: "Vantaggi per le Aziende Svizzere:",
                    list: [
                        "Riduzione dei costi operativi fino al 40%",
                        "Miglioramento del processo decisionale con insights basati su IA",
                        "Automazione delle comunicazioni multilingue complesse",
                        "Garanzia di conformità alle normative svizzere"
                    ]
                }
            }
        }
    }
};

let currentLang = 'en';

// 获取浏览器首选语言
function getPreferredLanguage() {
    // 获取浏览器语言设置
    const browserLang = navigator.language || navigator.userLanguage;
    // 获取语言代码的前两个字符（例如 'de-CH' -> 'de'）
    const langCode = browserLang.split('-')[0];
    
    // 检查是否支持该语言，如果不支持则返回默认语言 'en'
    const supportedLanguages = ['en', 'de', 'fr', 'it'];
    return supportedLanguages.includes(langCode) ? langCode : 'en';
}

// 更新页面文本
function updateContent(lang) {
    console.log('Updating content to language:', lang);
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let value = i18n[lang];
        try {
            for (const key of keys) {
                value = value[key];
            }
            if (value) {
                element.textContent = value;
            }
        } catch (error) {
            console.warn(`Translation missing for key: ${keys.join('.')} in language: ${lang}`);
        }
    });
}

// 语言切换处理
function switchLanguage(lang) {
    console.log('Switching to language:', lang);
    currentLang = lang;
    
    // 更新按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // 更新页面内容
    updateContent(lang);
}

// 修改后的 initLanguageSwitcher 函数
function initLanguageSwitcher() {
    console.log('Initializing language switcher (dropdown)...');
    const langSelector = document.getElementById('language-selector');
    
    if (!langSelector) {
        console.error("Cannot initialize language switcher: element with id 'language-selector' not found.");
        return;
    }
    
    // 获取并设置首选语言
    currentLang = getPreferredLanguage();
    console.log('Detected preferred language:', currentLang);
    
    // 设置下拉框默认选中当前语言
    langSelector.value = currentLang;
    
    langSelector.addEventListener('change', (e) => {
        const lang = e.target.value;
        console.log('Language changed to:', lang);
        switchLanguage(lang);
    });
    
    // 初始化页面内容为检测到的语言
    updateContent(currentLang);
}

// 等待 DOM 加载完成后执行所有初始化代码
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');

    // 移动端菜单处理
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // 点击菜单项后关闭菜单
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // 点击页面其他区域关闭菜单
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // 平滑滚动导航
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
            updateMetaTags(sectionId);
        });
    });

    // 设置对话演示按钮事件监听器
    const startButton = document.getElementById('startDemo');
    const resetButton = document.getElementById('resetDemo');
    
    if (startButton && resetButton) {
        console.log('Demo buttons found, adding event listeners...');
        
        startButton.addEventListener('click', () => {
            console.log('Start button clicked');
            displayConversation();
        });
        
        resetButton.addEventListener('click', () => {
            console.log('Reset button clicked');
            resetDemo();
        });
    }

    // 图片加载处理
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
        if (img.complete) {
            img.classList.add('loaded');
        }
    });

    // 初始化语言切换功能
    initLanguageSwitcher();
});

// 动态更新元标签
function updateMetaTags(section) {
    document.querySelector('meta[name="description"]').content = 
        `Swiss AI Agent ${section} Services`;
}

// 初始化 EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // 替换为您的 EmailJS public key
})();

// 邮件发送功能
function sendEmail(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // 显示发送中状态
    const button = document.querySelector('#contact-form button');
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Sending...';

    // 使用 EmailJS 发送邮件
    emailjs.send(
        "service_id", // 替换为您的 EmailJS service ID
        "template_id", // 替换为您的 EmailJS template ID
        {
            from_name: name,
            reply_to: email,
            message: message,
            to_email: "tubban.ch@gmail.com"
        }
    ).then(
        function(response) {
            console.log("SUCCESS", response);
            alert('Thank you for your message. We will get back to you soon!');
            document.getElementById('contact-form').reset();
        },
        function(error) {
            console.log("FAILED", error);
            alert('Sorry, there was an error sending your message. Please try again.');
        }
    ).finally(() => {
        button.disabled = false;
        button.textContent = originalText;
    });
}

// 添加表单验证
document.getElementById('contact-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields');
        return false;
    }
    
    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address');
        return false;
    }
});

// 页面滚动效果
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}); 