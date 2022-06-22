export const BubbleSort = (array, colorKeys, steps, colorSteps) =>{

    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length-1-i; j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            colorKeys[j] = 1;
            colorKeys[j+1] = 1;

            steps.push([...array]);
            colorSteps.push([...colorKeys]);

            colorKeys[j] = 0;
            colorKeys[j+1] = 0;
        }
        
        colorKeys[array.length-1-i] = 2;
        steps.push([...array]);
        colorSteps.push([...colorKeys]);
    }
    steps.push([...array]);
    colorSteps.push([...colorKeys]);

}


export const SelectionSort = (array, colorKeys, steps, colorSteps) => {

    for(let i=0; i<array.length; i++){
        let min = i;
        for(let j=i+1; j<array.length; j++){
            if(array[j] < array[min]){
                min = j;      
            }
            colorKeys[j] = 1;
            colorKeys[min] = 1;
            colorKeys[i] = 1;
            
            colorSteps.push([...colorKeys]);
            steps.push([...array]);

            colorKeys[j] = 0;
            colorKeys[min] = 0;

        }

        let swap = array[i];
        array[i] = array[min];
        array[min] = swap;

        colorKeys[min] = 0;
        colorKeys[i] = 2;

        colorSteps.push([...colorKeys]);
        steps.push([...array]);

    }
    colorSteps.push([...colorKeys]);
    steps.push([...array]);
}