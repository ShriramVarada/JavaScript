function ShipFactory(){
    var ship = {
        coordinates: [],
        length: 4,
        hits: 0,
        hit : function(numHits){
            
        },
        isSunk : function(){
            if(this.hits >= this.length){
                return true;
            }
        },
        coordinatesetter : function(coordinates){

        }
    };
    return ship;
}
export {ShipFactory};
module.exports = ShipFactory;