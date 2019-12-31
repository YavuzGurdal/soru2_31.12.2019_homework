/*
2. Problem :
    Parametre olarak bir Array ve bir de string/number değer alacak. 
    Verilen değeri Array'den çıkararak Array'in son halini console'a yazdıran bir 
     fonksiyonu yazmak.

    Örneğin :
    console.log(func_name ([2, 5, 9, 6], 5));   ---> [2, 9, 6] olacak şekilde.
*/
let degeriArrdenCikaranFunk = function  (arr, deger) {
        
    if (arr.indexOf(deger) == -1) {

        console.log(`Array`);
        console.log(arr);

        return `Yazdığınız : ${deger} Array de yoktur.`;   
    }
    
    let filterArray = arr.filter( function (item) {
        return item != deger;
    });
    

    console.log(`İlk array :`);
    console.log(arr);

    console.log(`Yazılan değer :`);
    console.log(deger);

    console.log(`Aynı olan elemanların çıkarılmış olduğu yeni array :`);
    return filterArray;  
}
console.log(degeriArrdenCikaranFunk([1, 2, 3, 4, 5, 6, 7, 8], 5));