// MIT License

// Copyright (c) 2022 Sampada Dhole

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

var ORIGIN_NODE=""
var fromNodes =[]
var ToNodes =[]
var idarray=[]
var adjacencylist =[];
var newnode
var newedge;
var from;
var to;
let runcount = 0;
var id;
let addNodecount =0
let addEdgeCount =0
const originNode = document.querySelector("#origin");
const startnodeinput = document.querySelector("#startNode")
const runBtn = document.querySelector("#run")
const stop = document.querySelector("#stopBFS")
const randomgraph = document.querySelector("#NewGraph")
const addnode = document.querySelector("#addnode")
const addedgeBtn = document.querySelector("#addedgeBtn")

runBtn.addEventListener("click", runBFS)
stop.addEventListener("click", stopBFS)
randomgraph.addEventListener("click", newgraph)
addnode.addEventListener("click", addNode)
addedgeBtn.addEventListener("click", addEdge)

const ids = ["a", "b", "c", "d", "e", "f", "g", "h"];

function addNode(){
  
  // console.log(x)
  // alert("Please Enter the node you want to add");
  addNodecount++;;
    if(addNodecount > 1){
      addEdgeCount =0;
      alert("Please add edge first")
    }
    else{
    newnode = generaterandomletters()
   newedge = generaterandomletters()
   
  if(!ids.includes(newnode)){
    const randomnum=Math.floor(Math.random()*3)
  var eles = cy.add([
    { group: 'nodes', data: { id: newnode }, position: { x: Math.floor(Math.random()*3), y: Math.floor(Math.random()*3)+100 } },
  ]);
  ids[ids.length+1] = newnode 
  }
  else{
    addNodecount=0;
    alert("Node is already present")
  }

    }
  
  return {newnode, newedge}
}
function addEdge(){
  addEdgeCount++;
  if(addNodecount==0){
    addEdgeCount++;
    alert("Add Node first")
  }
  
  else if(addEdgeCount > 1){
    addEdgeCount++;
    addNodecount=0;
  var eles = cy.add([
    { group: 'edges', data: { id: newnode+newedge, source: newnode, target: 'a' } }
  ])
  }
  
  
}

function stopBFS(){
  location.reload()
  runcount =0;
  // cy.destroy(); 
}

function generateRandom() {
  let source = ids[Math.floor(Math.random() * 6)];
  let target = ids[Math.floor(Math.random() * 6)];
  while (source == target) {
    source = ids[Math.floor(Math.random() * 6)];
    target = ids[Math.floor(Math.random() * 6)];
  }
  const id = source + target
  return { source, target, id };
}

function newgraph(){
  if(runcount >= 1){
    alert("Please stop the ongoing BFS");
  }
  else{
    var layout = cy.layout({
    name: 'random'
  });

  layout.run(); 
  }
  
  // getanewnode();
  // getnewedges();
  // getnewid();
}

function generaterandomletters(){
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const randomnode = alphabet[Math.floor(Math.random() * alphabet.length)]
  return randomnode;
}

function getanewnode(){

  for(let i =1;i<=10;i++){
    fromNodes[i] = generaterandomletters();
  }
// console.log("from"+fromNodes)
return fromNodes
}

function getnewedges(){
  const randomIndex = Math.floor(Math.random() * fromNodes.length);
  var i =1;
  while(i<fromNodes.length){
    ToNodes[i] =  fromNodes[randomIndex];
    i++;
  }
  
// console.log("to"+ToNodes)
return ToNodes
}

function getnewid(){

  for(let i =1;i<=10;i++){
    idarray[i] =  fromNodes[i]+ToNodes[i];
  }
// console.log("id"+idarray)
return idarray
}

function getNodes(){
  from = fromNodes[1];
  to = ToNodes[2];
  id = idarray[3];
  return {from, to, id};
}
// const randomIndex = Math.floor(Math.random() * fromNodes.length);
// console.log("randomindex"+randomIndex)
// console.log("random"+getanewnode())


let edges = [
  { data: { id: "ae", weight: 1, source: "a", target: "e" } },
  { data: { id: "ab", weight: 3, source: "a", target: "b" } },
  { data: { id: "be", weight: 4, source: "b", target: "e" } },
  { data: { id: "bc", weight: 5, source: "b", target: "c" } },
  { data: { id: "ce", weight: 6, source: "c", target: "e" } },
  { data: { id: "cd", weight: 7, source: "c", target: "d" } },
  { data: { id: "de", weight: 7, source: "d", target: "e" } },
  { data: { id: "df", weight: 7, source: "d", target: "f" } },
  { data: { id: "fa", weight: 7, source: "f", target: "a" } },
  { data: { id: "bh", weight: 4, source: "b", target: "h" } }
];



// originNode.innerText = "ORIGIN NODE = " + ORIGIN_NODE.trim("#")[1].toUpperCase()

// addNode.addEventListener("click", () => {
//   const { source, target, id } = generateRandom()
//   console.log(generateRandom());
//   cy.add({ group: "edges", data: { id, source, target } });
// });
function runBFS(){
  if(runcount >= 1){
    alert("Please stop the ongoing BFS");
  }
  if(ids.includes(startnodeinput.value)) {
    ORIGIN_NODE = "#"+startnodeinput.value
  // console.log(startnodeinput.value)
  runn();
  runcount++;
  startnodeinput.value =""
  }
  else{
    alert("Please provide correct node")
    startnodeinput.value =""
  }
}
let options = {
  name: 'random',

  fit: true, 
  padding: 30, 
  boundingBox: undefined, 
  animate: false, 
  animationDuration: 500, 
  animationEasing: undefined, 
  animateFilter: function ( node, i ){ return true; }, 
  ready: undefined,
  stop: undefined, 
  transform: function (node, position ){ return position; } 
};

var cy = cytoscape({
  container: document.getElementById("cy"),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape
    .stylesheet()
    .selector("node")
    .style({
      content: "data(id)",
      "color": "#FFFFFF"
    })
    .selector("edge")
    .style({
      "curve-style": "bezier",
      "target-arrow-shape": "triangle",
      width: 4,
      "line-color": "#FFFFFF",
      "target-arrow-color": "#FFFFFF",
      
    })
    .selector(".highlighted")
    .style({
      "background-color": "#FF0000",
      "line-color": "#FF0000",
      "target-arrow-color": "#FF0000",
      "transition-property": "background-color, line-color, target-arrow-color",
      "transition-duration": "0.5s",
    }),

    elements: {
      nodes: [
        { data: { id: "a" } },
        { data: { id: "b" } },
        { data: { id: "c" } },
        { data: { id: "d" } },
        { data: { id: "e" } },
        { data: { id: "f" } },
        { data: { id: "g" } },
        { data: { id: "h" } },
      ],
  
      edges,
    },

  layout: {
    name: "breadthfirst",
    directed: true,
    roots: "#a",
    padding: 10,
  },
});

cy.layout( options );
function runn(){
  var bfs = cy.elements().bfs(ORIGIN_NODE, function () { }, true);

var i = 0;
var highlightNextEle = function () {
  if (i < bfs.path.length) {
    bfs.path[i].addClass("highlighted");
    i++;
    setTimeout(highlightNextEle, 1000);
  }
};

// kick off first highlight
highlightNextEle();

}


