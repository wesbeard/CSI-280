<template v-on:load="getCats(), getToken()">

    <div id="body">
        <div class="container">  
          <h1>Find the Perfect Cat!</h1>
          <hr width=80%>
          <h2>Your Location:</h2>
            <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-73.20615559816362%2C44.47204183438044%2C-73.20167630910875%2C44.473884991047704&amp;layer=mapnik&amp;" 
              id="map" class="pet-map">
            </iframe>
			<br></br>
            <hr width=80%>
          <div id="pfData">
          </div>
          <button v-on:click="getCats(), getToken()"><i class="fas fa-sync"></i> Refresh</button>
          <p>Contact Us For Help and More Information About Our Pets!</p>
        </div>
    </div>
</template>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@petfinder/petfinder-js/dist/petfinder.min.js"></script>
<script src="https://unpkg.com/@petfinder/petfinder-js/dist/petfinder.min.js%22%3E"></script>

<script>
  import { Client } from "@petfinder/petfinder-js";
  import { Animal } from '@petfinder/petfinder-js/dist/api/animal';

export default {
  mounted:function() {
    this.getCats();
    this.getToken();
	this.updateLocation();
  },
  name: 'Cats',
  data () {
      return {
      msg: 'Catspage'
      }
  },
    methods: {
        getToken: function () {
            const client = new Client({ apiKey: "HB4E0LPBodtgXJlBVOYvZSDaxgGSCA7Li7Eq6tqb6uVDRfzAp4", secret: "rr6C5OrDLoCg3mP0rk4ztxVTLw3sHwgmvUUMf3zn" });
            client.animal.search()
                .then(function (response) {
                    // Do something with resp.data.animals
                    console.dir(response.data.animals)
                });
        },
		
        getCats: function () {
          const client = new Client({ apiKey: "HB4E0LPBodtgXJlBVOYvZSDaxgGSCA7Li7Eq6tqb6uVDRfzAp4", secret: "rr6C5OrDLoCg3mP0rk4ztxVTLw3sHwgmvUUMf3zn" });
          var tableOutput = document.getElementById("pfData");

          client.animal.search()
          .then(function (response){
            tableOutput.innerHTML = "";
            for (var i = 0; i < response.data.animals.length; i++ )
            {
              var item = response.data.animals[i];
              if (item.type == 'Cat')
              {
                if (item.photos.length > 0) {
                  var petPic = item.photos[0].medium;
                  tableOutput.innerHTML += "<img class='pet-wrapper'src=" + petPic + ">";
                }
                var petName = item.name;
                var petID = item.id;
                var breed = item.breeds.primary;
                var petSize = item.size;
                var petAge = item.age;
                var petDescription = item.description;
                tableOutput.innerHTML += "<h1>" + petName + "</h1>";
                tableOutput.innerHTML += "<h3>Age: " + petAge + "</h3>";
                tableOutput.innerHTML += "<h3>Breed: " + breed + "</h3>";
                tableOutput.innerHTML += "<h3>Size: " + petSize + "</h3>";
                tableOutput.innerHTML += "<h3>" + petDescription + "</h3><br>";
                tableOutput.innerHTML += "<hr width=80%>";
              }
              else
              {
                continue;
              }
            }
          });
      },
	  updateLocation: function () {
		var i = function(pos) {					//gets actual geolocation			
			var lat = pos.coords.latitude;
			var long = pos.coords.longitude;
			var coords = lat + ", " + long;		//coordinates of user (within a km or so)
		
			document.getElementById('map').setAttribute('src', 'https://www.openstreetmap.org/export/embed.html?bbox='+ long +'%2C'+ lat +'%2C'+ long +'%2C'+ lat +'&amp;layer=mapnik&amp;marker='+ lat +'%2C'+ long)
		}
			//run onload to call for location
			navigator.geolocation.getCurrentPosition(i);
	},
  }
}
</script>

<style scoped>
    #pfData {
      font: bold;
    }
</style>