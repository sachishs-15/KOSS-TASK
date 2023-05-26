import data from './pics.json' assert {type : 'json'};
//import Fuse from 'https://deno.land/x/fuse@v6.6.2/dist/fuse.esm.min.js'
//import Fuse from 'fuse.js'

import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.esm.js'

var arr = data.data.children;

var chtml = '';
for(let i = 1; i < arr.length; i++){
    var image = arr[i].data.thumbnail;
    var title = arr[i].data.title;
    var url = arr[i].data.url;
    var html = [
        '<div class="container">',
        '<img src=' + image + ' alt="IMG" class="image">',
        '<a href = ' + url + '>',
        '<div class="overlay">',
        '<div class="text">' + title + '</div>',
        '</div>',
        '</a>',
        '</div>'
        
].join('\n');

chtml = chtml.concat(html);

}

document.getElementById("outcontainer").innerHTML = chtml;

// var chtml = '';
// for(let i = 1; i < arr.length; i++){
//     var image = arr[i].data.thumbnail;
//     var title = arr[i].data.title;
//     var url = arr[i].data.url;
//     var html = [
//         '<div class="mySlides fade">',
//         '<div class = "numbertext" '+ i + ' </div>',
//         '<a href = ' + url + '>',
//         '<img src=' + image + ' alt="IMG" style = "width: 100%" >',
//         '</a>',
//         '<div class="text">' + title + '</div>',
//         '</div>'
        
// ].join('\n');

// chtml = chtml.concat(html);
// }

// document.getElementById("outcontainer").insertAdjacentHTML('afterbegin', chtml);

// function fuzzy_match(text, search)
// {
//     /*
//     Parameter text is a title, search is the user's search
//     */
//     // remove spaces, lower case the search so the search
//     // is case insensitive
//     var search = search.replace(/\ /g, '').toLowerCase();
//     var tokens = [];
//     var search_position = 0;

//     // Go through each character in the text
//     for (var n=0; n<text.length; n++)
//     {
//         var text_char = text[n];
//         // if we match a character in the search, highlight it
//         if(search_position < search.length &&
//           text_char.toLowerCase() == search[search_position])
//         {
//             text_char = '<b>' + text_char + '</b>';
//             search_position += 1;
//         }
//         tokens.push(text_char);
//     }
//     // If are characters remaining in the search text,
//     // return an empty string to indicate no match
//     if (search_position != search.length)
//     {
//         return '';
//     }
//     return tokens.join('');
// }

function func()
{
    document.getElementById("outcontainer").innerHTML = "";
    //
    console.log("hello");
    let x = document.getElementById("searchbox").value;
    //alert(x);

    // for(let i = 1; i < arr.length; i++)
    // {
    //     titles[i] = arr[i].data.title;
    // }

    // function fuzzy_match(str,pattern){
    //     pattern = pattern.split("").reduce(function(a,b){ return a+".*"+b; });
    //     return (new RegExp(pattern)).test(str);
    // };

    // result = fuzzy_match(x, title[17]);
    // const options = {
    //     findAllMatches: true
    // }
    
    // const fuse = new Fuse(titles, options);
      
    // const result = fuse.search(x);
    // alert(result);

    for(let i = 1; i < arr.length; i++)
    {
        var y = arr[i].data.title;
        var image = arr[i].data.thumbnail;
        var title = y.toString();
        
        var url = arr[i].data.url;
        
        const options = {
            findAllMatches: true
        }
        const fuse = new Fuse([title], options);
          
        const result = fuse.search(x);
        //alert(result.length);
        if(result.length == 0) 
            document.getElementById("outcontainer").insertAdjacentHTML('afterbegin', '');

        else
        {
            var html = [
                        '<div class="container">',
                        '<img src=' + image + ' alt="IMG" class="image">',
                        '<a href = ' + url + '>',
                        '<div class="overlay">',
                        '<div class="text">' + title + '</div>',
                        '</div>',
                        '</a>',
                        '</div>'
                        
                    ].join('\n');
                
                    document.getElementById("outcontainer").insertAdjacentHTML('afterbegin', html);
        }
        // var res = fuzzy_match(x, title.toString());
        // if(res === '') continue;

        // else{
        //     alert(x);
        //     var chtml = '';
        //     var html = [
        //         '<div class="container">',
        //         '<img src=' + image + ' alt="IMG" class="image">',
        //         '<a href = ' + url + '>',
        //         '<div class="overlay">',
        //         '<div class="text">' + title + '</div>',
        //         '</div>',
        //         '</a>',
        //         '</div>'
                
        //     ].join('\n');
        
        //     chtml = chtml.concat(html);
        //     document.getElementById("outcontainer").innerHTML = chtml;
        //     alert(chtml);
        }

    // for(let i = 1; i < arr.length; i++)
    // {
    //     var y = arr[i].data.title;
    //     var image = arr[i].data.thumbnail;
    //     var title = arr[i].data.title;
    //     var url = arr[i].data.url;
        
    //     const fuzzySearch = function (query) {
    //         const str = this.toLowerCase();
    //         let i = 0, n = -1, l;
    //         query = query.toLowerCase();
    //         for (; l = query[i++] ;){
    //            if (!~(n = str.indexOf(l, n + 1))){
    //               return false;
    //            };
    //         };
    //         return true;
    //      };
    //      String.prototype.fuzzySearch = fuzzySearch;

    //      var res = x.fuzzySearch(y);

        //  if(res == true)
        //  {
        //     //alert(y);
        //     var chtml = '';
        //     var html = [
        //         '<div class="container">',
        //         '<img src=' + image + ' alt="IMG" class="image">',
        //         '<a href = ' + url + '>',
        //         '<div class="overlay">',
        //         '<div class="text">' + title + '</div>',
        //         '</div>',
        //         '</a>',
        //         '</div>'
                
        //     ].join('\n');
        
        //     chtml = chtml.concat(html);
        //     document.getElementById("outcontainer").innerHTML = chtml;
        //     alert(chtml);
        //  }
        //  else
        //  {
        //     document.getElementById("outcontainer").insertAdjacentHTML('afterbegin', '');
        //  }
    
}

//     var chtml = '';
//     for(let i = 0; i < result.length; i++){
//     var image = arr[i].item.data.thumbnail;
//     var title = arr[i].item.data.title;
//     var url = arr[i].item.data.url;


//     var html = [
//         '<div class="container">',
//         '<img src=' + image + ' alt="IMG" class="image">',
//         '<a href = ' + url + '>',
//         '<div class="overlay">',
//         '<div class="text">' + title + '</div>',
//         '</div>',
//         '</a>',
//         '</div>'
        
//     ].join('\n');

//     chtml = chtml.concat(html);
    
//     }
    
// document.getElementById("outcontainer").innerHTML = chtml;
// }

document.getElementById("bttn").addEventListener("click", func);
//document.getElementById("frm1").addEventListener("submit", func);


// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

//window.onload = func;