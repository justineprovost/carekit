function pageTransition (){
    var tl = gsap.timeline();
    
    tl.to('ul.transition li', {durationL .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2})
    tl.to('ul.transition li', {durationL .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1})
}

function contentAnimation(){
    
    var tl= gsap.timeline();
    tl.from('left', {duration:1.5, translateY: 50, opacity:0})
}

function delay(n) {
    n - n || 2000;
    return new Promise (done => {
        setTimeout(() => {
            done();
        }, n);
        });
}

barba.init({
    sync: true,,
    
    transitions: [{
        async leave(data) {
            
            const done = this.async();
            
            pageTransition();
            await dlay(1500);
            done();
        }
        
        async enter(data) {
        contentAnimation();
    }
    }]
})