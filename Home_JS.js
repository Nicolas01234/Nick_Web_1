// NavBar Design
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

//Hiding or Showing Desktop Image Depending on the Size of the Screen
  $(window).resize(function() {
    if ($(window).width() < 1030) {
    $(".Desktop_Home_Image_Top").addClass("hidden");
    } else {
    $(".Desktop_Home_Image_Top").removeClass("hidden");
    }
    });

//Hiding the Desgin Animation
window.addEventListener('resize', function() {
  if (window.innerWidth < 650) {
    document.getElementById('Mobile_Color_Text_I').style.top = '70%';
  } else {
    document.getElementById('Mobile_Color_Text_I').style.top = '57%';
  }
});

//Hide or show 2 Images-->
$(window).resize(function() {
  if ($(window).width() < 1030) {
  $(".Home_Page_Think_Image").addClass("hidden");
  } else {
  $(".Home_Page_Think_Image").removeClass("hidden");
  }
  });

$(window).resize(function() {
  if ($(window).width() < 1030) {
  $(".Home_Page_Lebanon_Image").addClass("hidden");
  } else {
  $(".Home_Page_Lebanon_Image").removeClass("hidden");
  }
  });
// <---

//Changes the Flex so that the Text stay in Frame on Mobile Screen.
  window.addEventListener('resize', function() {
    if (window.innerWidth < 830) {
      document.querySelector('.Home_Page_TextBox1').style.display = 'block';
    } else {
      document.querySelector('.Home_Page_TextBox1').style.display = 'flex';
    }
  });

