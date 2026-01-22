/* Data is stored here*/
let count = 0;

/*UI reference- Connecting HTML with JS*/
const countDisplay = document.getElementById("count");
const statusMessage = document.getElementById("statusMessage");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");



//Update status text based on count
function updateStatusMessage() {
    if (count < 5) {
        statusMessage.textContent = "Low";
    }
    else if (count < 10) {
        statusMessage.textContent = "Medium";
    }
    else {
        statusMessage.textContent = "High";
    }
}

// central UI Update
function updateUI(){
    countDisplay.textContent = count;
    updateStatusMessage();
}

// Event Handlers
increaseBtn.addEventListener("click", function (){
    count++;
    updateUI();
})

resetBtn.addEventListener("click", function (){
    count = 0;
    updateUI();
})

decreaseBtn.addEventListener("click", function (){
    count--;
    updateUI();
})

updateUI();

/*Function- Updating Data and updating UI*/
/*function updateCount(newValue){
    count = newValue;
    countDisplay.textContent = count;
}

/*Working of functions- User interaction*/
/*increaseBtn.addEventListener("click", function(){
    updateCount(count + 1);
    /*count = count + 1;*/
    /*countDisplay.textContent = count;
});

resetBtn.addEventListener("click", function(){
    updateCount(0);
    /*count = 0;*/
    /*countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", function(){
    updateCount(count - 1);
    /*count = count - 1;*/
    /*countDisplay.textContent = count;
});
*/
