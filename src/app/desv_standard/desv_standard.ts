const desv_standard = (data: number[], dataMean: number)=>{
    var sum = 0;
    for(var i=0; i< data.length; i++){
        sum+=(data[i]-dataMean)**2;
    }
    var calculatedStdDev= sum / (data.length-1);
    calculatedStdDev= Math.sqrt(calculatedStdDev);

    return Math.round(calculatedStdDev*100)/100;
};

export {desv_standard};
