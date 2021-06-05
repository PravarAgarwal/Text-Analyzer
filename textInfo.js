let textareaEl = document.querySelector("#text");
let text = null;
let data = {
  Words: 0,
  Sentences: 0,
  Uppercaes: 0,
  Lowercase: 0,
  Spaces: 0,
  Digits: 0,
  Vowels: 0,
  Consonants: 0,
  Punctuations: 0,
  Characters: 0,
  Paragraphs: 0,
  Lines: 0,
};

const findLength = (item) => (item == null ? 0 : item.length);

const setText = () => {
  text = textareaEl.value;
  
  if (text != null) {
    data.Sentences = findLength(text.match(/[.?!]+/g));
    var x= findLength(text.match(/[\n]/g));
    data.Words = findLength(text.match(/[a-zA-Z0-9,;'"?.:!{(*-})[@#$%^&<>/]+/g));
    data.Spaces = findLength(text.match(/\s/g))-x;
    data.Uppercaes = findLength(text.match(/[A-Z]/g));
    data.Lowercase = findLength(text.match(/[a-z]/g));
    data.Digits = findLength(text.match(/\d/g));
    data.Vowels = findLength(text.match(/[aeiou]/gi));
    data.Consonants = findLength(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));
    data.Characters = findLength(text.match(/\S/g));
    data.Punctuations = findLength(text.match(/[.,:;"'?!-*{}([)/]+/g));
    data.Paragraphs = findLength(text.match(/[\n][a-zA-Z0-9,;'"?.:!{(*-})[@#$%^&<>/]/g))+1;
    if(data.Characters==0)
    {
      data.Paragraphs=0;
      data.Lines=0;

    }

    else
    data.Lines=data.Paragraphs -1 + Math.ceil((data.Characters+data.Spaces)/53);
    
  }
  localStorage.setItem("data", JSON.stringify(data));

  window.location = "info.html";
};

const getData = () => {
  return JSON.parse(localStorage.getItem("data"));
};

const showData = () => {
  let data = getData();
  let htmlContent = "";
  for (item in data) {
    htmlContent += `<div class="box">
        <h2>${data[item]}</h2>
        <p>${item}</p>
      </div>`;
  }
  document.querySelector(".info-wrapper").innerHTML = htmlContent;
};