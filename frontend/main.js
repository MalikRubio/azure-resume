window.addEventListener('DOMCONTENTLOADED', (event) =>{
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(fuctionapi).then(response => {
        return response.json()
    }).then(resonse =>{
        console.log("Website called function API.")
        count = response.count;
        doucument.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}