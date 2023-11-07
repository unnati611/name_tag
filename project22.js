let index = 0;

function yourtag() {
  //   document.getElementById("new").innerHTML = "";
  index++;
  let div = document.createElement("div");
  document.getElementById("new").appendChild(div);
  div.setAttribute("class", "main1");
  div.id = `main${index}`;
  let div1 = document.createElement("div");
  div.appendChild(div1);
  div1.setAttribute("class", "box1");
  div1.id = `boxa${index}`;
  let h2 = document.createElement("h2");
  div1.appendChild(h2);
  let p = document.createElement("p");
  div1.appendChild(p);
  h2.innerHTML = "HELLO";
  p.innerHTML = "My name is";
  let div2 = document.createElement("div");
  div.appendChild(div2);
  div2.setAttribute("class", "box2");
  div2.id = `boxb${index}`;
  let a = document.getElementById("input1").value;
  div2.innerHTML = a;
  let div3 = document.createElement("div");
  div.appendChild(div3);
  div3.setAttribute("class", "box3");
  div3.id = `boxc${index}`;

  a = "";
}
function todo() {
  console.log(index);
  document.getElementById(`main${index}`).style.display = "none";
  index--;
  if (index === 0) {
    setTimeout(() => {
      alert("enter your name");
    }, 2000);
  }
}

let u = document.getElementById("input1");
u.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    yourtag();
  }
});
