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


export const MergeSort = (array, colorKeys, steps, colorSteps) => {
    const helper = (array, start, end) =>{
        if(end - start < 2) return array;
    
        let middle = Math.floor((end + start) / 2);

    
        let left = helper(array, start, middle).slice();
        let right = helper(array, middle, end).slice();
        //merge

        let i=start, j=middle, k = start;
    
        while(i < middle && j < end){

            if(left[i] < right[j]){
                colorKeys[i] = 1;
                colorKeys[k] = 1;
                steps.push([...array]);
                colorSteps.push([...colorKeys]);
                colorKeys[i] = 0;
                colorKeys[k] = 0;

                array[k] = left[i];
                i++;
                k++;
            }
            else{
                colorKeys[j] = 1;
                colorKeys[k] = 1;
                steps.push([...array]);
                colorSteps.push([...colorKeys]);
                colorKeys[j] = 0;
                colorKeys[k] = 0;

                array[k] = right[j];
                j++;
                k++;
            }
        }
    
        while(i < middle) {
            colorKeys[i] = 1;
            colorKeys[k] = 1;
            steps.push([...array]);
            colorSteps.push([...colorKeys]);
            colorKeys[i] = 0;
            colorKeys[k] = 0;

            array[k] = left[i];
            i++;
            k++;
        }
    
        while(j < end) {
            colorKeys[j] = 1;
            colorKeys[k] = 1;
            steps.push([...array]);
            colorSteps.push([...colorKeys]);
            colorKeys[j] = 0;
            colorKeys[k] = 0;

            array[k] = right[j];
            j++;
            k++;
        }

        return array;
    }

    helper(array, 0, array.length);

    colorSteps.push([...colorKeys]);
    steps.push([...array]);

    colorKeys = new Array(colorKeys.length).fill(2);

    colorSteps.push([...colorKeys]);
    steps.push([...array]);

}



export const InsertionSort = (array, colorKeys, steps, colorSteps) => {
    for(let i=0; i<array.length-1; i++){
        let j = i;
        let temp = array[j+1];

        colorKeys[j+1] = 1;  
        steps.push([...array]);
        colorSteps.push([...colorKeys]);
        colorKeys[j+1] = 0;  

        while(temp < array[j] && j>=0){

            colorKeys[j] = 1;
            colorKeys[j+1] = 1;
            steps.push([...array]);
            colorSteps.push([...colorKeys]);
            colorKeys[j] = 0;
            colorKeys[j+1] = 0;

            array[j+1] = array[j];
            j--;
        }

        //mark swap


        array[j+1] = temp;
    }

    colorSteps.push([...colorKeys]);
    steps.push([...array]);

    colorKeys = new Array(colorKeys.length).fill(2);

    colorSteps.push([...colorKeys]);
    steps.push([...array]);
}