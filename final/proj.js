let con = document.querySelector(".con");
let items_gallery= document.querySelector(".items-gallery");
let item_row = document.querySelector(".item-row");

let array_img = [
  {
    key: 1,
    url: "../images/1.jpg",
  },
  {
    key: 2,
    url: "../images/2.jpg",
  },
  {
    key: 3,
    url: "../images/3.jpg",
  },
  {
    key: 4,
    url: "../images/4.jpg",
  },
  {
    key: 5,
    url: "../images/5.jpg",
  },
  {
    key: 6,
    url: "../images/6.jpg",
  },
];

let sliderHTML = `
  <div class="slider" style="--qty:${array_img.length};">
    ${array_img
      .map(
        (item, i) => `
      <div class="list" style="--pos:${i + 1};">
        <img src="${item.url}" alt="">
      </div>
    `
      )
      .join("")}
  </div>
`;

let gallery_img = [
  {
    key: 1,
    url: "../images/2.jpg",
  },
  {
    key: 2,
    url: "../images/1.jpg",
  },
  {
    key: 3,
    url: "../images/3.jpg",
  },
  {
    key: 4,
    url: "../images/5.jpg",
  },
  {
    key: 5,
    url: "../images/6.jpg",
  },
  {
    key: 6,
    url: "../images/4.jpg",
  },
  {
    key: 7,
    url: "../images/7.jpg",
  },
  {
    key: 8,
    url: "../images/8.png",
  },
  {
    key: 9,
    url: "../images/9.jpg",
  },
  {
    key: 10,
    url: "../images/11.jpg",
  },
  {
    key: 11,
    url: "../images/10.jpg",
  },
  {
    key: 12,
    url: "../images/14.jpg",
  },
  {
    key: 13,
    url: "../images/13.jpg",
  },
  {
    key: 14,
    url: "../images/12.jpg",
  },
  //
  //
  
];
console.log(gallery_img);


for(let i = 1 ; i<12;i++){
  if (i == 5){
    // continue
  }
   img = {
     key: i + 14,
     url: `../images/g${i + 1}.jpg`,
   };
   gallery_img.push(img)

}

let grid_sm = [
  "col-span-1",
  "row-span-2",
  "col-span-1",
  "col-span-2",
  "row-span-2",
  "col-span-1",
  "col-span-1",
  "col-span-2 sm:row-span-2",
  "row-span-2",
  "row-span-2",
  "row-span-2",
  // "row-span-2",
  
];
for(let i = 1 ; i<14;i++){
  grid_sm.push("row-span-3")
}


let grid_md = [
  "col-span-2",
  "col-span-1",
  "col-span-1",
  //
  "col-span-1",
  "col-span-2",
  "row-span-2",
  //
  "col-span-1",
  "col-span-2",
  "col-span-1",
  //
  "col-span-1",
  "row-span-1",
  "row-span-2",
  //
  "col-span-1",
  "col-span-1",
  //
  "row-span-2",
  "row-span-1",
  "row-span-3",
  //
  "row-span-2",
  "row-span-2",
  "col-span-2",
  "row-span-2",
];

let grid_lg = [
  "col-span-2",
  "row-span-2",
  "col-span-1",
  //
  "row-span-1",
  "row-span-2",
  "col-span-1",
  //
  "row-span-2",
  "col-span-1",
  "row-span-2",
  //
  "col-span-1 lg:row-span-1",
  "col-span-2",
  "col-span-1",
  //
  "col-span-1",
  "col-span-1",
  "",
  //
  "",
  "",
  "",
  //
  "",
  "",
  "",
  //
  "",
  "row-span-2",
  "col-span-2 lg:row-span-2"
];


let galleryHTML = `${gallery_img
  .map(
    (item, i) => `
    <div class="card bg-gray-800 overflow-hidden border border-black rounded sm:${
      grid_sm[i]
    }  lg:${grid_lg[i]} md:${grid_md[i]} ">
      <img src="${item.url}" alt="image-${
      i + 1
    }" class="w-full h-full object-cover">
    </div>
    `
  )
  .join("")}`;

let rowsImg = `${gallery_img
  .map(
    (e, i) => `
  <div class="item-col"><img src="${e.url}" alt=""></div>
`
  )
  .join("")}`;

// item_row.innerHTML = rowsImg;
con.innerHTML = sliderHTML;
items_gallery.innerHTML = galleryHTML;

