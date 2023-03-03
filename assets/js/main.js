// BACK-TO-TOP
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
// AOS-SCRIPT
AOS.init({
    once: true,
});

$("#mmClick").on("click", async function() {
    const ethereum = window.ethereum;
    const tokenAddress = '0x49642110B712C1FD7261Bc074105E9E44676c68F';
    const tokenSymbol = 'DINO';
    const tokenDecimals = 18;
    const tokenImage = 'https://etherscan.io/token/images/dinolfg_32.png';
    try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20', // Initially only supports ERC20, but eventually more!
            options: {
              address: tokenAddress, // The address that the token is at.
              symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
              decimals: tokenDecimals, // The number of decimals in the token
              image: tokenImage, // A string url of the token logo
            },
          },
        });
      
        if (wasAdded) {
          console.log('Thanks for your interest!');
        } else {
          console.log('Your loss!');
        }
      } catch (error) {
        console.log(error);
      }
});

// HAMBURGER TOGGLER
$(".hamburger-menu").on("click", function () {
    $(".hamburger-menu").toggleClass("animate");
    $("#overlay").toggleClass("overlay-active");
    $(".main-top-section").toggleClass("mobile-view");
    $("body").toggleClass("fix-screen-mobile");
    $(".hero-background").toggleClass("hero_mobile_content");
});
$(document).ready(function () {
    const Section1 = document.querySelector("#name1-about-us");
    const Section2 = document.querySelector("#name2-section");
    const Section3 = document.querySelector("#name3-section");
    const Section4 = document.querySelector("#name4-section");
    const Section5 = document.querySelector("#name5-section");
    const Section6 = document.querySelector("#name6-section");
    // const mainMenu = document.querySelector("#main-menu");

    //  SECTION-1 SCROLL
    $(".about-section").click(function () {
        // mainMenu.click();
        $(".hamburger-menu").removeClass("animate");
        $("#overlay").removeClass("overlay-active");
        $(".main-top-section").removeClass("mobile-view");
        $("body").removeClass("fix-screen-mobile");
        Section1.scrollIntoView();
    });

    // SECTION-2 SCROLL
    $(".section-2").click(function () {
        // mainMenu.click();
        $(".hamburger-menu").removeClass("animate");
        $("#overlay").removeClass("overlay-active");
        $(".main-top-section").removeClass("mobile-view");
        $("body").removeClass("fix-screen-mobile");
        Section2.scrollIntoView();
    });

    // SECTION-3 SCROLL
    $(".section-3").click(function () {
        // mainMenu.click();
        $(".hamburger-menu").removeClass("animate");
        $("#overlay").removeClass("overlay-active");
        $(".main-top-section").removeClass("mobile-view");
        $("body").removeClass("fix-screen-mobile");
        Section3.scrollIntoView();
    });

    // SECTION-4 SCROLL
    $(".section-4").click(function () {
        // mainMenu.click();
        $(".hamburger-menu").removeClass("animate");
        $("#overlay").removeClass("overlay-active");
        $(".main-top-section").removeClass("mobile-view");
        $("body").removeClass("fix-screen-mobile");
        Section4.scrollIntoView();
    });

    // SECTION-5 SCROLL
    $(".section-5").click(function () {
        // mainMenu.click();
        $(".hamburger-menu").removeClass("animate");
        $("#overlay").removeClass("overlay-active");
        $(".main-top-section").removeClass("mobile-view");
        $("body").removeClass("fix-screen-mobile");
        Section5.scrollIntoView();
    });

    // SECTION-6 SCROLL
    $(".section-6").click(function () {
        // mainMenu.click();
        $(".hamburger-menu").removeClass("animate");
        $("#overlay").removeClass("overlay-active");
        $(".main-top-section").removeClass("mobile-view");
        $("body").removeClass("fix-screen-mobile");
        Section6.scrollIntoView();
    });
});