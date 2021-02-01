$(document).ready(function(){
    $('.menu').click(function(){
        $('.menu').hide()
        $('.cross').show()
        $('nav').toggleClass('show-nav')
        gsap.from('li', {duration: 0.5, x: -100, opacity: 0, stagger: 0.1});
    });
    $('.cross').click(function(){
        $('.cross').hide()
        $('.menu').show()
        $('nav').toggleClass('show-nav')
    })

    $('#imga1').click(function(){
        $('#ovl').toggleClass('.show-ovl')
    })

    $('ul.ul2 li a').click(function(){
        let pattern = /#\w+/
        let patterns = ['#about','#ml']
        let link = this.href
        let match = link.match(pattern)[0]
        // console.log(link.match(pattern)[0])
        $(match).toggleClass('show-about')
        if(match == patterns[0] && $(patterns[1]).hasClass('show-about')){
            $(patterns[1]).removeClass('show-about')
        }
        if(match == patterns[1] && $(patterns[0]).hasClass('show-about')){
            $(patterns[0]).removeClass('show-about')
        }
        gsap.fromTo('.mlcontent',{opacity: 0}, {duration: 1, delay: 0.5, opacity: 1});
    })

    $('.fa-arrow-left').click(function(){
        $(this.parentElement).toggleClass('show-about')
    })

    $('#who').click(function(){
        $('#who > p, #who > .team').slideToggle(200, function() {
            if ($('#who > .team').is(':visible')) {
            $('#who > .team').addClass('show-mem');
            $('#who > .team').css({'display': 'flex'});
            }
        });
        $('#what > p, #why > p').slideUp(200);
    })
    $('#what').click(function(){
        $('#what > p').slideToggle(200);
        $('#who > p, #why > p, #who > .team').slideUp(200);
    })
    $('#why').click(function(){
        $('#why > p').slideToggle(200);
        $('#what > p, #who > p, #who > .team').slideUp(200);
    })

    $('nav ul li').click(function () {
        document.location = this.querySelector('a').href;
    });

    function transformScroll(event) {
        if (!event.deltaY) {
          return;
        }
        event.currentTarget.scrollLeft += event.deltaY;
        console.log(event)
      }
      
      var element = document.scrollingElement || document.documentElement;
      element.addEventListener('wheel', transformScroll, {passive: true});

    scrollbtn = document.getElementById("backToStart");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollLeft > 1000 || document.documentElement.scrollLeft > 1000) {
            scrollbtn.style.display = "block";
        } else {
            scrollbtn.style.display = "none";
        }
    }

    $('#backToStart').click(function () {
        $('html, body').animate({scrollLeft:0}, 50);
    });

});



// const sections = [...document.querySelectorAll("section")];
// const getLinkById = (id) => document.querySelector(`a[href='#${id}']`);

// const inView = (section) => {
//   let top = section.offsetTop;
//   let height = section.offsetHeight;

//   while (section.offsetParent) {
//     section = section.offsetParent;
//     top += section.offsetTop;
//   }

//   return (
//     top < window.pageYOffset + window.innerHeight &&
//     top + height > window.pageYOffset
//   );
// };

// window.onscroll = () => {
//     let next = false;
  
//     sections.forEach((section) => {
//       const a = getLinkById(section.id);
  
//       if (inView(section) && !next) {
//         a.classList.add("current");
//         next = true;
//       } else {
//         a.classList.remove("current");
//       }
//     });
// };

// window.onscroll = function() {
//     myFunction();
// };

// function myFunction() {
//   let winScroll = document.body.scrollLeft || document.documentElement.scrollLeft;
//   let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   let scrolled = (winScroll / height) * 100;
//   console.log(scrolled);
//   document.getElementById("progress").style.height = `${scrolled}%`;
// } 