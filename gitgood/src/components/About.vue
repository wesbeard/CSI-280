<template>
    <div id="body">
        <div class="container">
            <h1>What is the project?</h1>
            <h2>
                This project was created by the gitgood team for various Git assignments,
                for CSI280, a class at Champlain College currently taught by Chris Bendel.
                Created mostly as a way demonstrating project management and git usage, the
                site mostly exists as a consequence of this.
            </h2>
            <h4> You can read more about Chris <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">here</a>. </h4>
            <h1>About Us!</h1>
            <h3>
                We're students. I thought the first bit there would make that bit fairly obvious.
                I also thought no one would read this paragraph, so i can throw in a subtle meme in
                here... let's see... butts. Darn, I blew it. Anyway, here are the contributors...
            </h3>
            <h2>Louis Vinton</h2>
            <h4>Louis has made the basic layout of the page, set up the content of the Dogs page, and helped with planning and documentation.</h4>
            <h2>Aiden Tracy</h2>
            <h4>Aiden has set up the Petfinder API for use in other places, and has also made this page. He is also responsible for keeping the repository well labeled.</h4>
            <h2>Wes Beard</h2>
            <h4>Wes has helped get the assignment started in vue, as well as plan styling for the site and develop the homepage, including geolocation features.</h4>
            <h2>Collin Westgate</h2>
            <h4>Collin has been responsible for the navbar, including all of it's functionality. He also initialized the Readme.</h4>
            <h2>Tom Szpila</h2>
            <h4>Tom was responsible for setting the petfinder API and also setting up the geolocation features.</h4>
            <h2>Josh Bogin</h2>
            <h4>Josh has created the header and footer of the site, as well as the content of the Cats page, and is responsible for creating the unified stylesheet. </h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'New',
        data () {
            return {
                msg: 'About'
            }
        }
    }
</script>

<style scoped>
    #body {
      height: 80%;
      color:#282828;
      background: #FFFFFF;
      padding:0;
      margin:0;
      text-align:center;
      background: linear-gradient(-90deg, #febc55, #ff6969, #9500ff);
    }
</style>