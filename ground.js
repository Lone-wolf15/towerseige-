class ground {
    constructor(){
        var options = {
isStatic: true
        }
        this.body=Bodies.rectangle(450,390,900,20,options)
        
        World .add (world,this.body)
    }
    display(){
        
        var  pos =this. body.position
        
        rectMode (CENTER)
        rect(0,0,this.width,this.height)

    }
}