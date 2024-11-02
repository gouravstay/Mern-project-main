const navDialog = document.getElementById('nav-dialog');

function handleMenu(){
    navDialog.classList.toggle('hidden');
}

function setupIntersectionObsever(element, isLTR, speed){
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll', scrollHandler)
        } else{
            document.removeEventListener('scroll', scrollHandler)
        }
        
    }
    const intersectionObsever = new IntersectionObsever(intersectionCallback);

    intersectionObsever.observe(element);

    function scrollHandler(){
      const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
      element.style.transfrom = `translateX(${translateX}px)`;
    }
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');


setupIntersectionObsever(line1, true, 0.15)
setupIntersectionObsever(line2, false, 0.15)
setupIntersectionObsever(line3, true, 0.15)

