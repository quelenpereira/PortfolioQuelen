const mario = document.querySelection('.mario');
const pipe = document.querySelection('.pipe');

const jump = ( ) =>{
	mario.classList.add('jump');

	setTimeout(()=>{mario.classList.remove('jump');}, 500);
}


const loop = setInterval(() =>
	{ const pipePostion = pipe.offsetLeft;
		marioPosition = +window.getComputedStyle(mario).bottom.replace})

if(pipePostion <=120 && pipePostion > 0 && marioPosition <112){
	pipe.style.animation = 'none';
	pipe.style.left = `${pipePostion}px`;

	mario.style.animation = 'none';
	mario.style.bottom = `${marioPosition}px`;

	mario.src = 'img/game-over.jpeg';
	mario.style.whidth = '75px';
	mario.style.marginLeft = '50px';
	clearInterval(loop);
}


}



document.addEventListener('keydown', jump);