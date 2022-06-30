let btnNavToggle = document.getElementById('btn-nav-toggle')
let primaryNavigation = document.getElementById('primary-navigation')

btnNavToggle.addEventListener('click', openNav)

// 函式名稱
function openNav() {
    // document.getElementById('primary-navigation')
    console.log('點按鈕打開主導覽')
    if (primaryNavigation.classList.contains('active') == true) {
        // 假如主導覽有active類別時執行
        primaryNavigation.classList.remove('active')
        document.getElementById('btn-nav-toggle').textContent = img(src = "public/images/icon-menu.svg", alt = "")

    } else {
        // 假如主導覽沒有active類別時執行
        primaryNavigation.classList.add('active')
        document.getElementById('btn-nav-toggle').textContent = img(src = "public/images/icon-menu-close.svg", alt = "")
    }
}