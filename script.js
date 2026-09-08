// 初始化 Lucide 圖示
lucide.createIcons();

// 1. 切換 深色 / 淺色 模式
const themeToggleBtn = document.getElementById('theme-toggle');
let isDark = true;

themeToggleBtn.addEventListener('click', () => {
  isDark = !isDark;
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    themeToggleBtn.innerHTML = `<i data-lucide="moon"></i>`;
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleBtn.innerHTML = `<i data-lucide="sun"></i>`;
  }
  lucide.createIcons();
});

// 2. 作品分類篩選功能
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // 移除所有按鈕的 active 類別
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    portfolioCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});