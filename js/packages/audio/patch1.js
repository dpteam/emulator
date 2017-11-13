<script src="audiopatch1.zip"></script>
<script>
    var sound = new Howl({
      src: ['sound.webm', 'sound.mp3']
    });
</script> 
var sound = new Howl({
  src: ['.bin']
});
 
sound.play();
var sound = new Howl({
  src: ['.bin', '.smd', '.gen'],
  autoplay: true,
  loop: true,
  volume: 0.5,
  onend: function() {
    console.log('Finished!');
  }
  var sound = new Howl({
  src: ['.bin', '.gen'],
  sprite: {
    blast: [0, 3000],
    laser: [4000, 1000],
    winner: [6000, 5000]
  }
});
var sound = new Howl({
  src: ['.bin', '.gen']
});
 
// Clear listener after first call.
sound.once('load', function(){
  sound.play();
});
 
// Fires when the sound finishes playing.
sound.on('end', function(){
  console.log('Finished!');
});
