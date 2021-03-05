var el = document.getElementById("pokebutton")

if(el){
    document.getElementById("pokebutton").addEventListener("click", function() {
        const pokemon = document.getElementById("poke").value
        window.location.href=`/pokemon?pokemon=${pokemon}`
      });
}
