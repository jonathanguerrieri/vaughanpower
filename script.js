function initMap() {
        
        var myLocation = {lat: 43.770406, lng: -79.612817};

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLocation,
          scrollwheel: false,
          zoom: 15
        });

        //add marker to center of map
         var marker = new google.maps.Marker({
          position: myLocation,
          map: map,
          title: 'Hello World!'
        });

         var infowindow = new google.maps.InfoWindow({
          content: '<p>dffsdfsd</p>'
        });

         //control window when marker is clicked
         marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }


