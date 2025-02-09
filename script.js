// 平滑滚动导航
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        updateMetaTags(sectionId);
    });
});

// 动态更新元标签
function updateMetaTags(section) {
    document.querySelector('meta[name="description"]').content = 
        `Swiss AI Agent ${section} Services`;
}

// 移动端菜单切换
document.querySelector('.hamburger').addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
});

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

// 图片加载处理
document.addEventListener('DOMContentLoaded', () => {
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