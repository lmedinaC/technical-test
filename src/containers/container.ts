export class Container {
    private arrayInt: number[];
    
    constructor(arrayInt: number[] ){
        this.arrayInt = arrayInt;
    }   

    public getMaximumArea() : Number {
        let maxArea : number = 0;
        let i : number = 0; 
        let j : number = this.arrayInt.length -1;

        while(i<j){
            let minHeight = Math.min(this.arrayInt[i],this.arrayInt[j]);
            let tempArea = minHeight * (j-i);
            maxArea = Math.max(maxArea,tempArea);

            if(this.arrayInt[i] < this.arrayInt[j])
                i ++;
            else 
                j --;
        }

        return maxArea;
    }
}
