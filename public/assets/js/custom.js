window.onload = function() {
  const idDiv = document.getElementById('login')
  if (idDiv) {
    document.getElementById('body').className =
      'app flex-row align-items-center'
  } else {
    document.getElementById('body').className =
      'app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show'
  }
}
