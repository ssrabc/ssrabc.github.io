// 等待 DOM 完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 1. 高亮当前导航菜单（根据当前页面文件名）
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else if (currentPage === 'index.html' && href === '../index.html') {
            link.classList.add('active');
        } else if (currentPage === '' && href === '../index.html') {
            link.classList.add('active');
        }
    });

    // 2. 联系表单处理（仅在 contact.html 页面）
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const msgDiv = document.getElementById('form-message');

            if (!name || !email || !message) {
                msgDiv.textContent = '❌ 请填写所有字段';
                msgDiv.style.color = '#dc2626';
                return;
            }
            if (!email.includes('@') || !email.includes('.')) {
                msgDiv.textContent = '❌ 请输入有效的邮箱地址';
                msgDiv.style.color = '#dc2626';
                return;
            }

            // 模拟提交（未来可对接 api/contact.js）
            console.log('表单数据:', { name, email, message });
            msgDiv.textContent = '✅ 消息已发送（演示模式）！我会尽快回复你。';
            msgDiv.style.color = '#16a34a';
            contactForm.reset();

            // 可选：3秒后自动清除消息
            setTimeout(() => {
                if (msgDiv) msgDiv.textContent = '';
            }, 4000);
        });
    }
});
