    
      document.body.style.overflow = 'hidden';

      var fabricworking = document.getElementById('fabricworking');
      var fabricworkingimage = document.getElementById('fabricworkingimage');

      fabricworking.onclick = function() {
        fabricworkingimage.style.display = 'block';
        console.log(fabricworkingimage);
      }


      var asleep = document.getElementById('asleep');
      var asleepimage = document.getElementById('asleepimage');

      asleep.onclick = function() {
        asleepimage.style.display = 'block';
        console.log(asleepimage);
      }

      var tvbuy = document.getElementById('tvbuy');
      var tvbuyimage = document.getElementById('tvbuyimage');

      tvbuy.onclick = function() {
        tvbuyimage.style.display = 'block';
        console.log(tvbuyimage);
      }

      var moneygold = document.getElementById('moneygold');
      var moneygoldimage = document.getElementById('moneygoldimage');

      moneygold.onclick = function() {
        moneygoldimage.style.display = 'block';
        console.log(moneygoldimage);
      }

      var nycland = document.getElementById('nycland');
      var nyclandimage = document.getElementById('nyclandimage');

      nycland.onclick = function() {
        nyclandimage.style.display = 'block';
        console.log(nyclandimage);
      }

      var billchange = document.getElementById('billchange');
      var billchangeimage = document.getElementById('billchangeimage');

      billchange.onclick = function() {
        billchangeimage.style.display = 'block';
        console.log(billchangeimage);
      }

      var clockbuy = document.getElementById('clockbuy');
      var clockbuyimage = document.getElementById('clockbuyimage');

      clockbuy.onclick = function() {
        clockbuyimage.style.display = 'block';
        console.log(clockbuyimage);
      }

      var famousbrands = document.getElementById('famousbrands');
      var famousbrandsimage = document.getElementById('famousbrandsimage');

      famousbrands.onclick = function() {
        famousbrandsimage.style.display = 'block';
        console.log(famousbrandsimage);
      }

      var bansky = document.getElementById('bansky');
      var banskyimage = document.getElementById('banskyimage');

      bansky.onclick = function() {
        banskyimage.style.display = 'block';
        console.log(banskyimage);
      }

      var swiping = document.getElementById('swiping');
      var swipingimage = document.getElementById('swipingimage');

      swiping.onclick = function() {
        swipingimage.style.display = 'block';
        console.log(swipingimage);
      }


      var cart = document.getElementById('cart');
      var size = 150;
        // this canges the growth rate
      var size_inc = 10;
      var left = 1060;
      // this canges fastness of the left movement
      var left_inc = 100;

      setTimeout( function() {
          setInterval( function() {
            size += size_inc;
            left -= size_inc;
            cart.style.width = size + 'px';
            cart.style.left = left + 'px';

            if (size > 350){
            	size = 350;
            	left_inc -= left_inc;
            }
            // this canges when refresh to initial page
            if (left < 0) {
              location.reload();
            }
          }, 1000); 
        }, 25000);




