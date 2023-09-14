let myDiv=document.createElement("div")
let textDiv=document.createTextNode("this div")
myDiv.appendChild(textDiv)
document.body.appendChild(myDiv)
myDiv.style.color="red"

let paragraph=document.createElement("p")
let textParagraph=document.createTextNode("this paragraph")
paragraph.appendChild(textParagraph)
document.body.appendChild(paragraph)
paragraph.style.color="blue"

let span=document.createElement("span")
let textSpan=document.createTextNode("this span")
span.appendChild(textSpan)
document.body.appendChild(span)
span.style.color="purple"

document.write("<br/>")
document.write("<br/>")

let link=document.createElement("a")
let hre=document.createAttribute("href")
let textLink=document.createTextNode("this link")
link.setAttributeNode(hre)
link.setAttribute("href" , "https://www.google.com")
link.appendChild(textLink)
document.body.appendChild(link)
link.style.color="green"