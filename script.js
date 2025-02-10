// 在文件顶部添加音效（使用短的 Base64 编码音频数据）
const typeSound = new Audio("data:audio/wav;base64,UklGRnQGAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YU8GAACBgIF/gn2Dfn+BgoGDgYOChISChYOHgoWDhISFhYaGhoeHhoeGhoaFhYaGh4iJiYqKiouKiouKiYmIiYmKioqLioqJiYiHh4aGhYaGh4iIiYiIiImIiYmJiomJiImHhYSCgYB/f4CBgoOFhoaHh4iHiIeHhoaFhYSEg4OCgoGBgoKDhISFhoWGhYWEg4KBgL+/v8DAwMHBwcLCwsLCwcHAwL++vr29vb6+v8DBwcLDw8PDw8LCwcDAv7++vr2+vsDBwsPExMXFxcTDw8LBwL++vby8vL2+v8DCw8TFxsbGxcXDwsHAvr27urq6u7y9v8HDxcbHyMjIx8bFw8LAvry6ubi4ubq8vsHDxcfIycnJyMfGxMPBv727ubi3t7i6vL7BwsTGyMnJycjHxcTCwL68ure2tra3ubq9v8LExt/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/fv7y5trSzsrKys7S2uLq9v8LEx8nKy8vLysnIxsXCwL27ubi3t7i5ur2/wcTFx8nJycjHxsXDwcC+vLm4t7a3uLm7vsDCxMbHycnIyMbFw8LAvry5uLe2tre4ur2/wcPFxsfIyMfGxcTCwL+9u7m4t7e3uLq8vsDCxMbHyMjIx8bFw8HAvry6uLe3t7i5u72/wcPFxsfIyMfGxcPCwL69u7m4t7e3uLm7vb/BwsTGx8jIx8bFxMLAvr26uLe3t7i5u72+wMLExcfHyMfGxcTCwL+9u7m4t7e3uLm7vb/BwsTGx8fHxsXEw8HAvry6uLe3t7i5u72/wcPExsfHx8bFxMLBv768uri3t7e4ubu9v8DCxMXGx8fGxcTDwcC+vLq4t7e3uLm7vb7AwsTFxsbHxsXEw8HAvry6ubi3t7i5u72+wMLDxcbGxsXFw8LBv768uri3t7i4ubu9vsHCw8XGxsbFxMPCwL+9u7m4t7e4uLq8vb/BwsTFxcbFxcTDwcC/vby6uLe3uLi5u72/wMPExcXFxcTDwsHAv727uri3t7i4uru9v8DCxMXFxcXEw8LBwL69u7m4t7e4uLq7vb7AwsTExcXExMPCwcC+vbu5uLe3uLi6u72+wMHDxMXFxMTDwsHAv727ubm3t7i4uru9vsDCw8TExMTDwsLBwL69u7m4uLe4uLq7vb7AwcPDxMTEw8PCwcC/vry6ubi3uLi5u72+v8HDw8TExMPDwsHAv768uri4t7i4uru8vr/Bw8PExMPDwsLBwL++vLq5uLi4uLm7vL6/wcLDw8PDw8PCwcDAv726ubm4uLi4uru8vr/AwsPDw8PDwsLBwL++vbu5uLi4uLm6vL2/wMLCw8PDw8LCwcDAv727ubm4uLi5uru8vr/AwsLDw8PCwsHBwL+9vLq5uLi4uLm6vL2+wMHCwsPDwsLCwcDAv728urm4uLi4ubq8vb7AwcLCwsLCwsHBwL+/vby6ubm4uLi5ury9vr/BwcLCwsLCwcHAwL+9vLq5ubi4uLm6u72+v8DBwcLCwsHBwcC/v728urm5uLi4ubq7vb6/wMHBwsLCwcHBwL+/vby6ubm4uLi5uru9vr/AwcHBwcHBwcHAv7+9vLq5ubi4uLm6u72+v8DBwcHBwcHAwMC/v728urm5uLi4ubq7vb6/wMDBwcHBwcDAwL+/vby6ubm4uLi5uru8vb6/wMDBwcHBwMDAv7+9vLq5ubi4uLm6u7y9vr/AwMHBwcHAwMC/v729urm5uLi4ubq7vL2+v8DAwMHBwMDAwL+/vby6ubm4uLi5uru8vb6/wMDAwMDAwMC/v7+9vLq5ubi4uLm6u7y9vr+/wMDAwMDAwL+/v728urm5uLi4ubq7vL2+v7/AwMDAwMDAv7+/vby6ubm4uLi5uru8vb6/v8DAwMDAwL+/v7+9vLq5ubi4uLm6u7y9vr6/v8DAwMDAv7+/v728urm5uLi4ubq7vL29vr+/wMDAwL+/v7+/vby6ubm4uLi5uru8vb2+v7/AwMC/v7+/v729urm5uLi4ubq7vL29vr+/v8DAv7+/v7+9vLq5ubi4uLm6u7y9vb6/v7/AwL+/v7+/vby6ubm4uLi5uru8vb2+v7+/v7+/v7+/v728urm5uLi4ubq7vL29vr+/v7+/v7+/v7+9vLq5ubi4uLm6u7y9vb6/v7+/v7+/v7+/vby6ubm4uLi5uru7vL2+v7+/v7+/v7+/v729urm5uLi4ubq7vL29vr+/v7+/v7+/v7+9vLq5ubi4uLm6u7y9vb6/v7+/v7+/v7+/vby6ubm4uA==");
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