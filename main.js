function preload() {
  orejaizquierda=loadImage("https://i.postimg.cc/B6YNWvpv/oreja-furro-derecha.png")
  orejaderecha=loadImage("https://i.postimg.cc/434FjjGB/oreja-furro-izquierda.png")
}

function setup() {
  canvas = createCanvas(640, 480);
  video = createCapture(VIDEO)
  video.hide()
  video.size(640, 480)
  poseNet = ml5.poseNet(video, modelolisto)
  poseNet.on("pose", obtenerResultado)
}
function modelolisto() {
  console.log("Moldelo Listo insano")
}
orejaderechaX = 0
orejaizquierdaY = 0
orejaizquierdaX = 0
orejaderechaY = 0
function obtenerResultado(resultado) {
  if (resultado.length > 0) {
    orejaizquierdaX = resultado[0].pose.leftEar.x;
    orejaderechaX = resultado[0].pose.rightEar.x;
    orejaderechaY = resultado[0].pose.rightEar.y;
    orejaizquierdaY = resultado[0].pose.leftEar.y;
  }


}
function draw() {
  image(video, 0, 0, 640, 480)
  image(orejaizquierda,orejaizquierdaX -40,orejaizquierdaY -200,87,137)
  image(orejaderecha,orejaderechaX -40,orejaderechaY -200,87,137)
}
function tomarFoto() {
  save("foto.png")
}