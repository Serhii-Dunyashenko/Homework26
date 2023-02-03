const vote = Array.prototype.slice.call(document.querySelectorAll(".voting_img"));

function voteFor () {

    const targetIndex = vote.indexOf(event.currentTarget);
    const counter = +document.querySelectorAll(".voting_counter")[targetIndex].innerHTML;
    const counterValue = counter + 1
    document.querySelectorAll(".voting_counter")[targetIndex].innerHTML = counterValue
    console.log(targetIndex);

    // Думав, шо здохну, поки додумався...
};

for (let index = 0; index < vote.length; index++) {
    vote[index].addEventListener('click', voteFor)
}