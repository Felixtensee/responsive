



let btn = document.getElementById("btn1"),
    bn = document.getElementById("bean"),
    tp = document.getElementById("top");
    mn = document.getElementById("text");


btn.addEventListener("click", function() {
    if (tp.classList.contains('hidden')) {
        tp.classList.remove('hidden');
        mn.style.top = "0px";
        setTimeout(function () {
          tp.classList.remove('visuallyhidden');
          btn.style.top ="250px";
        }, 10);
      } else {
        tp.classList.add('visuallyhidden');
        btn.style.top = "0px";
        mn.style.top = "-250px";
        tp.addEventListener('transitionend', function(e) {
          tp.classList.add('hidden');
          btn.style.top ="0px";
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
      
    }, false);
