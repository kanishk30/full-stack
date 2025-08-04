let ladder = {
    stop: 0,
    up(){
        this.stop++;
        return this;
    },
    down(){
        this.stop--;
        return this;
    },
    current: function(){
        console.log(this.stop);
        return this;
    }
}

ladder.up().down().up().up().up().down().current();