let curPageNo=0;
const loadPage=async(curPage,repos)=>{
    const reposCont=document.getElementById('repos');
    reposCont.innerHTML="";
    for(let ind=curPage*10;ind<curPage*10+10&&ind<repos.length;ind++){
        let tit=repos[ind].name;
        let desc=repos[ind].description;
        if(desc==null){
            desc="This is a demo description";
        }
        let langurl=repos[ind].languages_url;
        const langarr=await fetch(langurl).then(d=>d.json());
        let olangarr=[];
        for(const [key,val] of Object.entries(langarr)){
            olangarr.push(key);
        }
        let currRepo=document.createElement('div');
        currRepo.classList.add('repo');
        let currRepoTit=document.createElement('h2');
        currRepoTit.classList.add('repo-title');
        currRepoTit.innerHTML=tit;
        let currRepoDesc=document.createElement('p');
        currRepoDesc.classList.add('repo-desc');
        currRepoDesc.innerHTML=desc;
        let currRepoBtnCont=document.createElement('div');
        currRepoBtnCont.classList.add('repo-lang');
        olangarr.forEach(e => {
            currRepoBtnCont.innerHTML+=`<button type="button" class="btn btn-primary">${e}</button>`
        });
        currRepo.appendChild(currRepoTit);
        currRepo.appendChild(currRepoDesc);
        currRepo.appendChild(currRepoBtnCont);
        reposCont.appendChild(currRepo);
    }
}
const userAction=async()=>{
    const githubUserId='OmVibhandik';
    const response = await fetch('https://api.github.com/users/'+githubUserId);
    const data = await response.json();
    console.log(data);
    document.getElementById('c-image').src=data.avatar_url;
    document.getElementById('acc-name').innerText=data.name;
    document.getElementById('acc-bio').innerText=data.bio;
    document.getElementById('acc-loc').innerHTML+=" "+data.location;
    if(!data.twitter_username){
        document.getElementById('acc-twitter').innerHTML+="www.twitter.com";
        document.getElementById('acc-twitter').href="https://www.twitter.com";
    }
    else{
        document.getElementById('acc-twitter').innerHTML+="www.twitter.com/"+data.twitter_username;
        document.getElementById('acc-twitter').href="https://www.twitter.com/"+data.twitter_username;
    }
    document.getElementById('acc-github-username').href="https://www.github.com/"+data.login;
    document.getElementById('acc-github-username').innerHTML+="https://www.github.com/"+data.login;
    const repoTemp=await fetch('https://api.github.com/users/'+githubUserId+'/repos');
    const repos=await repoTemp.json();
    var maxPages=((repos.length)/10)
    maxPages=Math.ceil(maxPages);
    let pl=document.getElementById('page-links');
    let prev=document.createElement('li');
    prev.classList.add('page-item');
    prev.innerHTML+=`<a class="page-link">Previous</a>`;
    prev.addEventListener('click',()=>{
        if(curPageNo>0){ 
            curPageNo--;
            loadPage(curPageNo,repos);
        }
    });
    pl.appendChild(prev);
    for (let i = 0; i <maxPages; i++) {
        let el=document.createElement('li');
        el.classList.add('page-item');
        el.innerHTML+=`<a class="page-link">${i+1}</a>`;
        el.addEventListener('click',async()=>{
            await loadPage(i,repos);
        });
        pl.appendChild(el);
    }
    let nxt=document.createElement('li');
    nxt.classList.add('page-item');
    nxt.innerHTML+=`<a class="page-link">Next</a>`;
    nxt.addEventListener('click',()=>{
        if(curPageNo<maxPages-1){
            curPageNo++;
            loadPage(curPageNo,repos);
        }
    });
    pl.appendChild(nxt);
    await loadPage(curPageNo,repos);
}
userAction();
window.setTimeout(()=>{
        var loade=document.getElementsByClassName('loader')[0];
        loade.style.display='none';
        var nodes=document.getElementById('repos');
        nodes.style.display='grid';
    }, 3000);
