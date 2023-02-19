const likeDislike = (likeElem, dislikeElem, countElem) => {
    
    let countValue = 0;
    const likeBtn = document.querySelector(likeElem);
    const dislikeBtn = document.querySelector(dislikeElem);

    likeBtn.addEventListener('click', ()=>{
        countValue++
        document.querySelector(countElem).innerHTML = `Likes ${countValue}`;
    })
    dislikeBtn.addEventListener('click', ()=>{
        countValue--
        document.querySelector(countElem).innerHTML = `Likes ${countValue}`;
    })
}

likeDislike('.like-cold-fusion', '.dislike-cold-fusion', '.cold-fusion-count')
likeDislike('.like-whitejacks', '.dislike-whitejacks', '.whitejecks-count')
likeDislike('.like-linkage', '.dislike-linkage', '.linkage-count')
likeDislike('.like-bitter-laser', '.dislike-bitter-laser', '.bitter-laser-count')
likeDislike('.like-comic-maroon', '.dislike-comic-maroon', '.comic-maroon-count')
