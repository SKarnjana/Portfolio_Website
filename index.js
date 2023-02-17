let coldFusionCount = 0;
let whiteJacksCount = 0;
let linkageCount = 0;
let bitterLaserCount = 0;
let comicMaroonCount = 0;

// *******************  Cold Fusion  **********************
const coldFusionLike = document.querySelector('.like-cold-fusion');
const coldFusionDislike = document.querySelector('.dislike-cold-fusion');

coldFusionLike.addEventListener('click', ()=>{
    coldFusionCount++
    document.querySelector('.cold-fusion-count').innerHTML = `Likes ${coldFusionCount}`;
})
coldFusionDislike.addEventListener('click', ()=>{
    coldFusionCount--
    document.querySelector('.cold-fusion-count').innerHTML = `Likes ${coldFusionCount}`;
})

// *******************  WhiteJacks  **********************
const whiteJacksLike = document.querySelector('.like-whitejacks');
const whiteJacksDislike = document.querySelector('.dislike-whitejacks');

whiteJacksLike.addEventListener('click', ()=>{
    whiteJacksCount++
    document.querySelector('.whitejecks-count').innerHTML = `Likes ${whiteJacksCount}`;
})
whiteJacksDislike.addEventListener('click', ()=>{
    whiteJacksCount--
    document.querySelector('.whitejecks-count').innerHTML = `Likes ${whiteJacksCount}`;
})

// *********************  Linkage  **********************
const linkageLike = document.querySelector('.like-linkage');
const linkageDislike = document.querySelector('.dislike-linkage');

linkageLike.addEventListener('click', ()=>{
    linkageCount++
    document.querySelector('.linkage-count').innerHTML = `Likes ${linkageCount}`;
})
linkageDislike.addEventListener('click', ()=>{
    linkageCount--
    document.querySelector('.linkage-count').innerHTML = `Likes ${linkageCount}`;
})

// *******************  Bitter Laser  **********************
const bitterLaserLike = document.querySelector('.like-bitter-laser');
const bitterLaserDislike = document.querySelector('.dislike-bitter-laser');

bitterLaserLike.addEventListener('click', ()=>{
    bitterLaserCount++
    document.querySelector('.bitter-laser-count').innerHTML = `Likes ${bitterLaserCount}`;
})
bitterLaserDislike.addEventListener('click', ()=>{
    bitterLaserCount--
    document.querySelector('.bitter-laser-count').innerHTML = `Likes ${bitterLaserCount}`;
})

// *******************  Comic Maroon  **********************
const comicMaroonLike = document.querySelector('.like-comic-maroon');
const comicMaroonDislike = document.querySelector('.dislike-comic-maroon');

comicMaroonLike.addEventListener('click', ()=>{
    comicMaroonCount++
    document.querySelector('.comic-maroon-count').innerHTML = `Likes ${comicMaroonCount}`;
})
comicMaroonDislike.addEventListener('click', ()=>{
    comicMaroonCount--
    document.querySelector('.comic-maroon-count').innerHTML = `Likes ${comicMaroonCount}`;
})

