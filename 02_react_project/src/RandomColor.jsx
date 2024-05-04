function Color_generator(){
    let colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C",
    "D", "E", "F"]
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += colors[Math.floor(Math.random() * 16)];
    }

    document.getElementById("show_color").style.backgroundColor = color;
    document.getElementById("show_name").innerHTML = color;
}

export default Color_generator;