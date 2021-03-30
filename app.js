/*var listaVideo = ['https://www.youtube.com/watch?v=1b3KDTOxljs'];

for(var i = 0; i < listaVideo.length; i++){
    document.write("<video  src= " + listaVideo + ">");*/
}

<script>
    var video = document.getElementById("newvideo");

    video.src="https://www.youtube.com/watch?v=1b3KDTOxljs";

    video.onmouseover=function(){
      video.volume=1;
      console.log('mouseover')
    } / Ativar som com MouseOver

    video.onmouseout=function(){
      video.volume=0;
      console.log('mouseout');
    } / Desativar som MouseOut
 </script>